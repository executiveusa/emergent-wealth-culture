
import React from "react";
import Hero from "@/components/Hero";
import AIPredictions from "@/components/AIPredictions";
import WebToolkits from "@/components/WebToolkits";
import BitcoinLiteracy from "@/components/BitcoinLiteracy";
import CommunityImpact from "@/components/CommunityImpact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AIPredictions />
      <WebToolkits />
      <BitcoinLiteracy />
      <CommunityImpact />
    </div>
  );
};

export default Index;
