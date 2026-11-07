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
      badgeColor: "bg-paper/15 text-paper border-paper/40",
      accent: "from-paper/25 to-transparent",
      points: [
        "Submit SEC digital sub-broker registration",
        "Build 1,000-user retail waitlist",
        "Onboard 100 beta testers in The Square",
        "Partner with 2 sponsoring brokers",
      ],
    },
    {
      step: "PHASE 02",
      period: "Month 1 to Month 12",
      title: "Launch & Flywheel",
      badge: "GROWTH SPRINT",
      badgeColor: "bg-primary/15 text-primary border-primary/40",
      accent: "from-primary/25 to-transparent",
      points: [
        "Launch with 450 funded accounts (+4.8% monthly)",
        "Analysts bring their existing audiences",
        "Reach 6,123 funded accounts by Month 12",
        "Maintain low ₦2,500 initial acquisition cost",
      ],
    },
    {
      step: "PHASE 03",
      period: "Year 2 to Year 5",
      title: "Institutional Scaling",
      badge: "EXPANSION & B2B",
      badgeColor: "bg-primary/10 text-primary border-primary/40",
      accent: "from-primary/20 to-transparent",
      points: [
        "Scale to 15,000 accounts by Month 24, and 56,375 by Year 5",
        "Normalize acquisition cost to ₦6,000 at scale",
        "Launch B2B market data licenses in Year 2",
        "Reach profitability in Month 41 with a team of 10",
      ],
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
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md label-mono bg-paper/10 border border-paper/30 w-fit">
            <Rocket className="w-4 h-4 text-paper animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-paper tracking-wider uppercase">
              GO-TO-MARKET • 3-PHASE EXECUTION ROADMAP
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight">
            Go-to-market <span className="text-primary">strategy.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
            Analysts drive initial retail adoption at low cost. B2B data licensing adds high-margin revenue.
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
              className="group relative flex flex-col justify-between bg-card hover:bg-muted p-8 rounded-lg border border-border hover:border-primary/40 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.accent}`} />

              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-mono font-bold text-paper tracking-wider">
                    {p.step}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-sans text-[34px] font-bold text-foreground leading-tight">
                    {p.title}
                  </h3>
                  <div className="text-[16px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                    {p.period}
                  </div>
                </div>

                <ul className="flex flex-col gap-3.5 mt-2">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-[20px] text-foreground/90 leading-snug">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
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
          className="flex items-center justify-between px-10 py-5 rounded-lg border-2 border-primary bg-primary/10 text-[22px] font-medium text-foreground"
        >
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold font-mono uppercase">
              DISTRIBUTION
            </span>
            <span>
              <strong>Primary Channels:</strong> Analyst audiences, investment chat communities, and user referrals.
            </span>
          </div>
          <div className="text-[20px] font-normal text-primary tracking-wide flex-shrink-0 ml-8">
            Liquidity | Confidential
          </div>
        </motion.div>
      </div>
    </div>
  );
}
