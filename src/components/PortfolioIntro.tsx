import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const PortfolioIntro = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-[#FAF9F6]">
        {t.portfolio.title}
      </h1>
      <h2 className="text-2xl md:text-3xl font-montserrat mb-8 text-[#FAF9F6]">
        {t.portfolio.servicesTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
        <div className="backdrop-blur-md bg-[#AEBED9]/5 p-6 rounded-lg border border-[#AEBED9]/20 hover:bg-[#AEBED9]/10 transition-all duration-300">
          <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#AEBED9]">
            {t.portfolio.services.arrangements.title}
          </h3>
          <p className="text-[#FAF9F6]/80">
            {t.portfolio.services.arrangements.description}
          </p>
        </div>
        <div className="backdrop-blur-md bg-[#AEBED9]/5 p-6 rounded-lg border border-[#AEBED9]/20 hover:bg-[#AEBED9]/10 transition-all duration-300">
          <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#AEBED9]">
            {t.portfolio.services.programming.title}
          </h3>
          <p className="text-[#FAF9F6]/80">
            {t.portfolio.services.programming.description}
          </p>
        </div>
        <div className="backdrop-blur-md bg-[#AEBED9]/5 p-6 rounded-lg border border-[#AEBED9]/20 hover:bg-[#AEBED9]/10 transition-all duration-300">
          <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#AEBED9]">
            {t.portfolio.services.keyboard.title}
          </h3>
          <p className="text-[#FAF9F6]/80">
            {t.portfolio.services.keyboard.description}
          </p>
        </div>
        <div className="backdrop-blur-md bg-[#AEBED9]/5 p-6 rounded-lg border border-[#AEBED9]/20 hover:bg-[#AEBED9]/10 transition-all duration-300">
          <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#AEBED9]">
            {t.portfolio.services.direction.title}
          </h3>
          <p className="text-[#FAF9F6]/80">
            {t.portfolio.services.direction.description}
          </p>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-montserrat mb-8 text-[#FAF9F6]">
        {t.portfolio.artistsTitle}
      </h2>
      <p className="text-lg md:text-xl text-[#FAF9F6]/80 leading-relaxed">
        {t.portfolio.artistsDescription}
      </p>
    </div>
  );
};

export default PortfolioIntro;