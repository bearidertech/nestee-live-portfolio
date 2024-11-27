import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";

const CustomerReview = () => {
  const { language } = useLanguage();

  const reviews = [
    {
      name: "Marcus Johansson",
      role: language === "sv" ? "Turnéledare" : "Tour Manager",
      review: {
        sv: "Ett fantastiskt samarbete med ett professionellt team som verkligen förstår live-musik. Deras arrangemang lyfte hela showen till en ny nivå.",
        en: "An amazing collaboration with a professional team that truly understands live music. Their arrangements elevated the entire show to a new level.",
      },
      rating: 5,
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080",
    },
    {
      name: "Sofia Andersson",
      role: language === "sv" ? "Produktionsassistent" : "Production Assistant",
      review: {
        sv: "Deras tekniska kompetens och musikaliska förståelse gjorde hela produktionsprocessen smidig och resultatet blev enastående.",
        en: "Their technical expertise and musical understanding made the entire production process smooth, and the result was outstanding.",
      },
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2087",
    },
  ];

  return (
    <div className="py-12 animate-fade-in">
      <h2 className="text-3xl font-montserrat font-bold mb-8">
        {language === "sv" ? "Vad Jireels team säger" : "What Jireel's team says"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-6 rounded-lg border border-[#AEBED9]/20 hover:border-[#AEBED9]/40 transition-colors"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-montserrat font-semibold text-lg">
                  {review.name}
                </h3>
                <p className="text-[#AEBED9]">{review.role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#AEBED9] text-[#AEBED9]"
                />
              ))}
            </div>
            <p className="text-[#FAF9F6]/80 leading-relaxed">
              {language === "sv" ? review.review.sv : review.review.en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;