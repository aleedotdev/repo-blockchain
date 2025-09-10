import React from "react";
import { Button } from "@/components/shared/button";
import { Typography } from "@/components/shared/typography";
import Image from "next/image";

const TrustPriority = () => {
  return (
    <section className="bg-white flex items-center justify-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-20 xl:px-32">
      <div className="w-full max-width-section grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* Left Side - Content */}
        <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1 lg:pl-0 xl:pl-20">
          <div className="w-full max-w-lg lg:max-w-none text-center lg:text-left">
            <Typography
              as="h2"
              size="h1"
              className="leading-tight font-eurostile text-dark-black mb-4 sm:mb-6"
            >
              We Secure What You Think—With Trust & Transparency
            </Typography>

            <Typography
              size="lg"
              as="p"
              className="text-dark-gray leading-relaxed mb-6 sm:mb-8"
            >
              Every line of code we write is tested, reviewed, and made with
              your business goals in mind. Trust us to bring your vision to life
              — the right way.
            </Typography>
            <a
                  href="https://calendly.com/syedmustafah/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
            <Button className="w-full sm:w-auto min-w-[200px]">
              Book An Appointment
            </Button>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="flex justify-center relative w-full max-w-md sm:max-w-lg lg:max-w-none">
            <Image
              src="/assets/images/hand-shake.webp"
              alt="Business handshake representing trust and partnership"
              width={680}
              height={520}
              className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[680px] rounded-xl sm:rounded-[50px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPriority;
