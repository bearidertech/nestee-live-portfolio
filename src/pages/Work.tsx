import Navbar from "@/components/Navbar";
import PortfolioIntro from "@/components/PortfolioIntro";
import ArtistGrid from "@/components/ArtistGrid";
import PortfolioCTA from "@/components/PortfolioCTA";
import CustomerReview from "@/components/CustomerReview";

const Work = () => {
  return (
    <main className="min-h-screen w-full bg-[#121212] overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <PortfolioIntro />
        <ArtistGrid />
        <CustomerReview />
        <PortfolioCTA />
      </div>
    </main>
  );
};

export default Work;