"use client";

import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, DollarSign, ShieldCheck, Rocket, Landmark, Target, Award } from "lucide-react";

export default function Slide14TheAsk() {
  const triggerConfetti = () => {
    // Multi-burst celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4FF5A", "#F3F0E8", "#F2F5F0", "#FF7A59"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#D4FF5A", "#F3F0E8"],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#D4FF5A", "#F3F0E8"],
      });
    }, 250);
  };

  const buckets = [
    {
      amount: "₦100M",
      pct: "15.4%",
      icon: Landmark,
      tag: "REGULATORY COMPLIANCE",
      title: "Locked Regulatory Capital",
      desc: "Mandatory statutory capital reserves required under the SEC digital sub-broker regulatory framework. Ring-fenced and secure.",
      accent: "from-paper/20 to-transparent",
      color: "text-paper",
    },
    {
      amount: "₦332M",
      pct: "51.1%",
      icon: Rocket,
      tag: "RUNWAY TO PROFITABILITY",
      title: "Operations to Break-Even",
      desc: "Funds the lean 10-person engineering, compliance, marketing, and cloud infrastructure required to reach Month 41 EBITDA profitability.",
      accent: "from-primary/20 to-transparent",
      color: "text-primary",
    },
    {
      amount: "₦218M",
      pct: "33.5%",
      icon: ShieldCheck,
      tag: "STRATEGIC RESERVE",
      title: "Growth Buffer & Contingency",
      desc: "Cash buffer ensuring spendable reserves never drop below ₦218M in the base case, providing resilience against slower starts or fuel for rapid scaling.",
      accent: "from-primary/15 to-transparent",
      color: "text-primary",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-background text-foreground overflow-hidden select-none grid-floor">

      <div className="flex flex-col justify-between w-full h-full p-28 box-border relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-start"
        >
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md label-mono bg-paper/10 border border-paper/30 w-fit">
              <Award className="w-4 h-4 text-paper animate-pulse" />
              <span className="font-sans text-[16px] font-bold text-paper tracking-wider uppercase">
                CAPITAL RAISE • SEED ROUND ALLOCATION
              </span>
            </div>

            <h2 className="font-sans text-[80px] font-extrabold leading-[1] text-foreground tracking-tight">
              Raising <span className="text-primary">₦650M seed.</span>
            </h2>

            <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
              Offering <strong className="text-foreground">25.7% equity</strong> at a <strong>₦1.88B pre-money valuation</strong> (₦2.53B post-money) to finance regulatory capital, core scaling, and break-even in Month 41.
            </p>
          </div>

          {/* Interactive Celebration Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
            className="flex items-center gap-3 px-8 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold text-[22px] rounded-md transition-all cursor-pointer flex-shrink-0"
          >
            <Sparkles className="w-6 h-6 animate-spin" />
            <span>Celebrate The Round 🎉</span>
          </motion.button>
        </motion.div>

        {/* 3 Capital Allocation Cards */}
        <div className="grid grid-cols-3 gap-8 my-auto">
          {buckets.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * (idx + 1) }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between bg-card hover:bg-muted p-8 rounded-lg border border-border hover:border-primary/40 transition-all overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${b.accent}`} />

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-md bg-muted/40 border border-border flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-8 h-8 ${b.color}`} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-muted/40 border border-border text-xs font-mono font-bold text-muted-foreground">
                      {b.pct} of Total
                    </span>
                  </div>

                  <div>
                    <div className="font-sans text-[64px] font-extrabold text-paper leading-none font-mono">
                      {b.amount}
                    </div>
                    <h3 className="font-sans text-[28px] font-bold text-foreground leading-tight mt-2">
                      {b.title}
                    </h3>
                    <div className="text-[14px] font-mono font-bold text-muted-foreground uppercase tracking-wider mt-1">
                      {b.tag}
                    </div>
                  </div>

                  <p className="font-sans text-[20px] font-normal leading-[1.45] text-foreground/85">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cap Table & Milestones Bottom Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 gap-8 px-10 py-5 rounded-lg border-2 border-primary bg-primary/10"
        >
          <div className="flex flex-col gap-1 text-[20px] text-foreground">
            <span className="text-[13px] font-mono font-bold text-primary uppercase tracking-wider">
              POST-SEED CAP TABLE
            </span>
            <span>
              Walter Uche 69.9% &nbsp;|&nbsp; Azeez Gbolahan 3.7% &nbsp;|&nbsp; Odeyemi Tobi 0.7% &nbsp;|&nbsp; <strong className="text-foreground">Seed Investors 25.7%</strong>
            </span>
          </div>

          <div className="flex flex-col gap-1 text-[20px] text-foreground justify-end">
            <span className="text-[13px] font-mono font-bold text-paper uppercase tracking-wider">
              FUNDED OPERATIONAL MILESTONES
            </span>
            <span>
              <strong>Month 12:</strong> 6,123 Active Accounts &nbsp;|&nbsp; <strong>Month 24:</strong> 15,000 Accounts &amp; First B2B API Clients
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
