import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Artist {
  name: string;
  country: string;
  services: string[];
  description: string;
  image: string;
}

const artists: Artist[] = [
  {
    name: "Keys The Prince",
    country: "UK",
    services: ["Live Music Arrangement", "Music Direction"],
    description:
      "Arranged live music and provided music direction for a series of electrifying performances across the UK, collaborating closely to enhance the energy of the live show.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070",
  },
  {
    name: "Cheryl Porter",
    country: "USA",
    services: ["Live Session Programming", "Keyboard"],
    description:
      "Worked on live session programming and keyboard accompaniment, bringing a soulful atmosphere to Cheryl Porter's live gospel performances.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070",
  },
  {
    name: "Dani M",
    country: "Sweden",
    services: ["Music Direction", "Live Arrangement"],
    description:
      "Directed live shows, including musical arrangements and rehearsals, ensuring a seamless and engaging performance for audiences.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
  },
  {
    name: "Jireel",
    country: "Sweden",
    services: ["Live Music Arrangement", "Music Direction"],
    description:
      "Crafted 26 unique live music arrangements and directed multiple performances to maintain consistent quality across Jireel's shows.",
    image:
      "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=2070",
  },
];

const ArtistGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
      {artists.map((artist, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in">
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${artist.image})` }}
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end transform transition-transform duration-300 hover:bg-black/80">
                <h3 className="text-xl font-montserrat font-bold text-[#FAF9F6] mb-2">
                  {artist.name} ({artist.country})
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {artist.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-[#AEBED9]/20 text-[#AEBED9] px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-[#121212] text-[#FAF9F6] border-[#AEBED9]/20">
            <div className="p-4">
              <h2 className="text-2xl font-montserrat font-bold mb-4">
                {artist.name} ({artist.country})
              </h2>
              <div
                className="w-full aspect-video bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${artist.image})` }}
              />
              <p className="text-[#FAF9F6]/80 mb-4">{artist.description}</p>
              <div className="flex flex-wrap gap-2">
                {artist.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-[#AEBED9]/20 text-[#AEBED9] px-3 py-1 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ArtistGrid;