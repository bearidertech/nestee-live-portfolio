import { Link } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const PortfolioCTA = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative py-16 animate-fade-in">
      <VideoBackground 
        videoUrl="/workCta.mp4"
        fallbackImage="/placeholder.svg"
      />
      <div className="relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-[#FAF9F6] mb-6">
          {t.cta.title}
        </h2>
        <p className="text-lg text-[#FAF9F6]/80 mb-8">
          {t.cta.description}
        </p>
        <Link
          to="/contact"
          className="cta-button inline-block bg-transparent border-2 border-[#FAF9F6] text-[#FAF9F6] px-8 py-3 rounded-full font-montserrat text-lg font-medium hover:bg-[#FAF9F6] hover:text-[#121212] transition-colors"
        >
          {t.cta.button}
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCTA;