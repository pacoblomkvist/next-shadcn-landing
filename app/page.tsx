import { WavyBackground } from "@/components/ui/wavy-backgroun"
import React from "react";
import {Button} from "@/components/ui/button";
import {ChevronRightIcon} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";
import {TypewriterEffectSmooth} from "@/components/ui/typewritter-effect";
import FeatureCards from "@/app/feature-cards";
import Features from "@/app/features";
import Footer from "@/app/layout/footer";
import HeroHeader from "@/app/hero";
import Hero from "@/app/hero";
const className = "text-base md:text-lg lg:text-2xl mt-4 text-white font-normal inter-var text-center";
const words = [
    {
        text: "Simple",
        className: className
    },
    {
        text: "Fast",
        className: className
    },
    {
        text: "and",
        className: className
    },
    {
        text: "Beautiful",
        className: className
    },
    {
        text: "Apps.",
        className: className,
    },
];
export default function Home() {
  return (
      <main>
          <Hero/>
          <FeatureCards/>
          <Features/>
      </main>


  )
}
