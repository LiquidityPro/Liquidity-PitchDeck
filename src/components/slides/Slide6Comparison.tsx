"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Check, Sparkles, X } from "lucide-react";

export default function Slide6Comparison() {
  const competitors = [
    {
      name: "Bamboo",
      type: "Brokerage",
      focus: "Nigerian & US stocks. SEC-registered.",
      community: "Static learning articles & most-owned stocks list. Zero social feed.",
      hasCommunity: false,
    },
    {
      name: "Chaka (Hisa)",
      type: "Brokerage",
      focus: "Nigerian stocks & ETFs. Flat 1% commission.",
      community: "Atlas in-app research & automated investing. No community features.",
      hasCommunity: false,
    },
    {
      name: "Rise",
      type: "Asset Manager",
      focus: "US dollar asset manager, not a self-directed broker.",
      community: "Expert-managed portfolios. No social interaction or trader debate.",
      hasCommunity: false,
    },
    {
      name: "Trove",
      type: "Brokerage",
      focus: "Equities, bonds, ETFs & treasury bills.",
      community: "Trove Social (shows friends' holdings) & Trove University. Closest rival.",
      hasCommunity: "limited",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Ambient Lighting */}
      <div className="absolute -top-32 left-32 w-[650px] h-[650px] bg-[#1fa97a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-32 w-[650px] h-[650px] bg-[#e0b04a]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex flex-col justify-between w-full h-full p-28 box-border relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1fa97a]/15 border border-[#1fa97a]/30 w-fit">
            <Layers className="w-4 h-4 text-[#1fa97a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#1fa97a] tracking-wider uppercase">
              COMPETITIVE LANDSCAPE • MARKET POSITIONING
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            How we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">compare.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            Other fintechs treat social and research as an afterthought. We built the core trading experience around verified alpha and transparent discussion.
          </p>
        </motion.div>

        {/* Comparison Matrix Table */}
        <div className="my-auto flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#132238]/85 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-[260px_1fr_1fr] bg-white/5 px-10 py-5 border-b border-white/10 text-[20px] font-bold text-white/60 uppercase tracking-wider font-mono">
              <div>Platform</div>
              <div>Market Focus</div>
              <div>Community &amp; Social Alpha Today</div>
            </div>

            {/* Competitor Rows */}
            {competitors.map((c, i) => (
              <div
                key={c.name}
                className={`grid grid-cols-[260px_1fr_1fr] px-10 py-5 items-center text-[23px] hover:bg-white/[0.03] transition-colors ${
                  i !== competitors.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#f4f1ea] text-[26px]">{c.name}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs text-white/70 font-mono">
                    {c.type}
                  </span>
                </div>
                <div className="text-[#f4f1ea]/80 pr-6 leading-snug">{c.focus}</div>
                <div className="text-[#f4f1ea]/70 leading-snug flex items-center gap-2">
                  {c.hasCommunity === false ? (
                    <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  )}
                  <span>{c.community}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Our Unfair Edge Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-between px-10 py-6 border-2 border-[#1fa97a] rounded-3xl bg-[#1fa97a]/15 backdrop-blur-xl shadow-[0_0_40px_rgba(31,169,122,0.15)]"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#1fa97a] text-[#0e1b2e] flex items-center justify-center flex-shrink-0 shadow-lg">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[18px] font-extrabold text-[#1fa97a] tracking-wider uppercase">
                  OUR UNFAIR MOAT
                </span>
                <p className="font-sans text-[26px] font-medium leading-snug text-[#f4f1ea]">
                  A discussion-first Town Square for Nigerian equities, led by verified analysts who disclose actual skin-in-the-game positions.
                </p>
              </div>
            </div>
            <span className="px-4 py-2 rounded-xl bg-[#0e1b2e] border border-[#1fa97a]/40 text-[#1fa97a] font-mono text-sm font-bold flex-shrink-0 ml-8">
              Verified by Retail Survey
            </span>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-[#1fa97a] tracking-wide pt-2">
          <span>Targeting everyday retail + institutional sentiment consumers</span>
          <div>Liquidity Pro | Confidential</div>
        </div>
      </div>
    </div>
  );
}
