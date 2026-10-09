"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users2, ShieldCheck, Landmark, CheckCircle2, Award, Sparkles, BarChart2 } from "lucide-react";

export default function Slide7WhyChoose() {
  const cards = [
    {
      icon: Users2,
      tag: "COMMUNITY-FIRST",
      title: "Learn Together",
      subtitle: "Execute Where You Discuss",
      desc: "Debate tickers, dissect earnings announcements, and share trading rationales in the exact same platform where your order book lives.",
      color: "text-emerald-400",
      accent: "from-emerald-500/20 to-transparent",
    },
    {
      icon: ShieldCheck,
      tag: "VERIFIED ALIGNMENT",
      title: "Trusted Voices",
      subtitle: "Mandatory Skin-In-The-Game",
      desc: "Chartered analysts and thought leaders are verified and required to disclose their live portfolio holdings, eliminating covert pump-and-dump incentives.",
      color: "text-[#e0b04a]",
      accent: "from-amber-500/20 to-transparent",
    },
    {
      icon: Landmark,
      tag: "LOCALIZED ARCHITECTURE",
      title: "Built for Nigeria",
      subtitle: "Tailored to Local Trading Culture",
      desc: "Designed around how Nigerians naturally invest—integrating instant NGN transfers, local broker clearing, and community sentiment on NGX-listed names.",
      color: "text-cyan-400",
      accent: "from-cyan-500/20 to-transparent",
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
            <Award className="w-4 h-4 text-[#e0b04a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#e0b04a] tracking-wider uppercase">
              VALUE PROPOSITION • PRODUCT MOAT
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            Why users choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">Liquidity Pro.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            Others add community features as a gimmick to a trading app. We built the whole product around verified, high-conviction discussion.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-3 gap-8 my-auto">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * (idx + 1) }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between bg-[#132238]/85 hover:bg-[#16294a]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.accent}`} />

                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-8 h-8 ${c.color}`} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/70 uppercase">
                      {c.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans text-[34px] font-bold text-[#f4f1ea] leading-tight">
                      {c.title}
                    </h3>
                    <div className="text-[16px] font-semibold text-white/50 uppercase tracking-wider mt-1">
                      {c.subtitle}
                    </div>
                  </div>

                  <p className="font-sans text-[21px] font-normal leading-[1.45] text-[#f4f1ea]/80">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Investor Survey Test Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-between px-10 py-5 border-2 border-white/15 rounded-3xl bg-white/5 backdrop-blur-xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#e0b04a]/20 border border-[#e0b04a]/40 text-[#e0b04a] flex items-center justify-center flex-shrink-0">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-mono font-bold text-[#e0b04a] uppercase tracking-wider">
                INVESTOR SURVEY VALIDATION • TARGET: 100 NIGERIAN RETAIL TRADERS
              </span>
              <p className="font-sans text-[22px] font-medium text-[#f4f1ea] mt-0.5">
                Hypothesis Test: <strong className="text-[#1fa97a]">≥60%</strong> currently learn about stocks via WhatsApp/Telegram &nbsp;|&nbsp; <strong className="text-[#1fa97a]">≥40%</strong> explicitly demand a verified in-app community.
              </p>
            </div>
          </div>
          <div className="text-[20px] font-normal text-[#1fa97a] tracking-wide flex-shrink-0 ml-8">
            Liquidity Pro | Confidential
          </div>
        </motion.div>
      </div>
    </div>
  );
}
