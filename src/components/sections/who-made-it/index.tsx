import React from "react";
import { Typography } from "@/components/shared/typography";
import Image from "next/image";

const WhoGetItDone = () => {
  return (
    <section
      id="about"
      className="w-full pb-6 pt-24 sm:pb-8 sm:pt-24 md:pb-12 md:pt-26 lg:pb-16 lg:pt-28 xl:pb-20 xl:pt-38 px-5 sm:pl-20 xl:pl-32 flex justify-center items-center bg-[url('/assets/images/who-made-it.webp')] bg-cover bg-center"
    >
      <div className="max-width-section w-full flex flex-col lg:flex-row justify-between gap-10 items-center">
        {/* Left Side - Content */}
        <div className="w-full flex justify-center lg:justify-start items-center">
          <div>
            <Typography
              as="h1"
              size="h1"
              className="leading-none font-eurostile whitespace-pre-wrap text-white mb-3"
            >
              We’re Blockchain Experts <br />
              <span className="text-light-orange">Who Get It Done</span>
            </Typography>
            <Typography
              size="lg"
              as={"p"}
              className="text-gray max-w-md"
            >
              At Code Encoders, we combine deep blockchain knowledge with a
              startup mindset. Our developers are skilled in Ethereum, Polygon,
              BNB Chain, Solana, and more — helping you launch secure,
              efficient, and scalable decentralized apps that solve real-world
              problems.
            </Typography>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full flex items-center justify-center lg:justify-end">
          {/* <div className="relative w-full"> */}
          <Image
            src="/assets/images/experts.png"
            alt="Professional Development Illustration"
            width={718}
            height={541}
            className=""
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhoGetItDone;
