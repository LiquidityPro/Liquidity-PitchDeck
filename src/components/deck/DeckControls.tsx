"use client";

import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  Grid,
  FileText,
  Printer,
} from "lucide-react";

interface DeckControlsProps {
  currentSlide: number;
  totalSlides: number;
  isNotesOpen: boolean;
  isFullscreen: boolean;
  isAutoPlay: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleNotes: () => void;
  onToggleOverview: () => void;
  onToggleFullscreen: () => void;
  onToggleAutoPlay: () => void;
  onPrint: () => void;
}

export default function DeckControls({
  currentSlide,
  totalSlides,
  isNotesOpen,
  isFullscreen,
  isAutoPlay,
  onPrev,
  onNext,
  onToggleNotes,
  onToggleOverview,
  onToggleFullscreen,
  onToggleAutoPlay,
  onPrint,
}: DeckControlsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 bg-[#0e1b2e]/90 hover:bg-[#0e1b2e] backdrop-blur-xl border border-white/20 rounded-full shadow-2xl text-white transition-all select-none">
      {/* Prev */}
      <button
        onClick={onPrev}
        disabled={currentSlide === 1}
        className="p-2 hover:bg-white/10 active:scale-95 disabled:opacity-30 disabled:pointer-events-none rounded-full transition-all cursor-pointer"
        title="Previous Slide (← / ↑)"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Slide Counter / Grid View Trigger */}
      <button
        onClick={onToggleOverview}
        className="px-3 py-1 font-mono text-xs font-semibold tracking-wider hover:bg-white/10 rounded-full transition-colors cursor-pointer"
        title="Open Slide Grid (G)"
      >
        {currentSlide} / {totalSlides}
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides}
        className="p-2 hover:bg-white/10 active:scale-95 disabled:opacity-30 disabled:pointer-events-none rounded-full transition-all cursor-pointer"
        title="Next Slide (→ / ↓ / Space)"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="w-[1px] h-4 bg-white/20 mx-1" />

      {/* Slide Grid */}
      <button
        onClick={onToggleOverview}
        className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white/80 hover:text-white"
        title="Slide Overview (G)"
      >
        <Grid className="w-4 h-4" />
      </button>

      {/* Speaker Notes */}
      <button
        onClick={onToggleNotes}
        className={`p-2 rounded-full transition-colors cursor-pointer ${
          isNotesOpen
            ? "bg-[#1fa97a] text-[#0e1b2e]"
            : "hover:bg-white/10 text-white/80 hover:text-white"
        }`}
        title="Speaker Notes (S / N)"
      >
        <FileText className="w-4 h-4" />
      </button>

      {/* Auto Play */}
      <button
        onClick={onToggleAutoPlay}
        className={`p-2 rounded-full transition-colors cursor-pointer ${
          isAutoPlay
            ? "bg-[#e0b04a] text-[#0e1b2e]"
            : "hover:bg-white/10 text-white/80 hover:text-white"
        }`}
        title={isAutoPlay ? "Pause Auto-play" : "Auto-play Slides"}
      >
        {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>

      {/* Fullscreen */}
      <button
        onClick={onToggleFullscreen}
        className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white/80 hover:text-white"
        title="Fullscreen (F)"
      >
        {isFullscreen ? (
          <Minimize2 className="w-4 h-4" />
        ) : (
          <Maximize2 className="w-4 h-4" />
        )}
      </button>

      {/* Print */}
      <button
        onClick={onPrint}
        className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white/80 hover:text-white"
        title="Print Deck (Ctrl + P)"
      >
        <Printer className="w-4 h-4" />
      </button>
    </div>
  );
}
