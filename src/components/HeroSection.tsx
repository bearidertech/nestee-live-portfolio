import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070')",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedText
          text="MUSICAL DIRECTOR"
          className="text-xs sm:text-sm font-montserrat tracking-[0.2em] sm:tracking-[0.3em] text-[#AEBED9] mb-3 sm:mb-4"
          delay={200}
        />
        <AnimatedText
          text="Crafting Unforgettable Live Music Experiences"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-montserrat font-bold mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight"
          delay={400}
        />
        <AnimatedText
          text="Bringing your musical vision to life with precision and passion"
          className="text-base sm:text-lg md:text-xl text-[#FAF9F6]/80 mb-6 sm:mb-8 max-w-2xl mx-auto"
          delay={600}
        />
        <AnimatedText
          text={
            <button className="cta-button bg-transparent border-2 border-[#FAF9F6] text-[#FAF9F6] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-montserrat text-sm sm:text-base font-medium hover:bg-[#FAF9F6] hover:text-[#121212] transition-colors">
              Discover My Work
            </button>
          }
          delay={800}
        />
      </div>
    </div>
  );
};

export default HeroSection;