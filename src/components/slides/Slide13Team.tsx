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
      experience: "Architecture & Algorithmic Trading Systems",
      status: "Full Time",
      statusColor: "bg-[#1fa97a]/20 text-[#1fa97a] border-[#1fa97a]/40",
      avatar: "Walter Uche",
    },
    {
      name: "Odeyemi Tobi",
      role: "Full-Stack Software Engineer",
      experience: "5+ years scaling high-concurrency consumer apps",
      status: "Full Time",
      statusColor: "bg-[#1fa97a]/20 text-[#1fa97a] border-[#1fa97a]/40",
      avatar: "Odeyemi Tobi",
    },
    {
      name: "Triumphant Chukwudi Paul",
      role: "Product Manager & Growth",
      experience: "5+ years in fintech growth & community retention",
      status: "Full Time",
      statusColor: "bg-[#1fa97a]/20 text-[#1fa97a] border-[#1fa97a]/40",
      avatar: "Triumphant Chukwudi Paul",
    },
    {
      name: "Nwawulu Clinton",
      role: "Legal & Regulatory Compliance",
      experience: "Corporate Governance & SEC Regulatory Filings",
      status: "Full Time",
      statusColor: "bg-[#1fa97a]/20 text-[#1fa97a] border-[#1fa97a]/40",
      avatar: "Nwawulu Clinton",
    },
    {
      name: "Azeez Gbolahan",
      role: "Chartered Stockbroker (FCS)",
      experience: "Fellow of CIS • 15+ years in Nigerian capital markets",
      status: "Adviser",
      statusColor: "bg-[#e0b04a]/20 text-[#e0b04a] border-[#e0b04a]/40",
      avatar: "Azeez Gbolahan",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Ambient Glows */}
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
            <Users2 className="w-4 h-4 text-[#1fa97a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#1fa97a] tracking-wider uppercase">
              LEADERSHIP &amp; GOVERNANCE • DOMAIN EXPERTISE
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            Team and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">traction.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            Deep domain synergy combining quantitative engineering, high-throughput consumer app scalability, and institutional capital market regulatory experience.
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
              className="group relative flex flex-col items-center text-center justify-between bg-[#132238]/85 hover:bg-[#16294a]/90 backdrop-blur-xl p-7 rounded-3xl border border-white/10 hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all overflow-hidden h-[420px]"
            >
              {/* Top Accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  m.status === "Adviser"
                    ? "from-[#e0b04a] to-amber-300"
                    : "from-[#1fa97a] to-emerald-300"
                }`}
              />

              {/* Avatar Frame */}
              <div className="relative mt-2">
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center border-2 border-white/20 group-hover:border-[#1fa97a] group-hover:scale-105 transition-all shadow-xl bg-white/5">
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
                <h3 className="font-sans text-[24px] font-bold text-[#f4f1ea] leading-snug group-hover:text-white transition-colors">
                  {m.name}
                </h3>
                <div className="text-[15px] font-semibold text-[#1fa97a] leading-tight">
                  {m.role}
                </div>
                <p className="font-sans text-[16px] font-normal leading-[1.35] text-white/70 mt-1">
                  {m.experience}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs text-white/40 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1fa97a]" />
                <span>Verified Core Team</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ownership & Traction Bottom Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 gap-8 px-10 py-5 rounded-3xl border-2 border-white/15 bg-white/5 backdrop-blur-xl"
        >
          <div className="flex items-center gap-4 text-[21px] text-[#f4f1ea]">
            <span className="px-3 py-1 rounded-full bg-[#1fa97a]/20 text-[#1fa97a] text-xs font-mono font-bold uppercase">
              CAP TABLE
            </span>
            <span>
              <strong>Ownership Today:</strong> Walter Uche 94% &nbsp;|&nbsp; Azeez Gbolahan 5% &nbsp;|&nbsp; Odeyemi Tobi 1%
            </span>
          </div>

          <div className="flex items-center gap-4 text-[21px] text-[#f4f1ea] justify-end">
            <span className="px-3 py-1 rounded-full bg-[#e0b04a]/20 text-[#e0b04a] text-xs font-mono font-bold uppercase">
              TRACTION
            </span>
            <span>
              <strong>Launch Targets:</strong> 1,000 Waitlist &nbsp;|&nbsp; 100 Beta Traders &nbsp;|&nbsp; 2 Sponsoring Brokers
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
