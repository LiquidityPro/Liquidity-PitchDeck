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
      color: "text-primary",
      accent: "from-primary/20 to-transparent",
    },
    {
      icon: ShieldCheck,
      tag: "VERIFIED ALIGNMENT",
      title: "Trusted Voices",
      subtitle: "Mandatory Skin-In-The-Game",
      desc: "Chartered analysts and thought leaders are verified and required to disclose their live portfolio holdings, eliminating covert pump-and-dump incentives.",
      color: "text-paper",
      accent: "from-paper/20 to-transparent",
    },
    {
      icon: Landmark,
      tag: "LOCALIZED ARCHITECTURE",
      title: "Built for Nigeria",
      subtitle: "Tailored to Local Trading Culture",
      desc: "Designed around how Nigerians naturally invest—integrating instant NGN transfers, local broker clearing, and community sentiment on NGX-listed names.",
      color: "text-primary",
      accent: "from-primary/15 to-transparent",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-background text-foreground overflow-hidden select-none grid-floor">

      <div className="flex flex-col justify-between w-full h-full p-28 box-border relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md label-mono bg-paper/10 border border-paper/30 w-fit">
            <Award className="w-4 h-4 text-paper animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-paper tracking-wider uppercase">
              VALUE PROPOSITION • PRODUCT MOAT
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight">
            Why users choose <span className="text-primary">Liquidity Pro.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
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
                className="group relative flex flex-col justify-between bg-card hover:bg-muted p-8 rounded-lg border border-border hover:border-primary/40 transition-all overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.accent}`} />

                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-md bg-muted/40 border border-border flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-8 h-8 ${c.color}`} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-muted/40 border border-border text-xs font-mono font-bold text-muted-foreground uppercase">
                      {c.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans text-[34px] font-bold text-foreground leading-tight">
                      {c.title}
                    </h3>
                    <div className="text-[16px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                      {c.subtitle}
                    </div>
                  </div>

                  <p className="font-sans text-[21px] font-normal leading-[1.45] text-foreground/85">
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
          className="flex items-center justify-between px-10 py-5 border-2 border-border rounded-lg bg-muted/40"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-paper/15 border border-paper/40 text-paper flex items-center justify-center flex-shrink-0">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-mono font-bold text-paper uppercase tracking-wider">
                INVESTOR SURVEY VALIDATION • TARGET: 100 NIGERIAN RETAIL TRADERS
              </span>
              <p className="font-sans text-[22px] font-medium text-foreground mt-0.5">
                Hypothesis Test: <strong className="text-primary">≥60%</strong> currently learn about stocks via WhatsApp/Telegram &nbsp;|&nbsp; <strong className="text-primary">≥40%</strong> explicitly demand a verified in-app community.
              </p>
            </div>
          </div>
          <div className="text-[20px] font-normal text-primary tracking-wide flex-shrink-0 ml-8">
            Liquidity Pro | Confidential
          </div>
        </motion.div>
      </div>
    </div>
  );
}
