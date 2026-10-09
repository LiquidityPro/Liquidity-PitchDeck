"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, CheckCircle2, Users, TrendingUp, Layers, ArrowRight } from "lucide-react";

export default function Slide9GTM() {
  const phases = [
    {
      step: "PHASE 01",
      period: "Pre-Launch Foundation",
      title: "Before Launch",
      badge: "ACTIVE STAGE",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      accent: "from-amber-500/30 to-transparent",
      points: [
        "SEC digital sub-broker registration filing in progress",
        "1,000 retail waitlist sign-ups target",
        "100 beta power users active in The Square",
        "2 sponsoring broker-dealer partnerships",
      ],
    },
    {
      step: "PHASE 02",
      period: "Month 1 to Month 12",
      title: "Launch & Flywheel",
      badge: "GROWTH SPRINT",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      accent: "from-emerald-500/30 to-transparent",
      points: [
        "450 new funded accounts in Month 1, compounding 4.8% MoM",
        "Chartered analysts bring their existing followers",
        "6,123 funded active accounts reached by Month 12",
        "₦2,500 blended initial customer acquisition cost (CAC)",
      ],
    },
    {
      step: "PHASE 03",
      period: "Year 2 to Year 5",
      title: "Institutional Scaling",
      badge: "EXPANSION & B2B",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      accent: "from-cyan-500/30 to-transparent",
      points: [
        "15,000 accounts by Month 24; scaling to 56,375 by Year 5",
        "Customer acquisition cost normalizes to ₦6,000 at scale",
        "First B2B market sentiment API clients onboarded in Year 2",
        "Lean team of 10 achieves break-even by Month 41",
      ],
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Ambient Lighting */}
      <div className="absolute -top-32 right-32 w-[650px] h-[650px] bg-[#1fa97a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-32 w-[650px] h-[650px] bg-[#e0b04a]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex flex-col justify-between w-full h-full p-28 box-border relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#e0b04a]/15 border border-[#e0b04a]/30 w-fit">
            <Rocket className="w-4 h-4 text-[#e0b04a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#e0b04a] tracking-wider uppercase">
              GO-TO-MARKET • 3-PHASE EXECUTION ROADMAP
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            Go-to-market <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">strategy.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            A disciplined, analyst-led acquisition flywheel that drives low CAC initially, scaling into profitable institutional B2B data licensing.
          </p>
        </motion.div>

        {/* 3 Step Trajectory Cards */}
        <div className="grid grid-cols-3 gap-8 my-auto">
          {phases.map((p, idx) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * (idx + 1) }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between bg-[#132238]/85 hover:bg-[#16294a]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.accent}`} />

              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-mono font-bold text-[#e0b04a] tracking-wider">
                    {p.step}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-sans text-[34px] font-bold text-[#f4f1ea] leading-tight">
                    {p.title}
                  </h3>
                  <div className="text-[16px] font-semibold text-white/50 uppercase tracking-wider mt-1">
                    {p.period}
                  </div>
                </div>

                <ul className="flex flex-col gap-3.5 mt-2">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-[20px] text-[#f4f1ea]/85 leading-snug">
                      <span className="h-2 w-2 rounded-full bg-[#1fa97a] mt-2.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channels Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-between px-10 py-5 rounded-3xl border-2 border-[#1fa97a] bg-[#1fa97a]/15 backdrop-blur-xl text-[22px] font-medium text-[#f4f1ea]"
        >
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-[#1fa97a] text-[#0e1b2e] text-xs font-bold font-mono uppercase">
              DISTRIBUTION
            </span>
            <span>
              <strong>Primary Acquisition Channels:</strong> Verified analyst followings, investor WhatsApp/Telegram community partnerships, and word-of-mouth referral viral loops.
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
