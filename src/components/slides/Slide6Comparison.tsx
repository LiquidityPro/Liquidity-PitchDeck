"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Check, Sparkles, X } from "lucide-react";

export default function Slide6Comparison() {
  const competitors = [
    {
      name: "Bamboo",
      type: "Brokerage",
      focus: "Nigerian & US stocks. SEC-registered.",
      community: "Articles and stock lists. No social discussion feed.",
      hasCommunity: false,
    },
    {
      name: "Chaka (Hisa)",
      type: "Brokerage",
      focus: "Nigerian stocks & ETFs. Flat 1% commission.",
      community: "Automated research tools. No community features.",
      hasCommunity: false,
    },
    {
      name: "Rise",
      type: "Asset Manager",
      focus: "US dollar asset manager. Managed portfolios only.",
      community: "Managed funds. No trader interaction.",
      hasCommunity: false,
    },
    {
      name: "Trove",
      type: "Brokerage",
      focus: "Equities, bonds, and ETFs.",
      community: "Shows friend holdings. No public debate feed.",
      hasCommunity: "limited",
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
            <Layers className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-primary tracking-wider uppercase">
              COMPETITIVE LANDSCAPE • MARKET POSITIONING
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight">
            How we <span className="text-primary">compare.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
            Competitors separate trading from research. We combine direct trading with verified discussion.
          </p>
        </motion.div>

        {/* Comparison Matrix Table */}
        <div className="my-auto flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg border border-border overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-[260px_1fr_1fr] bg-muted/40 px-10 py-5 border-b border-border text-[20px] font-bold text-muted-foreground uppercase tracking-wider font-mono">
              <div>Platform</div>
              <div>Market Focus</div>
              <div>Community &amp; Social Alpha Today</div>
            </div>

            {/* Competitor Rows */}
            {competitors.map((c, i) => (
              <div
                key={c.name}
                className={`grid grid-cols-[260px_1fr_1fr] px-10 py-5 items-center text-[23px] hover:bg-muted/40 transition-colors ${
                  i !== competitors.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-foreground text-[26px]">{c.name}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-muted/70 text-xs text-muted-foreground font-mono">
                    {c.type}
                  </span>
                </div>
                <div className="text-foreground/85 pr-6 leading-snug">{c.focus}</div>
                <div className="text-muted-foreground leading-snug flex items-center gap-2">
                  {c.hasCommunity === false ? (
                    <X className="w-5 h-5 text-bear flex-shrink-0" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-paper flex-shrink-0" />
                  )}
                  <span>{c.community}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Our Unfair Edge Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-between px-10 py-6 border-2 border-primary rounded-lg bg-primary/10 shadow-[0_0_40px_rgba(31,169,122,0.15)]"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-md bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[18px] font-extrabold text-primary tracking-wider uppercase">
                  OUR UNFAIR MOAT
                </span>
                <p className="font-sans text-[26px] font-medium leading-snug text-foreground">
                  A discussion platform for Nigerian stocks where verified analysts must disclose real portfolio holdings.
                </p>
              </div>
            </div>
            <span className="px-4 py-2 rounded-xl bg-background border border-primary/40 text-primary font-mono text-sm font-bold flex-shrink-0 ml-8">
              Verified by Retail Survey
            </span>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-primary tracking-wide pt-2">
          <span>Targeting everyday retail + institutional sentiment consumers</span>
          <div>Liquidity | Confidential</div>
        </div>
      </div>
    </div>
  );
}
