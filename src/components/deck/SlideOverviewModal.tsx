"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Grid } from "lucide-react";
import { SlideMeta } from "@/types/deck";

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideMeta[];
  currentSlide: number;
  onSelectSlide: (id: number) => void;
}

export default function SlideOverviewModal({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onSelectSlide,
}: SlideOverviewModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-10 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center max-w-7xl mx-auto w-full pb-8">
            <div className="flex items-center gap-3 text-white">
              <Grid className="w-6 h-6 text-[#1fa97a]" />
              <h2 className="text-2xl font-bold">Slide Overview ({slides.length} slides)</h2>
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Grid of Slide Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
            {slides.map((s) => {
              const isActive = s.id === currentSlide;
              return (
                <motion.div
                  key={s.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onSelectSlide(s.id);
                    onClose();
                  }}
                  className={`group relative rounded-xl border p-4 flex flex-col justify-between h-[180px] cursor-pointer transition-all shadow-lg ${
                    isActive
                      ? "border-[#1fa97a] ring-2 ring-[#1fa97a] bg-[#16294a]"
                      : "border-white/10 hover:border-white/40 bg-[#0e1b2e]"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-[#1fa97a] text-[#0e1b2e]"
                          : "bg-white/15 text-white/80"
                      }`}
                    >
                      Slide {s.id}
                    </span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                      {s.theme}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-white/90 line-clamp-3 leading-snug">
                    {s.label}
                  </p>

                  <div className="text-[11px] text-[#1fa97a] font-medium flex items-center justify-between">
                    <span>Jump to slide</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
