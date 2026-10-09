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
      desc: "Built on an immutable double-entry ledger engineered for sub-millisecond execution, audit readiness, and zero balance discrepancies.",
      accent: "from-emerald-500/20 to-transparent",
      color: "text-emerald-400",
    },
    {
      icon: ShieldCheck,
      tag: "REGULATORY ALIGNMENT",
      badge: "SEC Registration In Progress",
      title: "Designed for Regulation",
      subtitle: "Digital Sub-Broker Framework",
      desc: "Architected to operate under the SEC digital sub-broker regime in partnership with established, licensed sponsoring broker-dealers.",
      accent: "from-amber-500/20 to-transparent",
      color: "text-[#e0b04a]",
    },
    {
      icon: Lock,
      tag: "ASSET SEGREGATION",
      badge: "Daily Bank Reconciliation",
      title: "Client Fund Protection",
      subtitle: "Strict Ring-Fenced Custody",
      desc: "Client cash and securities are held strictly segregated from corporate operations, with automated daily custodial reconciliation.",
      accent: "from-cyan-500/20 to-transparent",
      color: "text-cyan-400",
    },
    {
      icon: Users,
      tag: "GOVERNANCE & TRUST",
      badge: "NDPA & Anti-Money Laundering",
      title: "Responsible Community",
      subtitle: "Verified Identity & Content",
      desc: "Integrated Tier-3 biometric KYC/AML controls, NDPA-aligned data sovereignty, and automated moderation to eliminate market manipulation.",
      accent: "from-indigo-500/20 to-transparent",
      color: "text-indigo-400",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Ambient Lighting */}
      <div className="absolute -top-32 right-32 w-[650px] h-[650px] bg-[#1fa97a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-32 w-[650px] h-[650px] bg-[#e0b04a]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex flex-col justify-between w-full h-full p-28 box-border relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1fa97a]/15 border border-[#1fa97a]/30 w-fit">
            <Shield className="w-4 h-4 text-[#1fa97a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#1fa97a] tracking-wider uppercase">
              INSTITUTIONAL GRADE • SECURITY &amp; COMPLIANCE
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            Built to be <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">trusted.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            Institutional-grade architecture designed from Day 1 for regulatory compliance, audited fund segregation, and resilient performance.
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
                className="group relative flex flex-col justify-between bg-[#132238]/85 hover:bg-[#16294a]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.accent}`} />

                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className={`w-8 h-8 ${p.color}`} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-white/50 uppercase tracking-wider">
                      {p.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans text-[30px] font-bold text-[#f4f1ea] leading-tight">
                      {p.title}
                    </h3>
                    <div className="text-[14px] font-semibold text-white/50 uppercase tracking-wider mt-1">
                      {p.subtitle}
                    </div>
                  </div>

                  <p className="font-sans text-[19px] font-normal leading-[1.45] text-[#f4f1ea]/80">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-white/80 inline-block">
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
          className="flex items-center justify-between px-10 py-5 rounded-3xl border-2 border-[#1fa97a] bg-[#1fa97a]/15 backdrop-blur-xl text-[22px] font-medium text-[#f4f1ea]"
        >
          <div className="flex items-center gap-4">
            <FileCheck2 className="w-6 h-6 text-[#1fa97a] flex-shrink-0" />
            <span>
              <strong>Compliance First:</strong> Partnering with top-tier registered brokers ensures direct CSCS clearing and SEC-standard client protection.
            </span>
          </div>
          <div className="text-[20px] font-normal text-[#1fa97a] tracking-wide flex-shrink-0 ml-8">
            Liquidity Pro | Confidential
          </div>
        </motion.div>
      </div>
    </div>
  );
}
