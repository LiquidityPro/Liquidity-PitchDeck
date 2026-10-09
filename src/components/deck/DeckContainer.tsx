"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SLIDES_DATA } from "@/data/slidesData";
import SlideRenderer from "@/components/deck/SlideRenderer";
import DeckControls from "@/components/deck/DeckControls";
import SpeakerNotesDrawer from "@/components/deck/SpeakerNotesDrawer";
import SlideOverviewModal from "@/components/deck/SlideOverviewModal";

export default function DeckContainer() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [scale, setScale] = useState(1);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = SLIDES_DATA.length;
  const currentSlideMeta = SLIDES_DATA[currentSlide - 1] || SLIDES_DATA[0];

  // Sync hash URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const num = parseInt(hash, 10);
      if (!isNaN(num) && num >= 1 && num <= totalSlides) {
        setCurrentSlide(num);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [totalSlides]);

  const updateSlide = useCallback(
    (newSlide: number, dir: number = 1) => {
      const bounded = Math.max(1, Math.min(totalSlides, newSlide));
      setDirection(dir);
      setCurrentSlide(bounded);
      try {
        window.history.replaceState(null, "", `#${bounded}`);
      } catch {
        // Safe fallback in restricted environments
      }
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      updateSlide(currentSlide + 1, 1);
    }
  }, [currentSlide, totalSlides, updateSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      updateSlide(currentSlide - 1, -1);
    }
  }, [currentSlide, updateSlide]);

  // Handle scaling to 1920x1080 canvas
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const s = Math.min(w / 1920, h / 1080);
      setScale(s > 0 ? s : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        updateSlide(1, -1);
      } else if (e.key === "End") {
        e.preventDefault();
        updateSlide(totalSlides, 1);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "g" || e.key === "G") {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      } else if (e.key === "s" || e.key === "S" || e.key === "n" || e.key === "N") {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOverviewOpen(false);
        setIsNotesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, updateSlide, totalSlides]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= totalSlides) {
          setIsAutoPlay(false);
          return prev;
        }
        return prev + 1;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay, totalSlides]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center select-none"
    >
      {/* Scaled Presentation Canvas */}
      <div
        className="relative overflow-hidden shadow-2xl flex-shrink-0"
        style={{
          width: 1920 * scale,
          height: 1080 * scale,
        }}
      >
        <div
          className="origin-top-left"
          style={{
            transform: `scale(${scale})`,
            width: 1920,
            height: 1080,
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <SlideRenderer slideId={currentSlide} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Presentation Dock */}
      <DeckControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isNotesOpen={isNotesOpen}
        isFullscreen={isFullscreen}
        isAutoPlay={isAutoPlay}
        onPrev={prevSlide}
        onNext={nextSlide}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onToggleOverview={() => setIsOverviewOpen((prev) => !prev)}
        onToggleFullscreen={toggleFullscreen}
        onToggleAutoPlay={() => setIsAutoPlay((prev) => !prev)}
        onPrint={handlePrint}
      />

      {/* Speaker Notes Drawer */}
      <SpeakerNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slide={currentSlideMeta}
      />

      {/* Slide Overview Grid Modal */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={SLIDES_DATA}
        currentSlide={currentSlide}
        onSelectSlide={(id) => updateSlide(id)}
      />
    </div>
  );
}
