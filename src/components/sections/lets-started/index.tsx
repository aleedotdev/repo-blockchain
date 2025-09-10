"use client";
import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import { scrollToSection } from "@/utils/scrollToSection";
import Image from "next/image";

const LetsStarted = () => {
  return (
    <section className="bg-white flex items-center justify-center py-12 sm:py-15 p-4 sm:p-6 px-5 sm:px-20 xl:px-36">
      <div className="max-width-section w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-12 items-center justify-between">
        {/* Left Side - Logo/Image */}
        <div className="w-full flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <Image
              src="/assets/images/get-started.webp"
              alt="Code Encoders Logo"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center lg:justify-start">
          <div>
            <Typography
              size="h5"
              as={"h5"}
              className="text-orange font-eurostile-semibold tracking-wider uppercase mb-2"
            >
              GET STARTED
            </Typography>

            <Typography
              as="h1"
              size="h1"
              className="leading-tight font-eurostile mb-2"
            >
              Launch Your{" "}
              <span className="!text-orange">
                Blockchain Product with Confidence
              </span>
            </Typography>
            <Typography
              size="lg"
              className="text-dark-gray max-w-md leading-relaxed mb-8"
            >
              From concept to mainnet, our experts handle everything —
              architecture, smart contracts, frontend, security audits,
              tokenomics, and more. We’re the Web3 partner your business needs.
            </Typography>

            <Button onClick={() => scrollToSection("contactUs")} className="px-8 py-4 w-full sm:w-fit text-lg font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsStarted;
