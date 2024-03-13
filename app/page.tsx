import { WavyBackground } from "@/components/ui/wavy-backgroun"
import React from "react";
import {Button} from "@/components/ui/button";
import {ChevronRightIcon} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";
import {TypewriterEffectSmooth} from "@/components/ui/typewritter-effect";
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
        <Container>
            <WavyBackground className="max-w-4xl mx-auto pb-40 max-h-full" speed={"fast"}>
                <div className="flex flex-col items-center space-y-6">
                    <p className="text-4xl md:text-7xl lg:text-8xl text-white font-bold inter-var text-center">
                        _Blmk Studio_
                    </p>
                    <TypewriterEffectSmooth  words={words} cursorClassName="hidden" />
                    <div>

                    </div>
                    <Link href="/landing">
                        <Button className="text-xs md:text-base lg:text-lg font-bold p-6 mb-6">
                            Get Started
                            <ChevronRightIcon className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </WavyBackground>
        </Container>
    </main>
  )
}
