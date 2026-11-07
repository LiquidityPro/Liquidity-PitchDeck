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
    <div className="w-[1920px] h-[1080px] relative bg-background text-foreground overflow-hidden select-none grid-floor">

      <div className="flex flex-col justify-between w-full h-full p-28 box-border relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md label-mono bg-primary/10 border border-primary/30 w-fit">
            <DollarSign className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-primary tracking-wider uppercase">
              UNIT ECONOMICS • MONTHLY VALUE PER ACTIVE USER
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight">
            Unit economics per <span className="text-primary">active user.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
            Diverse monetization across trading commissions, pro subscriptions, cash float yield, and transfers creates a robust ₦1,067 blended monthly ARPU.
          </p>
        </motion.div>

        {/* Unit Economics Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="my-auto bg-card rounded-lg border border-border overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[380px_1fr_260px] bg-muted/40 px-10 py-5 border-b border-border text-[20px] font-bold text-muted-foreground uppercase tracking-wider font-mono">
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
                className="grid grid-cols-[380px_1fr_260px] px-10 py-5 items-center text-[23px] border-b border-border hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-muted/40 border border-border flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-foreground text-[24px]">{s.name}</span>
                </div>
                <div className="text-foreground/85 leading-snug">{s.assumption}</div>
                <div className="text-right flex items-center justify-end gap-3">
                  <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted/40">{s.pct}</span>
                  <span className="font-extrabold text-foreground text-[28px] font-mono">{s.revenue}</span>
                </div>
              </div>
            );
          })}

          {/* Highlight Total Row */}
          <div className="grid grid-cols-[380px_1fr_260px] px-10 py-6 items-center bg-primary/15 border-b border-primary/40 shadow-inner">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-primary text-[30px]">Total Per Active User</span>
            </div>
            <div className="text-[22px] font-medium text-foreground/80">
              Blended monthly recurring value per funded account
            </div>
            <div className="text-right font-extrabold text-primary text-[40px] font-mono tracking-tight">
              ₦1,067
            </div>
          </div>

          {/* B2B API Licensing Row */}
          <div className="grid grid-cols-[380px_1fr_260px] px-10 py-5 items-center bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-paper/10 border border-paper/30 flex items-center justify-center text-paper">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-bold text-muted-foreground text-[22px]">Later: B2B Data Licensing</span>
            </div>
            <div className="text-muted-foreground text-[20px]">
              Annual institutional API subscriptions at ~₦20M/client from Year 2
            </div>
            <div className="text-right italic text-paper font-mono text-[20px]">
              + ₦20M / Client / Yr
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-primary tracking-wide pt-2">
          <span>Base case preliminary. Sponsoring broker 50% split assumed.</span>
          <div>Liquidity Pro | Confidential</div>
        </div>
      </div>
    </div>
  );
}
