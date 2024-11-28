import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="bg-white/5 backdrop-blur-md backdrop-saturate-150 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-[#FAF9F6] font-montserrat font-bold text-lg sm:text-xl tracking-wider"
            >
              NESTEE LIVE
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm lg:text-base"
              >
                {t.nav.home}
              </Link>
              <Link
                to="/work"
                className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm lg:text-base"
              >
                {t.nav.work}
              </Link>
              <Link
                to="/contact"
                className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm lg:text-base"
              >
                {t.nav.contact}
              </Link>
              <LanguageSwitcher />
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#FAF9F6] hover:text-[#AEBED9] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 top-[72px] bg-white/5 backdrop-blur-md backdrop-saturate-150 py-4 space-y-4">
            <Link
              to="/"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/work"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.work}
            </Link>
            <Link
              to="/contact"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;