"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, MessageSquareWarning, SearchX, AlertTriangle, ShieldAlert, FileX } from "lucide-react";

export default function Slide2Problem() {
  const problems = [
    {
      id: "01",
      badge: "7–14 DAYS TO ONBOARD",
      badgeColor: "bg-amber-500/15 border-amber-500/40 text-amber-400",
      icon: Clock,
      iconColor: "text-amber-400",
      glowColor: "from-amber-500/20 to-transparent",
      title: "Slow, Archaic Access",
      subtitle: "Onboarding Friction",
      description:
        "Lengthy paperwork, legacy broker portals, and physical verification barriers make trading Nigerian equities feel completely out of reach for digitally native Nigerians.",
      mockWidget: (
        <div className="mt-4 p-4 rounded-xl bg-black/40 border border-amber-500/20 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60 font-mono">KYC Application #8492</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              Day 9 Pending
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-red-400/90 bg-red-500/10 p-2 rounded-lg border border-red-500/20">
            <FileX className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Physical broker office visit required</span>
          </div>
        </div>
      ),
    },
    {
      id: "02",
      badge: "UNVERIFIED 'GURUS' & NOISE",
      badgeColor: "bg-rose-500/15 border-rose-500/40 text-rose-400",
      icon: MessageSquareWarning,
      iconColor: "text-rose-400",
      glowColor: "from-rose-500/20 to-transparent",
      title: "Noisy, Fragmented Advice",
      subtitle: "The Unregulated Social Echo Chamber",
      description:
        "Investment ideas are scattered across WhatsApp and Telegram groups. Everyday investors have zero mechanism to separate credible research from conflict-ridden pump-and-dump noise.",
      mockWidget: (
        <div className="mt-4 p-4 rounded-xl bg-black/40 border border-rose-500/20 flex flex-col gap-2">
          <div className="bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20 text-xs">
            <div className="text-rose-300 font-semibold mb-1">WhatsApp Group: VIP Trades 🚀</div>
            <div className="text-white/80 italic font-mono text-[11px]">
              &quot;Buy $DANGCEM tomorrow, insider news 300% sure! 🔥&quot;
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/50 px-1">
            <span>Conflict of interest: <strong>Undisclosed</strong></span>
            <span className="text-rose-400 font-bold">Track record: 0%</span>
          </div>
        </div>
      ),
    },
    {
      id: "03",
      badge: "ZERO RETAIL TELEMETRY",
      badgeColor: "bg-indigo-500/15 border-indigo-500/40 text-indigo-400",
      icon: SearchX,
      iconColor: "text-indigo-400",
      glowColor: "from-indigo-500/20 to-transparent",
      title: "The Data Black Hole",
      subtitle: "The Institutional Blindspot",
      description:
        "Asset managers and institutional desks have zero visibility into real-time retail capital allocation or retail sentiment across Nigeria's fast-growing investor base.",
      mockWidget: (
        <div className="mt-4 p-4 rounded-xl bg-black/40 border border-indigo-500/20 flex flex-col gap-2 font-mono text-xs">
          <div className="flex justify-between items-center text-white/70">
            <span>Terminal: Retail Telemetry</span>
            <span className="text-indigo-400">[OFFLINE]</span>
          </div>
          <div className="bg-indigo-950/40 p-2 rounded border border-indigo-500/20 text-[11px] text-indigo-200">
            <div>Retail Sentiment Alpha: <span className="text-red-400">UNAVAILABLE</span></div>
            <div>Behavioral Flow Coverage: <span className="text-white/50">0.0%</span></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Dynamic Ambient Friction Lighting */}
      <div className="absolute -top-40 right-20 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-20 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#16294a]/30 rounded-full blur-[160px] pointer-events-none" />

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
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 w-fit">
            <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-rose-300 tracking-wider uppercase">
              THE PROBLEM • SYSTEMIC MARKET FRICTION
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight max-w-[1550px]">
            Investing in Nigerian equities is <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-amber-200">harder than it should be.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            The market returned +51.2% in 2025, but everyday participants face painful barriers to entry, predatory noise, and zero actionable transparency.
          </p>
        </motion.div>

        {/* 3 Interactive Problem Cards */}
        <div className="grid grid-cols-3 gap-8 my-auto">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * (idx + 1) }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between bg-[#132238]/80 hover:bg-[#16294a]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden"
              >
                {/* Top Card Gradient Glow */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.glowColor}`} />

                <div className="flex flex-col gap-5">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-9 h-9 ${p.iconColor}`} />
                    </div>
                    <span className={`px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider uppercase border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-sans text-[34px] font-bold text-[#f4f1ea] leading-tight group-hover:text-white transition-colors">
                      {p.title}
                    </h3>
                    <div className="text-[16px] font-semibold text-white/50 uppercase tracking-wider mt-1">
                      {p.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[20px] font-normal leading-[1.45] text-[#f4f1ea]/80">
                    {p.description}
                  </p>
                </div>

                {/* Simulated Reality Widget */}
                {p.mockWidget}
              </motion.div>
            );
          })}
        </div>

        {/* Impact Callout Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-between px-8 py-5 border border-white/15 rounded-2xl bg-white/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-4 text-[22px] font-medium text-[#f4f1ea]">
            <ShieldAlert className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <span>
              <strong>The Consequence:</strong> Retail capital remains on the sidelines or burns out on speculative noise—leaving Nigerians disconnected from their own economic expansion.
            </span>
          </div>
          <div className="text-[20px] font-normal text-[#1fa97a] tracking-wide flex-shrink-0 ml-8">
            Liquidity Pro | Confidential
          </div>
        </motion.div>
      </div>
    </div>
  );
}
