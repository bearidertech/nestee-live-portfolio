import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/5 backdrop-blur-md backdrop-saturate-150 fixed w-full top-0 z-50">
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
          <div className="md:hidden fixed left-0 right-0 top-[72px] bg-white/5 backdrop-blur-md backdrop-saturate-150 py-4 space-y-4">
            <a
              href="#work"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#about"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Link
              to="/contact"
              className="block text-[#FAF9F6] hover:text-[#AEBED9] transition-colors text-sm px-4"
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