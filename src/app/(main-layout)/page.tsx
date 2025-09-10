import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero/hero-section";
import LetsDiscuss from "@/components/sections/lets-discuss";
import LetsStarted from "@/components/sections/lets-started";
import TrustedBy from "@/components/sections/our-clients";
import TrustPriority from "@/components/sections/our-priority";
import OurUsers from "@/components/sections/our-users";
import RealProjects from "@/components/sections/real-projects";
import WhatWeProvide from "@/components/sections/what-we-provide";
import WhoGetItDone from "@/components/sections/who-made-it";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurUsers />
      <RealProjects />
      <LetsDiscuss />
      <WhoGetItDone />
      <LetsStarted />
      <WhatWeProvide />
      <TrustedBy />
      <Faq />
      <TrustPriority />
    </div>
  );
};

export default Home;
