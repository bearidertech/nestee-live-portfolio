const PortfolioIntro = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-[#FAF9F6]">
        Portfolio
      </h1>
      <h2 className="text-2xl md:text-3xl font-montserrat mb-8 text-[#FAF9F6]">
        The services we offer are:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#AEBED9]">
            Live Music Arrangements
          </h3>
          <p className="text-[#FAF9F6]/80">
            Custom arrangements tailored to enhance your live performances and create unique musical experiences.
          </p>
        </div>
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#AEBED9]">
            Session Programming
          </h3>
          <p className="text-[#FAF9F6]/80">
            Professional live session programming to bring your studio tracks to life on stage.
          </p>
        </div>
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#AEBED9]">
            Keyboard Performance
          </h3>
          <p className="text-[#FAF9F6]/80">
            Expert keyboard playing that adds depth and richness to your live shows.
          </p>
        </div>
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#AEBED9]">
            Music Direction
          </h3>
          <p className="text-[#FAF9F6]/80">
            Comprehensive music direction services to ensure flawless live performances and show coordination.
          </p>
        </div>
      </div>
      <p className="text-lg md:text-xl text-[#FAF9F6]/80 leading-relaxed">
        We've had the privilege of collaborating with incredible artists from around the world, 
        crafting unforgettable live performances that leave lasting impressions.
      </p>
    </div>
  );
};

export default PortfolioIntro;