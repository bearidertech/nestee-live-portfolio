import AnimatedText from "./AnimatedText";
import VideoBackground from "./VideoBackground";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <VideoBackground 
        videoUrl="/HomePage.mp4"
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedText
          text={t.hero.title}
          className="text-xs sm:text-sm font-montserrat tracking-[0.2em] sm:tracking-[0.3em] text-[#AEBED9] mb-3 sm:mb-4"
          delay={200}
        />
        <AnimatedText
          text={t.hero.subtitle}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-montserrat font-bold mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight"
          delay={400}
        />
        <AnimatedText
          text={t.hero.description}
          className="text-base sm:text-lg md:text-xl text-[#FAF9F6]/80 mb-6 sm:mb-8 max-w-2xl mx-auto"
          delay={600}
        />
        <AnimatedText
          text={
            <Link to="/work" className="cta-button bg-transparent border-2 border-[#FAF9F6] text-[#FAF9F6] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-montserrat text-sm sm:text-base font-medium hover:bg-[#FAF9F6] hover:text-[#121212] transition-colors">
              {t.hero.cta}
            </Link>
          }
          delay={800}
        />
      </div>
    </div>
  );
};

export default HeroSection;