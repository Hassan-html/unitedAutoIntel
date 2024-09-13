"use client";
import FlipCard from "@/app/components/FlipCard";
import SectionHeading from "@/app/components/SectionHeading"; // Section Heading Component

const FlipCardSection = () => {
  const items = [
    { imageSrc: "/images/carLogos/Honda2.png", name: "Honda" },
    { imageSrc: "/images/carLogos/hyundai.png", name: "Hyundai" },
    { imageSrc: "/images/carLogos/lexus.png", name: "Lexus" },
    { imageSrc: "/images/carLogos/mitsubishi.png", name: "Mitsubishi" },
    { imageSrc: "/images/carLogos/suzuki.png", name: "Suzuki" },
    { imageSrc: "/images/carLogos/mg.png", name: "MG" },
    { imageSrc: "/images/carLogos/chevrolet.png", name: "Chevrolet" },
    { imageSrc: "/images/carLogos/isuzu.png", name: "Isuzu" },
    { imageSrc: "/images/carLogos/nisan.png", name: "Nissan" },
    { imageSrc: "/images/carLogos/tyota2.png", name: "Toyota" },
    { imageSrc: "/images/carLogos/mazda.png", name: "Mazda" },
    { imageSrc: "/images/carLogos/ford.png", name: "Ford" },
    { imageSrc: "/images/carLogos/tokico.png", name: "Tokico" },
    { imageSrc: "/images/carLogos/Aisin.png", name: "Aisin" },
    { imageSrc: "/images/carLogos/denso.png", name: "Denso" },
    { imageSrc: "/images/carLogos/kyb.png", name: "KYB" },
    { imageSrc: "/images/carLogos/monroe.png", name: "Monroe" },
    { imageSrc: "/images/carLogos/bembo.png", name: "Bembo" },
    { imageSrc: "/images/carLogos/rbi.png", name: "RBI" },
    { imageSrc: "/images/carLogos/luk.png", name: "LUK" },
    { imageSrc: "/images/carLogos/ngk.png", name: "NGK" },
    { imageSrc: "/images/carLogos/ina.png", name: "INA" },
    { imageSrc: "/images/carLogos/exedy.png", name: "Exedy" },
    { imageSrc: "/images/carLogos/sachs.png", name: "Sachs" },
    { imageSrc: "/images/carLogos/osrm.png", name: "OSRM" },
  ];

  return (
    <section className="bg-lightGray py-16">
      {/* Enhanced Section Heading */}
      <SectionHeading
        title="Genuine & After Market Parts"
        subtitle='"Supplying Globally"'
      />

      {/* Flip Card Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {items.map((item, index) => (
          <FlipCard key={index} imageSrc={item.imageSrc} name={item.name} />
        ))}
      </div>
    </section>
  );
};

export default FlipCardSection;
