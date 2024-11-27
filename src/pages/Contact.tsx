import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen w-full bg-[#121212] overflow-x-hidden">
      <Navbar />
      <div className="relative min-h-[calc(100vh-80px)] pt-20 px-4 sm:px-6 lg:px-8">
        {/* Background textures and elements */}
        <div className="fixed inset-0 overflow-hidden">
          {/* Top section gradients */}
          <div className="absolute -top-20 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-[#AEBED9]/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-40 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-[#AEBED9]/15 rounded-full blur-3xl animate-pulse delay-700" />
          
          {/* Upper middle section gradients */}
          <div className="absolute top-1/4 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tr from-[#AEBED9]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1200" />
          <div className="absolute top-1/4 -right-20 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-l from-[#AEBED9]/20 to-transparent rounded-full blur-3xl animate-pulse delay-800" />
          
          {/* Middle section gradients */}
          <div className="absolute top-1/2 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-[#AEBED9]/25 to-transparent rounded-full blur-3xl animate-pulse delay-1800" />
          <div className="absolute top-1/2 right-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-l from-[#AEBED9]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1600" />
          
          {/* Bottom section gradients */}
          <div className="absolute -bottom-40 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-[#AEBED9]/15 rounded-full blur-3xl animate-pulse delay-3200" />
          <div className="absolute -bottom-20 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tl from-[#AEBED9]/15 to-transparent rounded-full blur-3xl animate-pulse delay-3600" />
        </div>

        <div className="relative max-w-3xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 z-10">
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in mt-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF9F6]">
              {t.contact.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#FFFFFF] max-w-2xl mx-auto px-4">
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 pb-16">
            <div className="backdrop-blur-md bg-[#AEBED9]/5 p-6 sm:p-8 rounded-lg border border-[#AEBED9]/20 hover:bg-[#AEBED9]/10 transition-all duration-300">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FAF9F6] mb-4">{t.contact.email}</h2>
              <a 
                href="mailto:nesteemusicprovvidence@gmail.com" 
                className="text-xs sm:text-sm md:text-base text-[#FFFFFF] hover:text-[#AEBED9] transition-colors break-all inline-block"
              >
                nesteemusicprovvidence@gmail.com
              </a>
            </div>

            <div className="backdrop-blur-md bg-[#AEBED9]/5 p-6 sm:p-8 rounded-lg border border-[#AEBED9]/20 hover:bg-[#AEBED9]/10 transition-all duration-300">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FAF9F6] mb-4">{t.contact.phone}</h2>
              <a 
                href="tel:+46708991799" 
                className="text-xs sm:text-sm md:text-base text-[#FFFFFF] hover:text-[#AEBED9] transition-colors"
              >
                +46 708 991 799
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;