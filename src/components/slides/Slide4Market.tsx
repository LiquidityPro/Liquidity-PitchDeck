"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Slide4Market() {
  const stats = [
    {
      value: "+51.2%",
      label: "NGX All-Share Index return in 2025",
    },
    {
      value: "₦157T",
      label: "Equity market value in August 2026, up from ₦62.7T at end-2024",
    },
    {
      value: "2.7M",
      label: "Active retail investors, a reported 13-fold rise in three years",
    },
    {
      value: "30M",
      label: "Retail investors targeted by 2030 under a proposed master plan",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      <div className="flex flex-col justify-between w-full h-full p-32 box-border">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-sans text-[72px] font-bold leading-[1.1] text-[#f4f1ea]">
            Nigerian equities are accelerating
          </h2>
        </motion.div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-4 gap-6 my-auto">
          {stats.map((s, idx) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              className="flex flex-col gap-3 bg-[#16294a] p-8 rounded-2xl border border-[#16294a]/80 shadow-lg"
            >
              <div className="font-sans text-[80px] font-extrabold leading-none text-[#e0b04a]">
                {s.value}
              </div>
              <div className="font-sans text-[28px] font-normal leading-[1.3] text-[#f4f1ea]/90">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upside Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-2 px-10 py-7 border-2 border-[#1fa97a] rounded-2xl bg-[#16294a]/30"
        >
          <div className="font-sans text-[26px] font-bold leading-tight text-[#1fa97a] tracking-wider uppercase">
            THE UPSIDE
          </div>
          <p className="font-sans text-[30px] font-normal leading-[1.35] text-[#f4f1ea]">
            NGX management has set a target of ₦230T equity market value by end-2026, from about ₦157T in August. More participants are arriving, and they need a place to learn and trade.
          </p>
        </motion.div>

        {/* Footer */}
        <div className="text-[24px] font-normal text-[#1fa97a] tracking-wide">
          Liquidity Pro | Confidential
        </div>
      </div>
    </div>
  );
}
