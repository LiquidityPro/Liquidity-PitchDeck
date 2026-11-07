"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, MessageSquareWarning, SearchX, AlertTriangle, ShieldAlert, FileX } from "lucide-react";

export default function Slide2Problem() {
  const problems = [
    {
      id: "01",
      badge: "7–14 DAYS TO ONBOARD",
      badgeColor: "bg-paper/10 border-paper/40 text-paper",
      icon: Clock,
      iconColor: "text-paper",
      glowColor: "from-paper/20 to-transparent",
      title: "Slow, Archaic Access",
      subtitle: "Onboarding Friction",
      description:
        "Lengthy paperwork, legacy broker portals, and physical verification barriers make trading Nigerian equities feel completely out of reach for digitally native Nigerians.",
      mockWidget: (
        <div className="mt-4 p-4 rounded-xl bg-background border border-paper/20 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-mono">KYC Application #8492</span>
            <span className="px-2 py-0.5 rounded-full bg-paper/15 text-paper font-bold text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-paper animate-ping" />
              Day 9 Pending
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-bear/90 bg-bear/10 p-2 rounded-lg border border-bear/20">
            <FileX className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Physical broker office visit required</span>
          </div>
        </div>
      ),
    },
    {
      id: "02",
      badge: "UNVERIFIED 'GURUS' & NOISE",
      badgeColor: "bg-bear/10 border-bear/40 text-bear",
      icon: MessageSquareWarning,
      iconColor: "text-bear",
      glowColor: "from-bear/20 to-transparent",
      title: "Noisy, Fragmented Advice",
      subtitle: "The Unregulated Social Echo Chamber",
      description:
        "Investment ideas are scattered across WhatsApp and Telegram groups. Everyday investors have zero mechanism to separate credible research from conflict-ridden pump-and-dump noise.",
      mockWidget: (
        <div className="mt-4 p-4 rounded-xl bg-background border border-bear/20 flex flex-col gap-2">
          <div className="bg-bear/10 p-2.5 rounded-lg border border-bear/20 text-xs">
            <div className="text-bear font-semibold mb-1">WhatsApp Group: VIP Trades 🚀</div>
            <div className="text-foreground/80 italic font-mono text-[11px]">
              &quot;Buy $DANGCEM tomorrow, insider news 300% sure! 🔥&quot;
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1">
            <span>Conflict of interest: <strong>Undisclosed</strong></span>
            <span className="text-bear font-bold">Track record: 0%</span>
          </div>
        </div>
      ),
    },
    {
      id: "03",
      badge: "ZERO RETAIL TELEMETRY",
      badgeColor: "bg-muted/50 border-border text-muted-foreground",
      icon: SearchX,
      iconColor: "text-muted-foreground",
      glowColor: "from-primary/15 to-transparent",
      title: "The Data Black Hole",
      subtitle: "The Institutional Blindspot",
      description:
        "Asset managers and institutional desks have zero visibility into real-time retail capital allocation or retail sentiment across Nigeria's fast-growing investor base.",
      mockWidget: (
        <div className="mt-4 p-4 rounded-xl bg-background border border-border flex flex-col gap-2 font-mono text-xs">
          <div className="flex justify-between items-center text-muted-foreground">
            <span>Terminal: Retail Telemetry</span>
            <span className="text-muted-foreground">[OFFLINE]</span>
          </div>
          <div className="bg-background p-2 rounded border border-border text-[11px] text-foreground/80">
            <div>Retail Sentiment Alpha: <span className="text-bear">UNAVAILABLE</span></div>
            <div>Behavioral Flow Coverage: <span className="text-muted-foreground">0.0%</span></div>
          </div>
        </div>
      ),
    },
  ];

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
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md label-mono bg-bear/10 border border-bear/30 w-fit">
            <AlertTriangle className="w-4 h-4 text-bear animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-bear tracking-wider uppercase">
              THE PROBLEM • SYSTEMIC MARKET FRICTION
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight max-w-[1550px]">
            Investing in Nigerian equities is <span className="text-bear">harder than it should be.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
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
                className="group relative flex flex-col justify-between bg-card hover:bg-muted p-8 rounded-lg border border-border hover:border-primary/40 transition-all overflow-hidden"
              >
                {/* Top Card Gradient Glow */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.glowColor}`} />

                <div className="flex flex-col gap-5">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-md bg-muted/40 border border-border flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-9 h-9 ${p.iconColor}`} />
                    </div>
                    <span className={`px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider uppercase border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-sans text-[34px] font-bold text-foreground leading-tight group-hover:text-foreground transition-colors">
                      {p.title}
                    </h3>
                    <div className="text-[16px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                      {p.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[20px] font-normal leading-[1.45] text-foreground/85">
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
          className="flex items-center justify-between px-8 py-5 border border-border rounded-md bg-muted/40"
        >
          <div className="flex items-center gap-4 text-[22px] font-medium text-foreground">
            <ShieldAlert className="w-6 h-6 text-paper flex-shrink-0" />
            <span>
              <strong>The Consequence:</strong> Retail capital remains on the sidelines or burns out on speculative noise—leaving Nigerians disconnected from their own economic expansion.
            </span>
          </div>
          <div className="text-[20px] font-normal text-primary tracking-wide flex-shrink-0 ml-8">
            Liquidity Pro | Confidential
          </div>
        </motion.div>
      </div>
    </div>
  );
}
