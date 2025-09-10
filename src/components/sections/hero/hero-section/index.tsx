import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full pb-6 pt-24 sm:pb-8 sm:pt-24 md:pb-12 md:pt-26 lg:pb-16 lg:pt-28 xl:pb-20 xl:pt-38 px-5 sm:px-20 xl:pl-32 flex justify-center items-center bg-[url('/assets/images/hero-bg.webp')] bg-cover bg-center">
      <div className="w-full max-width-section">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* left side - with more padding */}
          <div className="w-full flex flex-col text-center lg:text-left">
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <Typography
                    size={"lg"}
                    as={"p"}
                    className="text-blue font-eurostile-semibold"
                  >
                    Let's Build
                  </Typography>
                  <Typography
                    size={"h1"}
                    as={"h1"}
                    className="font-eurostile text-white leading-tight"
                  >
                    Unlock the Power of{" "}
                    <span className="text-orange"> Blockchain</span> Technology
                  </Typography>
                </div>
                <div className="mt-4 sm:mt-6">
                  <Typography
                    size={"xl"}
                    as={"p"}
                    className="text-gray font-normal leading-relaxed"
                  >
                    From smart contracts to DeFi platforms — we build secure,
                    scalable, and future-ready blockchain solutions tailored for
                    startups and enterprises.
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col justify-center lg:items-start gap-2">
                <Typography
                  size={"lg"}
                  as={"p"}
                  className="text-gray font-eurostile-semibold leading-relaxed capitalize"
                >
                  Get in touch now.
                </Typography>
                <div className="flex justify-center lg:justify-start items-center">
                <a
                  href="https://calendly.com/syedmustafah/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                    Book An Appointment
                  </Button>
                </a>
                </div>
              </div>
            </div>
          </div>
          {/* right side - closer to edge, no right padding */}
          <div className="w-full flex justify-center lg:justify-end px-4 sm:px-6 md:px-8 lg:px-0">
            <div className="relative w-full">
              <Image
                src={"/assets/images/hero-img.webp"}
                width={590}
                height={602}
                alt="hero-image"
                className="w-full max-w-[437px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
