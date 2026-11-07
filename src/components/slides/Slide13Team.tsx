"use client";

import React from "react";
import { motion } from "framer-motion";
import { Illustration } from "@/components/common/Illustration";
import { Users2, Award, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function Slide13Team() {
  const team = [
    {
      name: "Walter Uche",
      role: "Quantitative Developer & Researcher",
      experience: "Algorithmic trading systems and architecture",
      status: "Full Time",
      statusColor: "bg-primary/15 text-primary border-primary/40",
      avatar: "Walter Uche",
    },
    {
      name: "Odeyemi Tobi",
      role: "Full-Stack Software Engineer",
      experience: "5+ years scaling high-concurrency consumer apps",
      status: "Full Time",
      statusColor: "bg-primary/15 text-primary border-primary/40",
      avatar: "Odeyemi Tobi",
    },
    {
      name: "Elizabeth Nwaugo",
      role: "Product Owner",
      experience: "2+ years in fintech growth at Wema Bank",
      status: "Full Time",
      statusColor: "bg-primary/15 text-primary border-primary/40",
      avatar: "Elizabeth Nwaugo",
    },
    {
      name: "Nwawulu Clinton",
      role: "Legal & Regulatory Compliance",
      experience: "Corporate governance and SEC regulatory filings",
      status: "Full Time",
      statusColor: "bg-primary/15 text-primary border-primary/40",
      avatar: "Nwawulu Clinton",
    },
    {
      name: "Azeez Gbolahan",
      role: "Chartered Stockbroker (FCS)",
      experience: "Fellow of CIS • 15+ years in Nigerian capital markets",
      status: "Adviser",
      statusColor: "bg-paper/15 text-paper border-paper/40",
      avatar: "Azeez Gbolahan",
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
            <Users2 className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-primary tracking-wider uppercase">
              LEADERSHIP • DOMAIN EXPERTISE
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight">
            Team and <span className="text-primary">traction.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
            Leadership across quantitative systems, software engineering, product growth, and capital market regulation.
          </p>
        </motion.div>

        {/* 5 Profile Cards */}
        <div className="grid grid-cols-5 gap-6 my-auto">
          {team.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 * (idx + 1) }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center text-center justify-between bg-card hover:bg-muted p-7 rounded-lg border border-border hover:border-primary/40 transition-all overflow-hidden h-[420px]"
            >
              {/* Top Accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  m.status === "Adviser"
                    ? "from-paper to-paper"
                    : "from-primary to-primary"
                }`}
              />

              {/* Avatar Frame */}
              <div className="relative mt-2">
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center border-2 border-border group-hover:border-primary group-hover:scale-105 transition-all shadow-xl bg-muted/40">
                  <Illustration name={m.avatar} className="w-24 h-24 object-cover" />
                </div>
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${m.statusColor} whitespace-nowrap shadow`}
                >
                  {m.status}
                </span>
              </div>

              {/* Bio & Details */}
              <div className="flex flex-col gap-2 my-auto">
                <h3 className="font-sans text-[24px] font-bold text-foreground leading-snug group-hover:text-foreground transition-colors">
                  {m.name}
                </h3>
                <div className="text-[15px] font-semibold text-primary leading-tight">
                  {m.role}
                </div>
                <p className="font-sans text-[16px] font-normal leading-[1.35] text-muted-foreground mt-1">
                  {m.experience}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-border flex items-center justify-center gap-1.5 text-xs text-muted-foreground font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>Verified Core Team</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Traction Bottom Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-between px-10 py-5 rounded-lg border-2 border-border bg-muted/40"
        >
          <div className="flex items-center gap-4 text-[22px] text-foreground">
            <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-mono font-bold uppercase">
              PRE-LAUNCH TRACTION
            </span>
            <span>
              <strong>Launch Targets:</strong> 1,000 Waitlist Sign-ups &nbsp;|&nbsp; 100 Beta Traders &nbsp;|&nbsp; 2 Sponsoring Brokers
            </span>
          </div>

          <div className="text-[20px] font-normal text-primary tracking-wide">
            Liquidity | Confidential
          </div>
        </motion.div>
      </div>
    </div>
  );
}
