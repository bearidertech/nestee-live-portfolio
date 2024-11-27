import Navbar from "@/components/Navbar";
import PortfolioIntro from "@/components/PortfolioIntro";
import ArtistGrid from "@/components/ArtistGrid";
import PortfolioCTA from "@/components/PortfolioCTA";
import CustomerReview from "@/components/CustomerReview";

const Work = () => {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <PortfolioIntro />
        <ArtistGrid />
        <CustomerReview />
        <PortfolioCTA />
      </div>
    </main>
  );
};

export default Work;