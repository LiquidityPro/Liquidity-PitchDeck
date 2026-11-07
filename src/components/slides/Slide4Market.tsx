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
      label: "Market value in August 2026 (from ₦62.7T in 2024)",
    },
    {
      value: "2.7M",
      label: "Active retail accounts (up 13x in three years)",
    },
    {
      value: "30M",
      label: "Proposed NGX retail target by 2030",
    },
  ];

  return (
    <div className="w-[1920px] h-[1080px] relative bg-background text-foreground overflow-hidden select-none grid-floor">
      <div className="flex flex-col justify-between w-full h-full p-32 box-border">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-sans text-[72px] font-bold leading-[1.1] text-foreground">
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
              className="flex flex-col gap-3 bg-card p-8 rounded-md border border-border shadow-lg"
            >
              <div className="font-sans text-[80px] font-extrabold leading-none text-paper">
                {s.value}
              </div>
              <div className="font-sans text-[28px] font-normal leading-[1.3] text-foreground">
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
          className="flex flex-col gap-2 px-10 py-7 border-2 border-primary rounded-md bg-card"
        >
          <div className="font-sans text-[26px] font-bold leading-tight text-primary tracking-wider uppercase">
            THE UPSIDE
          </div>
          <p className="font-sans text-[30px] font-normal leading-[1.35] text-foreground">
            The NGX targets ₦230T in market value by end-2026. New participants need a dedicated platform to learn and trade.
          </p>
        </motion.div>

        {/* Footer */}
        <div className="text-[24px] font-normal text-primary tracking-wide">
          Liquidity | Confidential
        </div>
      </div>
    </div>
  );
}
