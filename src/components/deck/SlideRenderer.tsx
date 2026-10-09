"use client";

import React from "react";
import Slide1Cover from "@/components/slides/Slide1Cover";
import Slide2Problem from "@/components/slides/Slide2Problem";
import Slide3Solution from "@/components/slides/Slide3Solution";
import Slide4Market from "@/components/slides/Slide4Market";
import Slide5TAM from "@/components/slides/Slide5TAM";
import Slide6Comparison from "@/components/slides/Slide6Comparison";
import Slide7WhyChoose from "@/components/slides/Slide7WhyChoose";
import Slide8UnitEconomics from "@/components/slides/Slide8UnitEconomics";
import Slide9GTM from "@/components/slides/Slide9GTM";
import Slide10RevenueOutlook from "@/components/slides/Slide10RevenueOutlook";
import Slide11Financials from "@/components/slides/Slide11Financials";
import Slide12TrustSecurity from "@/components/slides/Slide12TrustSecurity";
import Slide13Team from "@/components/slides/Slide13Team";
import Slide14TheAsk from "@/components/slides/Slide14TheAsk";

interface SlideRendererProps {
  slideId: number;
}

export default function SlideRenderer({ slideId }: SlideRendererProps) {
  switch (slideId) {
    case 1:
      return <Slide1Cover />;
    case 2:
      return <Slide2Problem />;
    case 3:
      return <Slide3Solution />;
    case 4:
      return <Slide4Market />;
    case 5:
      return <Slide5TAM />;
    case 6:
      return <Slide6Comparison />;
    case 7:
      return <Slide7WhyChoose />;
    case 8:
      return <Slide8UnitEconomics />;
    case 9:
      return <Slide9GTM />;
    case 10:
      return <Slide10RevenueOutlook />;
    case 11:
      return <Slide11Financials />;
    case 12:
      return <Slide12TrustSecurity />;
    case 13:
      return <Slide13Team />;
    case 14:
      return <Slide14TheAsk />;
    default:
      return <Slide1Cover />;
  }
}
