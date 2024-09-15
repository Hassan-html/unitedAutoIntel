"use client";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import Slider from "react-slick";
import { motion } from "framer-motion";

const CompanyLogos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // Adjust this for speed of scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scroll
    cssEase: "linear", // Smooth linear transition
    pauseOnHover: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 2000, // Adjust this for speed of scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scroll
    cssEase: "linear", // Smooth linear transition
    pauseOnHover: false,
    rtl: true,
  };
  const shuffledLogos = [
    "Honda2.png",
    "nisan.png",
    "tyota2.png",
    "mazda.png",
    "ford.png",
    "tokico.png",
    "Aisin.png",
    "denso.png",
    "kyb.png",
    "monroe.png",
    "bembo.png",
    "rbi.png",
    "luk.png",
    "ngk.png",
    "ina.png",
    "exedy.png",
    "sachs.png",
    "osrm.png",
  ];

  return (
    <>
      <motion.section
        className="mt-[100px]"
        id="company-logos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <Slider {...settings}>
            {shuffledLogos.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=" h-fit w-fit flex items-center justify-center"
              >
                <img src={`/images/carLogos/${item}`} alt="logo" width="70px" />
              </motion.div>
            ))}
          </Slider>
          <Slider {...settings2}>
            {shuffledLogos.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=" h-fit w-fit flex items-center justify-center"
              >
                <img src={`/images/carLogos/${item}`} alt="logo" width="70px" />
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.section>
    </>
  );
};

export default CompanyLogos;
