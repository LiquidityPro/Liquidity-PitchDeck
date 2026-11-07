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
          className="fixed inset-0 z-50 bg-background/80 flex flex-col p-10 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center max-w-7xl mx-auto w-full pb-8">
            <div className="flex items-center gap-3 text-foreground">
              <Grid className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Slide Overview ({slides.length} slides)</h2>
            </div>
            <button
              onClick={onClose}
              className="p-3 bg-muted/70 hover:bg-muted text-foreground rounded-xl transition-colors cursor-pointer"
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
                      ? "border-primary ring-2 ring-primary bg-card"
                      : "border-border hover:border-primary/40 bg-background"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground/80"
                      }`}
                    >
                      Slide {s.id}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                      {s.theme}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-foreground line-clamp-3 leading-snug">
                    {s.label}
                  </p>

                  <div className="text-[11px] text-primary font-medium flex items-center justify-between">
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
