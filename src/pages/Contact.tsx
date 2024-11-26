import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212] overflow-hidden">
      <Navbar />
      <div className="relative pt-20 px-4 sm:px-6 lg:px-8">
        {/* Background textures and elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#AEBED9]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#AEBED9]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-[#AEBED9]/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative max-w-3xl mx-auto space-y-16 md:space-y-20 z-10">
          {/* Header Section */}
          <div className="text-center space-y-4 md:space-y-6 animate-fade-in mt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF9F6]">
              Let's Connect
            </h1>
            <p className="text-base md:text-lg text-[#FFFFFF] max-w-2xl mx-auto px-4">
              Ready to collaborate? Reach out directly through email or phone—I'm excited to hear from you.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 pb-16">
            {/* Email Card */}
            <div className="backdrop-blur-md bg-[#AEBED9]/5 p-8 rounded-lg border border-[#AEBED9]/20 hover:bg-[#AEBED9]/10 transition-all duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#FAF9F6] mb-4">Email</h2>
              <a 
                href="mailto:nesteemusicprovvidence@gmail.com" 
                className="text-sm md:text-base text-[#FFFFFF] hover:text-[#AEBED9] transition-colors break-all inline-block"
              >
                nesteemusicprovvidence@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="backdrop-blur-md bg-[#AEBED9]/5 p-8 rounded-lg border border-[#AEBED9]/20 hover:bg-[#AEBED9]/10 transition-all duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#FAF9F6] mb-4">Phone</h2>
              <a 
                href="tel:+46708991799" 
                className="text-sm md:text-base text-[#FFFFFF] hover:text-[#AEBED9] transition-colors"
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