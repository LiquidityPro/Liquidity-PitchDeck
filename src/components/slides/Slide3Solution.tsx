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
    <div className="w-[1920px] h-[1080px] relative bg-background text-foreground overflow-hidden select-none grid-floor">

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
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md label-mono bg-primary/10 border border-primary/30 w-fit">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-primary tracking-wider uppercase">
              THE SOLUTION • UNIFIED ECOSYSTEM
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight">
            Investing and community in <span className="text-primary">one seamless app.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
            Liquidity combines stock trading with The Square. Investors trade equities and learn from verified analysts in one app.
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
            className="group relative flex flex-col justify-between bg-card hover:bg-muted p-8 rounded-lg border border-border hover:border-primary/50 transition-all overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-primary/10 border border-primary/40 text-primary text-[13px] font-bold uppercase tracking-wider">
                  DIRECT NGX EXECUTION
                </span>
              </div>

              <div>
                <h3 className="font-sans text-[36px] font-bold text-foreground leading-tight">
                  Invest Seamlessly
                </h3>
                <div className="text-[16px] font-semibold text-primary uppercase tracking-wider mt-1">
                  Brokerage &amp; Portfolio Engine
                </div>
              </div>

              <p className="font-sans text-[21px] font-normal leading-[1.45] text-foreground/85">
                Buy and sell Nigerian equities on your phone. Features 5-minute digital onboarding, live portfolio tracking, and direct CSCS custody.
              </p>
            </div>

            {/* Interactive Mock Ticker Card */}
            <div className="mt-5 p-4 rounded-md bg-background border border-border flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[18px] text-foreground font-mono">$DANGCEM</span>
                  <span className="text-xs text-muted-foreground">Dangote Cement Plc</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold font-mono flex items-center gap-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  ₦750.00 (+4.8%)
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-border">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Licensed Broker Routing</span>
                </div>
                <span className="text-primary font-bold">1-Click Order Execution →</span>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Town Square */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between bg-card hover:bg-muted p-8 rounded-lg border border-border hover:border-paper/50 transition-all overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-paper to-paper" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-md bg-paper/10 border border-paper/30 flex items-center justify-center text-paper group-hover:scale-110 transition-transform shadow-inner">
                  <MessageSquareQuote className="w-8 h-8" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-paper/10 border border-paper/40 text-paper text-[13px] font-bold uppercase tracking-wider">
                  VERIFIED SOCIAL ALPHA
                </span>
              </div>

              <div>
                <h3 className="font-sans text-[36px] font-bold text-foreground leading-tight">
                  The Town Square
                </h3>
                <div className="text-[16px] font-semibold text-paper uppercase tracking-wider mt-1">
                  Discussion-First Market Feed
                </div>
              </div>

              <p className="font-sans text-[21px] font-normal leading-[1.45] text-foreground/85">
                A live feed where verified brokers and analysts share stock ideas, review earnings, and disclose real portfolio holdings.
              </p>
            </div>

            {/* Interactive Mock Town Square Post */}
            <div className="mt-5 p-4 rounded-md bg-background border border-border flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-paper/15 border border-paper flex items-center justify-center text-[10px] font-bold text-paper">
                    AO
                  </div>
                  <span className="text-sm font-bold text-foreground flex items-center gap-1">
                    Adesuwa <BadgeCheck className="w-3.5 h-3.5 text-paper" />
                  </span>
                  <span className="text-xs text-muted-foreground">@ade_equities</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[11px] font-bold uppercase">
                  BULLISH • $DANGCEM
                </span>
              </div>

              <p className="text-xs text-foreground/80 line-clamp-2 italic font-sans leading-relaxed">
                &quot;Volume picking up nicely on the NGX. Institutions front-running dividend surprise. Room thesis posted tonight.&quot;
              </p>

              <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border">
                <span>Disclosed Position: <strong>14.2% Portfolio Long</strong></span>
                <span className="text-paper">Join Debate (24 replies) →</span>
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
            className="flex items-center gap-6 p-6 rounded-md border border-border bg-muted/40 hover:bg-muted transition-all"
          >
            <div className="w-14 h-14 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
              <Zap className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h4 className="font-sans text-[24px] font-bold text-foreground">
                  Next: Instant Peer Transfers
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-[11px] font-bold tracking-wider uppercase">
                  PHASE 2
                </span>
              </div>
              <p className="font-sans text-[18px] text-muted-foreground leading-snug">
                Send money between verified accounts in seconds with a flat ₦100 settlement fee.
              </p>
            </div>
          </motion.div>

          {/* Market Data API */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex items-center gap-6 p-6 rounded-md border border-border bg-muted/40 hover:bg-muted transition-all"
          >
            <div className="w-14 h-14 rounded-md bg-paper/10 border border-paper/30 flex items-center justify-center text-paper flex-shrink-0">
              <Cpu className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h4 className="font-sans text-[24px] font-bold text-foreground">
                  Later: Institutional Market Data API
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-paper/15 text-paper text-[11px] font-bold tracking-wider uppercase">
                  B2B REVENUE
                </span>
              </div>
              <p className="font-sans text-[18px] text-muted-foreground leading-snug">
                Sell anonymized retail sentiment and trading flow data to institutional funds at ₦20M per year.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-primary tracking-wide pt-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Two Revenue Sources: Retail trading commissions + Institutional data licensing</span>
          </div>
          <div>Liquidity | Confidential</div>
        </div>
      </div>
    </div>
  );
}
