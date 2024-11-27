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
    services: ["Live Music Arrangement", "Keyboard Performance"],
    description:
      "Provided live music arrangements and keyboard performances, bringing a unique blend of musical expertise to enhance the live show experience.",
    image: "/kdpLive.png",
  },
  {
    name: "Cheryl Porter",
    country: "USA",
    services: ["Keyboard Performance"],
    description:
      "Delivered soulful keyboard performances that complemented Cheryl Porter's powerful gospel vocals, creating memorable live experiences.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070",
  },
  {
    name: "Dani M",
    country: "Sweden",
    services: ["Live Music Arrangement"],
    description:
      "Created dynamic live music arrangements that transformed studio tracks into engaging live performances, elevating the concert experience.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
  },
  {
    name: "Jireel",
    country: "Sweden",
    services: ["Live Music Arrangement", "Music Direction", "Keyboard Performance"],
    description:
      "Provided comprehensive musical support including arrangements, direction, and keyboard performance, ensuring a cohesive and professional live show experience.",
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
