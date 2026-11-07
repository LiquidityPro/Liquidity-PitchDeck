"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, CheckCircle2, Sparkles, Award } from "lucide-react";

export default function Slide10RevenueOutlook() {
  const years = [
    {
      year: "Year 1",
      revNum: 37.3,
      revLabel: "₦37.3M",
      accounts: "6,123",
      ebitda: "-₦155.4M",
      ebitdaPositive: false,
      team: "4 FTE",
      heightPct: 15,
    },
    {
      year: "Year 2",
      revNum: 152.8,
      revLabel: "₦152.8M",
      accounts: "14,997",
      ebitda: "-₦106.7M",
      ebitdaPositive: false,
      team: "6 FTE",
      heightPct: 30,
    },
    {
      year: "Year 3",
      revNum: 338.7,
      revLabel: "₦338.7M",
      accounts: "27,027",
      ebitda: "-₦58.5M",
      ebitdaPositive: false,
      team: "8 FTE",
      heightPct: 50,
    },
    {
      year: "Year 4",
      revNum: 576.5,
      revLabel: "₦576.5M",
      accounts: "40,853",
      ebitda: "+₦13.2M",
      ebitdaPositive: true,
      team: "9 FTE",
      heightPct: 75,
      isBreakEven: true,
    },
    {
      year: "Year 5",
      revNum: 854.1,
      revLabel: "₦854.1M",
      accounts: "56,375",
      ebitda: "+₦84.9M",
      ebitdaPositive: true,
      team: "10 FTE",
      heightPct: 100,
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
            <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-primary tracking-wider uppercase">
              FINANCIAL TRAJECTORY • 5-YEAR PROJECTIONS
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight">
            Base case outlook: <span className="text-primary">revenue &amp; scale.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
            EBITDA turns cash positive in Month 41 with a lean team of 10. The ₦650M seed round fully finances the pathway to profitable sustainability.
          </p>
        </motion.div>

        {/* Main Section: Chart (Right) + Table (Left) */}
        <div className="grid grid-cols-[1fr_640px] gap-10 items-stretch my-auto">
          {/* Financial Summary Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg border border-border overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="grid grid-cols-6 bg-muted/40 px-8 py-4 border-b border-border text-[18px] font-bold text-muted-foreground uppercase font-mono">
                <div className="col-span-1">Metric</div>
                {years.map((y) => (
                  <div key={y.year} className="text-center">{y.year}</div>
                ))}
              </div>

              {/* Revenue Row (Highlighted) */}
              <div className="grid grid-cols-6 px-8 py-5 items-center text-[22px] font-bold bg-primary/15 border-b border-primary/40 text-foreground">
                <div className="text-primary font-extrabold">Total Revenue</div>
                {years.map((y) => (
                  <div key={y.year} className="text-center font-extrabold text-primary font-mono text-[24px]">
                    {y.revLabel}
                  </div>
                ))}
              </div>

              {/* Active Accounts Row */}
              <div className="grid grid-cols-6 px-8 py-4 items-center text-[20px] border-b border-border text-foreground">
                <div className="font-semibold text-muted-foreground">Active Accounts</div>
                {years.map((y) => (
                  <div key={y.year} className="text-center font-mono font-medium">{y.accounts}</div>
                ))}
              </div>

              {/* EBITDA Row */}
              <div className="grid grid-cols-6 px-8 py-4 items-center text-[20px] border-b border-border text-foreground">
                <div className="font-semibold text-muted-foreground">EBITDA</div>
                {years.map((y) => (
                  <div
                    key={y.year}
                    className={`text-center font-mono font-bold ${
                      y.ebitdaPositive ? "text-primary" : "text-bear"
                    }`}
                  >
                    {y.ebitda}
                  </div>
                ))}
              </div>

              {/* Team Size Row */}
              <div className="grid grid-cols-6 px-8 py-4 items-center text-[20px] text-foreground">
                <div className="font-semibold text-muted-foreground">Team Size</div>
                {years.map((y) => (
                  <div key={y.year} className="text-center font-mono text-foreground/80">{y.team}</div>
                ))}
              </div>
            </div>

            {/* Assumptions Footnote */}
            <div className="p-6 bg-muted/30 border-t border-border text-[18px] text-muted-foreground leading-snug">
              Assumes 50% commission retention after sponsoring broker share, B2B API licensing commencing in Year 2, and 10 FTE by Year 5.
            </div>
          </motion.div>

          {/* Fully Custom, Responsive, Non-Overflowing Bar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-card rounded-lg border border-border p-8 flex flex-col justify-between overflow-hidden"
          >
            {/* Chart Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-bold text-[22px] text-foreground">Revenue Growth (₦M)</h4>
                <p className="text-xs text-muted-foreground font-mono">5-Year Exponential Trajectory</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-bold font-mono">
                Month 41 Break-Even
              </span>
            </div>

            {/* Bars Canvas (Responsive & Constrained - Never Overflows) */}
            <div className="relative w-full h-[270px] flex items-end justify-between pt-8 pb-4 px-2 border-b border-border">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="w-full border-b border-dashed border-white" />
                <div className="w-full border-b border-dashed border-white" />
                <div className="w-full border-b border-dashed border-white" />
                <div className="w-full border-b border-dashed border-white" />
              </div>

              {/* 5 Animated Bars */}
              {years.map((y, idx) => (
                <div key={y.year} className="relative z-10 flex flex-col items-center gap-2 w-20">
                  {/* Revenue Number Above Bar */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="font-mono text-xs font-extrabold text-foreground whitespace-nowrap"
                  >
                    {y.revLabel}
                  </motion.span>

                  {/* The Bar */}
                  <div className="w-14 h-[200px] flex items-end justify-center rounded-xl overflow-hidden bg-muted/40 p-0.5">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${y.heightPct}%` }}
                      transition={{ duration: 0.8, delay: 0.15 * (idx + 1), ease: "easeOut" }}
                      className={`w-full rounded-lg shadow-lg relative ${
                        y.year === "Year 5"
                          ? "bg-primary"
                          : y.year === "Year 4"
                          ? "bg-primary"
                          : "bg-primary/80"
                      }`}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-muted rounded-lg" />
                    </motion.div>
                  </div>

                  {/* Year Label */}
                  <span className="text-xs font-semibold text-muted-foreground font-mono mt-1">
                    {y.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Milestone Callout */}
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 text-primary font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>₦854M Y5 Revenue</span>
              </span>
              <span className="text-paper font-bold font-mono">
                ₦85M Net EBITDA Margin in Y5
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-primary tracking-wide pt-2">
          <span>The ₦650M seed funds the entire trajectory through break-even</span>
          <div>Liquidity Pro | Confidential</div>
        </div>
      </div>
    </div>
  );
}
