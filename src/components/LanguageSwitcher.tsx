import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLanguage("sv")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === "sv"
            ? "bg-[#AEBED9] text-[#121212]"
            : "text-[#AEBED9] hover:bg-[#AEBED9]/10"
        }`}
      >
        SWE
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
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