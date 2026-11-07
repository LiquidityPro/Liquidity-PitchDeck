"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Lock, Users, CheckCircle2, Shield, FileCheck2 } from "lucide-react";

export default function Slide12TrustSecurity() {
  const pillars = [
    {
      icon: Cpu,
      tag: "CORE INFRASTRUCTURE",
      badge: "C • Rust • TypeScript",
      title: "Fast, Auditable Core",
      subtitle: "Proprietary Ledger Engine",
      desc: "Double-entry ledger with sub-millisecond execution and complete audit tracking.",
      accent: "from-primary/20 to-transparent",
      color: "text-primary",
    },
    {
      icon: ShieldCheck,
      tag: "REGULATORY ALIGNMENT",
      badge: "SEC Registration In Progress",
      title: "Designed for Regulation",
      subtitle: "Digital Sub-Broker Framework",
      desc: "Operates under SEC digital sub-broker rules with licensed sponsoring broker partners.",
      accent: "from-paper/20 to-transparent",
      color: "text-paper",
    },
    {
      icon: Lock,
      tag: "ASSET SEGREGATION",
      badge: "Daily Bank Reconciliation",
      title: "Client Fund Protection",
      subtitle: "Strict Ring-Fenced Custody",
      desc: "Client funds stay in segregated accounts with automated daily custodial reconciliation.",
      accent: "from-primary/15 to-transparent",
      color: "text-primary",
    },
    {
      icon: Users,
      tag: "GOVERNANCE & TRUST",
      badge: "NDPA & Anti-Money Laundering",
      title: "Responsible Community",
      subtitle: "Verified Identity & Content",
      desc: "Tier-3 biometric KYC, NDPA data compliance, and automated spam moderation.",
      accent: "from-primary/15 to-transparent",
      color: "text-muted-foreground",
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
            <Shield className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-primary tracking-wider uppercase">
              INSTITUTIONAL GRADE • SECURITY &amp; COMPLIANCE
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-foreground tracking-tight">
            Built to be <span className="text-primary">trusted.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-muted-foreground max-w-[1250px]">
            Institutional architecture designed for SEC compliance, segregated funds, and resilient performance.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-4 gap-7 my-auto">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * (idx + 1) }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between bg-card hover:bg-muted p-8 rounded-lg border border-border hover:border-primary/40 transition-all overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.accent}`} />

                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-md bg-muted/40 border border-border flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-8 h-8 ${p.color}`} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                      {p.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans text-[30px] font-bold text-foreground leading-tight">
                      {p.title}
                    </h3>
                    <div className="text-[14px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                      {p.subtitle}
                    </div>
                  </div>

                  <p className="font-sans text-[19px] font-normal leading-[1.45] text-foreground/85">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border">
                  <span className="px-3 py-1 rounded-full bg-muted/40 border border-border text-xs font-mono font-bold text-foreground/80 inline-block">
                    {p.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-between px-10 py-5 rounded-lg border-2 border-primary bg-primary/10 text-[22px] font-medium text-foreground"
        >
          <div className="flex items-center gap-4">
            <FileCheck2 className="w-6 h-6 text-primary flex-shrink-0" />
            <span>
              <strong>Compliance First:</strong> Partnering with licensed brokers guarantees CSCS clearing and strict investor protection.
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
