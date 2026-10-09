"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Slide1Cover() {
  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none">
      {/* Background ambient lighting glows */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-[#1fa97a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-32 w-[700px] h-[700px] bg-[#e0b04a]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#16294a]/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="flex flex-col justify-between w-full h-full p-32 box-border relative z-10">
        <div className="flex flex-col max-w-[1080px]">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-sans text-[140px] font-extrabold leading-[0.95] text-[#f4f1ea] tracking-tight">
              Liquidity Pro
            </h1>
          </motion.div>

          {/* Expanded & Justified Description - Lowered with generous spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-24 max-w-[980px] flex flex-col gap-6"
          >
            <p className="font-sans text-[36px] font-medium leading-[1.4] text-[#f4f1ea] text-justify">
              Invest, learn and connect on one unified platform built specifically for Nigerian capital markets.
            </p>

            <p className="font-sans text-[26px] font-normal leading-[1.65] text-[#f4f1ea]/80 text-justify">
              A modern execution and social platform uniting everyday Nigerian retail investors with verified market analysts. Seamlessly trade Nigerian equities, discuss real-time ticker insights in The Square, and make confident, data-backed decisions in an ecosystem designed from the ground up for transparency, education, and long-term financial growth.
            </p>

            {/* Feature Pills */}
            <div className="flex items-center gap-4 mt-2">
              <span className="px-5 py-2 rounded-full bg-[#1fa97a]/15 border border-[#1fa97a]/40 text-[#1fa97a] text-[18px] font-semibold tracking-wide">
                Direct NGX Equities
              </span>
              <span className="px-5 py-2 rounded-full bg-[#e0b04a]/15 border border-[#e0b04a]/40 text-[#e0b04a] text-[18px] font-semibold tracking-wide">
                The Square Community
              </span>
              <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[#f4f1ea] text-[18px] font-semibold tracking-wide">
                Verified Analysts
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer Info */}
        <div className="text-[24px] font-normal text-[#1fa97a] tracking-wide">
          Liquidity Pro | Confidential
        </div>
      </div>

      {/* Mobile Device Mockup with The Square Screenshot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-36 top-[130px] w-[420px] h-[820px] flex items-center justify-center drop-shadow-2xl z-20"
      >
        {/* Glow Behind Mockup */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1fa97a]/25 to-[#e0b04a]/20 rounded-[56px] blur-2xl -z-10" />

        {/* Phone Device Bezel Frame */}
        <div className="relative w-[385px] h-[810px] bg-[#0c121d] rounded-[52px] border-[6px] border-[#223554] shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_0_12px_rgba(255,255,255,0.08)] overflow-hidden flex flex-col items-center">
          {/* Dynamic Island / Speaker Notch */}
          <div className="absolute top-3 w-28 h-4 bg-[#05080f] rounded-full z-30 border border-white/10" />

          {/* Actual Screen Image */}
          <div className="w-full h-full relative overflow-hidden rounded-[44px] bg-[#0c121d]">
            <Image
              src="/images/mobile-square.png"
              alt="Liquidity Pro - The Square Mobile Feed"
              fill
              className="object-cover object-top"
              priority
              sizes="385px"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
