import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <div className="text-center py-16 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-[#FAF9F6] mb-6">
        Interested in working together?
      </h2>
      <p className="text-lg text-[#FAF9F6]/80 mb-8">
        Let's bring your live performance to life.
      </p>
      <Link
        to="/contact"
        className="cta-button inline-block bg-transparent border-2 border-[#FAF9F6] text-[#FAF9F6] px-8 py-3 rounded-full font-montserrat text-lg font-medium hover:bg-[#FAF9F6] hover:text-[#121212] transition-colors"
      >
        Get in Touch
      </Link>
    </div>
  );
};

export default PortfolioCTA;