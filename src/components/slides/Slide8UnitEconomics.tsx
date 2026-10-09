"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Wallet, ArrowRightLeft, Sparkles, TrendingUp, Cpu } from "lucide-react";

export default function Slide8UnitEconomics() {
  const streams = [
    {
      name: "Trading commission",
      icon: TrendingUp,
      assumption: "2 trades × ₦50,000 × 1%, of which we keep 50%",
      revenue: "₦500",
      pct: "47%",
    },
    {
      name: "Liquidity Pro subscription",
      icon: Sparkles,
      assumption: "3% of active users convert at ₦10,000/month",
      revenue: "₦300",
      pct: "28%",
    },
    {
      name: "Yield on client cash",
      icon: Wallet,
      assumption: "₦20,000 average float balance × 10% net yield ÷ 12",
      revenue: "₦167",
      pct: "16%",
    },
    {
      name: "Internal P2P transfers",
      icon: ArrowRightLeft,
      assumption: "1 internal transfer × ₦100 flat execution fee",
      revenue: "₦100",
      pct: "9%",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Ambient Glow */}
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
            <DollarSign className="w-4 h-4 text-[#1fa97a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#1fa97a] tracking-wider uppercase">
              UNIT ECONOMICS • MONTHLY VALUE PER ACTIVE USER
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            Unit economics per <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">active user.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            Diverse monetization across trading commissions, pro subscriptions, cash float yield, and transfers creates a robust ₦1,067 blended monthly ARPU.
          </p>
        </motion.div>

        {/* Unit Economics Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="my-auto bg-[#132238]/85 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[380px_1fr_260px] bg-white/5 px-10 py-5 border-b border-white/10 text-[20px] font-bold text-white/60 uppercase tracking-wider font-mono">
            <div>Revenue Stream</div>
            <div>Base-Case Assumption</div>
            <div className="text-right">Per Month</div>
          </div>

          {/* Stream Rows */}
          {streams.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="grid grid-cols-[380px_1fr_260px] px-10 py-5 items-center text-[23px] border-b border-white/10 hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1fa97a]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[#f4f1ea] text-[24px]">{s.name}</span>
                </div>
                <div className="text-[#f4f1ea]/80 leading-snug">{s.assumption}</div>
                <div className="text-right flex items-center justify-end gap-3">
                  <span className="text-xs font-mono text-white/50 px-2 py-0.5 rounded bg-white/5">{s.pct}</span>
                  <span className="font-extrabold text-[#f4f1ea] text-[28px] font-mono">{s.revenue}</span>
                </div>
              </div>
            );
          })}

          {/* Highlight Total Row */}
          <div className="grid grid-cols-[380px_1fr_260px] px-10 py-6 items-center bg-[#1fa97a]/20 border-b border-[#1fa97a]/40 shadow-inner">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-[#1fa97a] text-[30px]">Total Per Active User</span>
            </div>
            <div className="text-[22px] font-medium text-white/80">
              Blended monthly recurring value per funded account
            </div>
            <div className="text-right font-extrabold text-[#1fa97a] text-[40px] font-mono tracking-tight">
              ₦1,067
            </div>
          </div>

          {/* B2B API Licensing Row */}
          <div className="grid grid-cols-[380px_1fr_260px] px-10 py-5 items-center bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e0b04a]/10 border border-[#e0b04a]/30 flex items-center justify-center text-[#e0b04a]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-bold text-white/70 text-[22px]">Later: B2B Data Licensing</span>
            </div>
            <div className="text-white/60 text-[20px]">
              Annual institutional API subscriptions at ~₦20M/client from Year 2
            </div>
            <div className="text-right italic text-[#e0b04a] font-mono text-[20px]">
              + ₦20M / Client / Yr
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-[#1fa97a] tracking-wide pt-2">
          <span>Base case preliminary. Sponsoring broker 50% split assumed.</span>
          <div>Liquidity Pro | Confidential</div>
        </div>
      </div>
    </div>
  );
}
