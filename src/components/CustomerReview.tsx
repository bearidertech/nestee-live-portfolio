import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";

const CustomerReview = () => {
  const { language } = useLanguage();

  const reviews = [
    {
      name: "Moty Team",
      role: language === "sv" ? "Jireels Core team" : "Jireel's Core team",
      review: {
        sv: `"Det är ett nöje att samarbeta med Nestee Live. För artister som vill ta sina liveshow till nästa nivå är de rätt personer att kontakta."`,
        en: `"It's a pleasure collaborating with Nestee Live. For artists who want to take their live shows to the next level, they are the right people to reach out for."`,
      },
      rating: 5,
      image: "/moty.png",
    },
    {
      name: "Keys The Prince",
      role: language === "sv" ? "Artist" : "Artist",
      review: {
        sv: `"Bästa Live Programmeraren i branschen"`,
        en: `"Best Live Programmer in the game"`,
      },
      rating: 5,
      image: "/kdp.png",
    },
    {
      name: "Albi X",
      role: language === "sv" ? "Artist" : "Artist",
      review: {
        sv: `"Detta är de typer av liveupplevelser jag drömde om för mina shower"`,
        en: `"These are the types of live experiences I dreamed for my shows"`,
      },
      rating: 5,
      image: "/ax.png",
    },
    {
      name: "Vala Esfahanian",
      role: language === "sv" ? "United Stage" : "United Stage",
      review: {
        sv: `"Fantastiskt att jobba med Nestee Live"`,
        en: `"Great Working with Nestee Live"`,
      },
      rating: 5,
      image: "/us.png",
    },
  ];

  return (
    <div className="py-12 animate-fade-in">
      <h2 className="text-3xl font-montserrat font-bold mb-8">
        {language === "sv" ? "Vad våra kunder säger" : "What our customers say"}
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
                className="w-14 h-14 rounded-full object-cover object-center scale-75"
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