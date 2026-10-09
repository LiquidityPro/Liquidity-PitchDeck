"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Users, PieChart, Sparkles } from "lucide-react";

export default function Slide5TAM() {
  const tiers = [
    {
      num: "30M",
      tag: "TAM • 2030 TARGET",
      label: "Retail investors targeted by 2030 under the proposed NGX Capital Market Master Plan.",
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
      pct: "100%",
    },
    {
      num: "2.7M",
      tag: "SAM • ACTIVE TODAY",
      label: "Active retail investor accounts reported today—a 13-fold increase over the past 3 years.",
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
      pct: "9.0%",
    },
    {
      num: "56,375",
      tag: "SOM • YEAR 5 BASE CASE",
      label: "Our Year 5 target: captures just ~2.1% of today's active pool, generating ₦854M revenue.",
      color: "text-[#f4f1ea]",
      border: "border-[#1fa97a]/50",
      bg: "bg-[#1fa97a]/20",
      pct: "0.19%",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Ambient Lighting */}
      <div className="absolute -top-32 right-32 w-[650px] h-[650px] bg-[#1fa97a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-32 w-[650px] h-[650px] bg-[#e0b04a]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex flex-col justify-between w-full h-full p-28 box-border relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#e0b04a]/15 border border-[#e0b04a]/30 w-fit">
            <Target className="w-4 h-4 text-[#e0b04a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#e0b04a] tracking-wider uppercase">
              MARKET OPPORTUNITY • TAM / SAM / SOM
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            A large market, and we need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">small share.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            We do not need aggressive market dominance. Capturing just a sliver of Nigeria’s accelerating equity expansion creates a highly profitable business.
          </p>
        </motion.div>

        {/* Content: Left Interactive Visual Orbit + Right Tier Breakdown */}
        <div className="grid grid-cols-[540px_1fr] gap-12 items-center my-auto">
          {/* Left Orbit Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center h-[460px] bg-[#132238]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 overflow-hidden"
          >
            {/* Outer Orbit (TAM 30M) */}
            <div className="w-[400px] h-[400px] rounded-full border border-dashed border-emerald-500/30 flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
              <span className="absolute -top-3 px-3 py-0.5 rounded-full bg-[#0e1b2e] border border-emerald-500/40 text-[11px] font-mono text-emerald-400 font-bold">
                TAM: 30M Target
              </span>
            </div>

            {/* Middle Orbit (SAM 2.7M) */}
            <div className="absolute w-[270px] h-[270px] rounded-full border border-amber-500/40 bg-amber-500/5 flex items-center justify-center">
              <span className="absolute -top-3 px-3 py-0.5 rounded-full bg-[#0e1b2e] border border-amber-500/40 text-[11px] font-mono text-amber-300 font-bold">
                SAM: 2.7M Active
              </span>
            </div>

            {/* Core Center (SOM 56k) */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-[#1fa97a] to-emerald-300 flex flex-col items-center justify-center text-center p-2 shadow-[0_0_40px_rgba(31,169,122,0.6)] text-[#0e1b2e]"
            >
              <Sparkles className="w-5 h-5 mb-0.5" />
              <div className="font-extrabold text-[22px] leading-none">56,375</div>
              <div className="text-[10px] font-bold uppercase tracking-wider mt-1">Our Y5 Case</div>
            </motion.div>

            <div className="absolute bottom-4 text-center text-xs text-white/40">
              Concentric representation (not to scale) • Source: NGX, CIS Nigeria
            </div>
          </motion.div>

          {/* Right Cards Stack */}
          <div className="flex flex-col gap-5">
            {tiers.map((t, idx) => (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * (idx + 1) }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-center gap-8 p-6 bg-[#132238]/85 hover:bg-[#16294a]/90 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 shadow-md transition-all"
              >
                <div className="flex flex-col min-w-[200px]">
                  <span className={`text-[12px] font-bold font-mono tracking-wider ${t.color}`}>
                    {t.tag}
                  </span>
                  <span className="font-sans text-[52px] font-extrabold text-[#f4f1ea] leading-tight">
                    {t.num}
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-l border-white/10 pl-6 flex-1">
                  <p className="font-sans text-[22px] font-medium text-[#f4f1ea]/85 leading-snug">
                    {t.label}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Bottom Proof Math Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-5 rounded-2xl border-2 border-[#1fa97a] bg-[#1fa97a]/15 text-[22px] text-[#f4f1ea] leading-snug"
            >
              <strong className="text-[#1fa97a]">The 1% Math:</strong> Capturing just 1% of the 30M market (300,000 accounts) at ₦1,067/account/month yields <strong className="text-white">₦3.8B in annual recurring revenue</strong>.
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-[#1fa97a] tracking-wide pt-2">
          <span>Targeting ~2.1% of existing active accounts by Year 5</span>
          <div>Liquidity Pro | Confidential</div>
        </div>
      </div>
    </div>
  );
}
