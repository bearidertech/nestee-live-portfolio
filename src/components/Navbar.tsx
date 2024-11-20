import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/60 backdrop-blur-md backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-[#FAF9F6] font-montserrat font-bold text-lg sm:text-xl tracking-wider"
          >
            NESTEE LIVE
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FAF9F6] hover:text-[#AEBED9] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#work"
              className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm lg:text-base"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm lg:text-base"
            >
              About
            </a>
            <Link
              to="/contact"
              className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm lg:text-base"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#work"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#about"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Link
              to="/contact"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;