"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  MessageSquareQuote,
  Zap,
  Cpu,
  BadgeCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function Slide3Solution() {
  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Background Ambient Lighting Glows */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-[#1fa97a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-32 w-[650px] h-[650px] bg-[#e0b04a]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#16294a]/30 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="flex flex-col justify-between w-full h-full p-28 box-border relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1fa97a]/15 border border-[#1fa97a]/30 w-fit">
            <Sparkles className="w-4 h-4 text-[#1fa97a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#1fa97a] tracking-wider uppercase">
              THE SOLUTION • UNIFIED ECOSYSTEM
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            Investing and community in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">one seamless app.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            Liquidity Pro bridges low-latency equities execution with The Square—giving everyday Nigerians the tools to trade and the community to learn where they invest.
          </p>
        </motion.div>

        {/* 2 Flagship Pillars with Realistic Micro-UIs */}
        <div className="grid grid-cols-2 gap-8 my-auto">
          {/* Pillar 1: Invest */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between bg-[#132238]/85 hover:bg-[#16294a]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-[#1fa97a]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1fa97a] to-emerald-400" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-[#1fa97a]/15 border border-[#1fa97a]/30 flex items-center justify-center text-[#1fa97a] group-hover:scale-110 transition-transform shadow-inner">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#1fa97a]/15 border border-[#1fa97a]/40 text-[#1fa97a] text-[13px] font-bold uppercase tracking-wider">
                  DIRECT NGX EXECUTION
                </span>
              </div>

              <div>
                <h3 className="font-sans text-[36px] font-bold text-[#f4f1ea] leading-tight">
                  Invest Seamlessly
                </h3>
                <div className="text-[16px] font-semibold text-[#1fa97a] uppercase tracking-wider mt-1">
                  Brokerage &amp; Portfolio Engine
                </div>
              </div>

              <p className="font-sans text-[21px] font-normal leading-[1.45] text-[#f4f1ea]/80">
                Buy and sell Nigerian equities from your phone in seconds. 5-minute digital onboarding, real-time portfolio valuation, and direct CSCS custody.
              </p>
            </div>

            {/* Interactive Mock Ticker Card */}
            <div className="mt-5 p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[18px] text-white font-mono">$DANGCEM</span>
                  <span className="text-xs text-white/60">Dangote Cement Plc</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#1fa97a]/20 text-[#1fa97a] text-xs font-bold font-mono flex items-center gap-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  ₦750.00 (+4.8%)
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-white/70">
                  <ShieldCheck className="w-4 h-4 text-[#1fa97a]" />
                  <span>Licensed Broker Routing</span>
                </div>
                <span className="text-[#1fa97a] font-bold">1-Click Order Execution →</span>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Town Square */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between bg-[#132238]/85 hover:bg-[#16294a]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-[#e0b04a]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e0b04a] to-amber-300" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-[#e0b04a]/15 border border-[#e0b04a]/30 flex items-center justify-center text-[#e0b04a] group-hover:scale-110 transition-transform shadow-inner">
                  <MessageSquareQuote className="w-8 h-8" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#e0b04a]/15 border border-[#e0b04a]/40 text-[#e0b04a] text-[13px] font-bold uppercase tracking-wider">
                  VERIFIED SOCIAL ALPHA
                </span>
              </div>

              <div>
                <h3 className="font-sans text-[36px] font-bold text-[#f4f1ea] leading-tight">
                  The Town Square
                </h3>
                <div className="text-[16px] font-semibold text-[#e0b04a] uppercase tracking-wider mt-1">
                  Discussion-First Market Feed
                </div>
              </div>

              <p className="font-sans text-[21px] font-normal leading-[1.45] text-[#f4f1ea]/80">
                A live feed where verified stockbrokers, chartered analysts, and retail traders share ideas, debate earnings, and disclose real portfolio positions.
              </p>
            </div>

            {/* Interactive Mock Town Square Post */}
            <div className="mt-5 p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#e0b04a]/20 border border-[#e0b04a] flex items-center justify-center text-[10px] font-bold text-[#e0b04a]">
                    AO
                  </div>
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    Adesuwa <BadgeCheck className="w-3.5 h-3.5 text-[#e0b04a]" />
                  </span>
                  <span className="text-xs text-white/50">@ade_equities</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#1fa97a]/20 text-[#1fa97a] text-[11px] font-bold uppercase">
                  BULLISH • $DANGCEM
                </span>
              </div>

              <p className="text-xs text-white/80 line-clamp-2 italic font-sans leading-relaxed">
                &quot;Volume picking up nicely on the NGX. Institutions front-running dividend surprise. Room thesis posted tonight.&quot;
              </p>

              <div className="flex items-center justify-between text-[11px] text-white/50 pt-1 border-t border-white/10">
                <span>Disclosed Position: <strong>14.2% Portfolio Long</strong></span>
                <span className="text-[#e0b04a]">Join Debate (24 replies) →</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2 Expansion Roadmap Cards (Bottom Row) */}
        <div className="grid grid-cols-2 gap-8">
          {/* Instant Transfers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex items-center gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/[0.08] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#1fa97a]/15 border border-[#1fa97a]/30 flex items-center justify-center text-[#1fa97a] flex-shrink-0">
              <Zap className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h4 className="font-sans text-[24px] font-bold text-[#f4f1ea]">
                  Next: Instant Peer Transfers
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1fa97a]/20 text-[#1fa97a] text-[11px] font-bold tracking-wider uppercase">
                  PHASE 2
                </span>
              </div>
              <p className="font-sans text-[18px] text-[#f4f1ea]/75 leading-snug">
                Fast, sub-second peer-to-peer balance transfers between verified accounts with flat ₦100 settlement.
              </p>
            </div>
          </motion.div>

          {/* Market Data API */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex items-center gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/[0.08] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#e0b04a]/15 border border-[#e0b04a]/30 flex items-center justify-center text-[#e0b04a] flex-shrink-0">
              <Cpu className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h4 className="font-sans text-[24px] font-bold text-[#f4f1ea]">
                  Later: Institutional Market Data API
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#e0b04a]/20 text-[#e0b04a] text-[11px] font-bold tracking-wider uppercase">
                  B2B REVENUE
                </span>
              </div>
              <p className="font-sans text-[18px] text-[#f4f1ea]/75 leading-snug">
                Monetizing anonymized retail sentiment, ticker buzz, and flow telemetry for institutional asset managers at ₦20M/yr.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-[#1fa97a] tracking-wide pt-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Dual Monetization: Consumer Trading Commission + Institutional Data Licensing</span>
          </div>
          <div>Liquidity Pro | Confidential</div>
        </div>
      </div>
    </div>
  );
}
