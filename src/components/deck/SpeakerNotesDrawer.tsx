"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";
import { SlideMeta } from "@/types/deck";

interface SpeakerNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideMeta;
}

export default function SpeakerNotesDrawer({
  isOpen,
  onClose,
  slide,
}: SpeakerNotesDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-8 z-50 w-[550px] max-h-[480px] bg-card/95 border border-border rounded-md shadow-2xl p-6 flex flex-col text-foreground"
        >
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/15 rounded-lg text-primary">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-foreground">Speaker Notes</h4>
                <p className="text-xs text-muted-foreground">
                  Slide {slide.id}: {slide.label}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Notes Content */}
          <div className="mt-4 overflow-y-auto pr-2 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap font-sans space-y-3">
            {slide.speakerNotes ? (
              slide.speakerNotes
            ) : (
              <span className="italic text-muted-foreground">
                No custom notes recorded for this slide.
              </span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
