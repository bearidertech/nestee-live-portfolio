import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-[#FAF9F6] font-montserrat font-bold text-xl tracking-wider"
          >
            NESTEE LIVE
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#work"
              className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#FAF9F6] hover:text-[#AEBED9] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;