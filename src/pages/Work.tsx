import { useState } from "react";
import Navbar from "@/components/Navbar";
import PortfolioIntro from "@/components/PortfolioIntro";
import ArtistGrid from "@/components/ArtistGrid";
import PortfolioCTA from "@/components/PortfolioCTA";

const Work = () => {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <PortfolioIntro />
        <ArtistGrid />
        <PortfolioCTA />
      </div>
    </main>
  );
};

export default Work;