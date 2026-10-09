"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Slide11Financials() {
  const years = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

  const revenueRows = [
    { name: "Net trading commission", vals: ["17.5", "61.5", "124.8", "203.1", "290.6"] },
    { name: "Liquidity Pro subscriptions", vals: ["10.5", "36.9", "74.9", "121.8", "174.4"] },
    { name: "Yield on client cash float", vals: ["5.8", "20.5", "41.6", "67.7", "96.9"] },
    { name: "Internal transfer fees", vals: ["3.5", "12.3", "25.0", "40.6", "58.1"] },
    { name: "B2B API licensing", vals: ["—", "21.7", "72.5", "143.3", "234.2"] },
  ];

  const totalRevenue = ["37.3", "152.8", "338.7", "576.5", "854.1"];
  const grossProfit = ["35.3", "143.4", "316.9", "538.5", "796.8"];
  const payroll = ["128.7", "156.7", "226.9", "306.0", "401.0"];
  const opex = ["62.0", "93.4", "148.6", "219.3", "310.8"];
  const ebitda = ["(155.4)", "(106.7)", "(58.5)", "+13.2", "+84.9"];
  const cashBalance = ["394.6", "287.9", "229.4", "242.6", "327.5"];

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
            <Calculator className="w-4 h-4 text-[#1fa97a] animate-pulse" />
            <span className="font-sans text-[16px] font-bold text-[#1fa97a] tracking-wider uppercase">
              FINANCIAL MODEL • 5-YEAR COMPREHENSIVE P&amp;L
            </span>
          </div>

          <h2 className="font-sans text-[76px] font-extrabold leading-[1.05] text-[#f4f1ea] tracking-tight">
            Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]">projections.</span>
          </h2>

          <p className="font-sans text-[26px] font-normal leading-snug text-[#f4f1ea]/70 max-w-[1250px]">
            Base case model under a ₦650M seed round. Spendable cash reserves never drop below ₦218M across the entire path to profitability.
          </p>
        </motion.div>

        {/* Financial Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="my-auto bg-[#132238]/85 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[380px_repeat(5,1fr)] bg-white/5 px-10 py-4 border-b border-white/10 text-[18px] font-bold text-white/60 uppercase font-mono tracking-wider">
            <div>Amounts in ₦ Millions</div>
            {years.map((y) => (
              <div key={y} className="text-right">{y}</div>
            ))}
          </div>

          {/* Revenue Breakdown Rows */}
          {revenueRows.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[380px_repeat(5,1fr)] px-10 py-2.5 items-center text-[21px] border-b border-white/5 text-[#f4f1ea]/80 hover:bg-white/[0.02] transition-colors"
            >
              <div>{r.name}</div>
              {r.vals.map((v, i) => (
                <div key={i} className="text-right font-mono font-medium text-white/90">{v}</div>
              ))}
            </div>
          ))}

          {/* Total Revenue Highlight Row */}
          <div className="grid grid-cols-[380px_repeat(5,1fr)] px-10 py-3.5 items-center text-[23px] font-extrabold bg-[#1fa97a]/20 text-[#f4f1ea] border-b border-[#1fa97a]/40 shadow-inner">
            <div className="text-[#1fa97a] flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Total Revenue</span>
            </div>
            {totalRevenue.map((v, i) => (
              <div key={i} className="text-right font-mono font-extrabold text-[#1fa97a] text-[25px]">{v}</div>
            ))}
          </div>

          {/* Gross Profit */}
          <div className="grid grid-cols-[380px_repeat(5,1fr)] px-10 py-2.5 items-center text-[21px] font-bold text-white/90 border-b border-white/5">
            <div>Gross Profit</div>
            {grossProfit.map((v, i) => (
              <div key={i} className="text-right font-mono">{v}</div>
            ))}
          </div>

          {/* Payroll */}
          <div className="grid grid-cols-[380px_repeat(5,1fr)] px-10 py-2.5 items-center text-[20px] text-white/60 border-b border-white/5">
            <div>Payroll (Scaling from 4 to 10 FTE)</div>
            {payroll.map((v, i) => (
              <div key={i} className="text-right font-mono">{v}</div>
            ))}
          </div>

          {/* Opex */}
          <div className="grid grid-cols-[380px_repeat(5,1fr)] px-10 py-2.5 items-center text-[20px] text-white/60 border-b border-white/10">
            <div>Marketing, Cloud Infrastructure &amp; G&amp;A</div>
            {opex.map((v, i) => (
              <div key={i} className="text-right font-mono">{v}</div>
            ))}
          </div>

          {/* EBITDA Row */}
          <div className="grid grid-cols-[380px_repeat(5,1fr)] px-10 py-3.5 items-center text-[24px] font-extrabold bg-white/5 border-b border-white/10">
            <div>EBITDA (Break-Even Month 41)</div>
            {ebitda.map((v, i) => (
              <div
                key={i}
                className={`text-right font-mono ${
                  v.includes("(") ? "text-rose-400" : "text-[#1fa97a]"
                }`}
              >
                {v}
              </div>
            ))}
          </div>

          {/* Spendable Cash Balance */}
          <div className="grid grid-cols-[380px_repeat(5,1fr)] px-10 py-3.5 items-center text-[23px] font-bold bg-[#e0b04a]/15 text-[#f4f1ea]">
            <div className="text-[#e0b04a] font-extrabold">Spendable Cash at Year End</div>
            {cashBalance.map((v, i) => (
              <div key={i} className="text-right font-mono font-extrabold text-[#e0b04a] text-[25px]">{v}</div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[20px] text-[#1fa97a] tracking-wide pt-2">
          <span>₦100M locked regulatory capital excluded from spendable cash. EBITDA turns positive in Month 41.</span>
          <div>Liquidity Pro | Confidential</div>
        </div>
      </div>
    </div>
  );
}
