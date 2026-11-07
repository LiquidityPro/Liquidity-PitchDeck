"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Slide1Cover() {
  return (
    <div className="w-[1920px] h-[1080px] relative bg-background text-foreground overflow-hidden select-none grid-floor">

      {/* Main Content Area */}
      <div className="flex flex-col justify-between w-full h-full p-32 box-border relative z-10">
        <div className="flex flex-col max-w-[1080px]">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-sans text-[140px] font-extrabold leading-[0.95] text-foreground tracking-tight">
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
            <p className="font-sans text-[36px] font-medium leading-[1.4] text-foreground">
              Invest, learn and connect on one unified platform built specifically for Nigerian capital markets.
            </p>

            <p className="font-sans text-[26px] font-normal leading-[1.65] text-muted-foreground">
              A modern execution and social platform uniting everyday Nigerian retail investors with verified market analysts. Seamlessly trade Nigerian equities, discuss real-time ticker insights in The Square, and make confident, data-backed decisions in an ecosystem designed from the ground up for transparency, education, and long-term financial growth.
            </p>

            {/* Feature Pills */}
            <div className="flex items-center gap-4 mt-2">
              <span className="px-3 py-1.5 rounded-md bg-primary/10 border border-primary/40 text-primary text-[18px] font-semibold tracking-wide">
                Direct NGX Equities
              </span>
              <span className="px-3 py-1.5 rounded-md bg-paper/10 border border-paper/40 text-paper text-[18px] font-semibold tracking-wide">
                The Square Community
              </span>
              <span className="px-3 py-1.5 rounded-md bg-muted/70 border border-border text-foreground text-[18px] font-semibold tracking-wide">
                Verified Analysts
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer Info */}
        <div className="text-[24px] font-normal text-primary tracking-wide">
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
        <div className="relative w-[385px] h-[810px] bg-card rounded-[52px] border-[6px] border-border overflow-hidden flex flex-col items-center">
          {/* Dynamic Island / Speaker Notch */}
          <div className="absolute top-3 w-28 h-4 bg-background rounded-full z-30 border border-border" />

          {/* Actual Screen Image */}
          <div className="w-full h-full relative overflow-hidden rounded-[44px] bg-background">
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
