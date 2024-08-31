"use client";
import FlipCard from "@/app/components/FlipCard";

const FlipCardSection = () => {
  const items = [
    { imageSrc: "/images/carLogos/Honda2.png", name: "Honda" },
    { imageSrc: "/images/carLogos/nisan.png", name: "nisan" },
    { imageSrc: "/images/carLogos/tyota2.png", name: "Toyota" },
    { imageSrc: "/images/carLogos/mazda.png", name: "mazda" },
    { imageSrc: "/images/carLogos/ford.png", name: "Ford" },
    { imageSrc: "/images/carLogos/tokico.png", name: "tokico" },
    { imageSrc: "/images/carLogos/aisin.png", name: "aisin" },
    { imageSrc: "/images/carLogos/denso.png", name: "denso" },
    { imageSrc: "/images/carLogos/kyb.png", name: "kyb" },
    { imageSrc: "/images/carLogos/monroe.png", name: "monroe" },
    { imageSrc: "/images/carLogos/bembo.png", name: "bembo" },
    { imageSrc: "/images/carLogos/rbi.png", name: "rbi" },
    { imageSrc: "/images/carLogos/luk.png", name: "luk" },
    { imageSrc: "/images/carLogos/ngk.png", name: "ngk" },
    { imageSrc: "/images/carLogos/ina.png", name: "ina" },
    { imageSrc: "/images/carLogos/exedy.png", name: "exedy" },
    { imageSrc: "/images/carLogos/sachs.png", name: "sachs" },
    { imageSrc: "/images/carLogos/osrm.png", name: "osrm" },
  ];

  return (
    <section className="bg-lightGray py-16">
      <h2 className="text-5xl font-extrabold text-center mt-10 uppercase">
        geniune & after market parts
      </h2>
      <h1 className="uppercase text-lg  text-center mt-5 mb-20 ">
        "Supplying globaly"
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {items.map((item, index) => (
          <FlipCard key={index} imageSrc={item.imageSrc} name={item.name} />
        ))}
      </div>
    </section>
  );
};

export default FlipCardSection;
