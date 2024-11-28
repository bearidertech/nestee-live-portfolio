import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2 md:space-x-2 fixed bottom-6 right-6 md:static z-50 bg-black/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-2 md:p-0 rounded-full md:rounded-none">
      <button
        onClick={() => setLanguage("sv")}
        className={`px-4 md:px-3 py-2 md:py-1 rounded-full text-sm font-medium transition-colors ${
          language === "sv"
            ? "bg-[#AEBED9] text-[#121212]"
            : "text-[#AEBED9] hover:bg-[#AEBED9]/10"
        }`}
      >
        SWE
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 md:px-3 py-2 md:py-1 rounded-full text-sm font-medium transition-colors ${
          language === "en"
            ? "bg-[#AEBED9] text-[#121212]"
            : "text-[#AEBED9] hover:bg-[#AEBED9]/10"
        }`}
      >
        ENG
      </button>
    </div>
  );
};

export default LanguageSwitcher;