"use client";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
  };

  return (
    <NoSSRWrapper>
      <div className="h-screen overflow-hidden">
        <Slider className="  flex items-center justify-center" {...settings}>
          <div className="relative flex items-center   bg-black justify-center h-screen bg-cover bg-center overflow-hidden ">
            <div className="flex h-full justify-center items-center flex-col text-white p-10 bg-opacity-50 rounded-lg z-[20] text-center">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[20px] font-extrabold  z-20"
                style={{ letterSpacing: "10px" }}
              >
                United Auto Intel
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -1000 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[100px] font-extrabold mb-1 z-20 "
              >
                Unleash the Power
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 1000 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl z-20"
              >
                Experience unmatched performance with our premium auto parts.
              </motion.p>
              <motion.button className="flex gap-2 items-center rounded-lg p-5 text-white bg-highlight hover:bg-primary z-20 w-fit mt-10">
                <span>Explore</span> <FaArrowRight />
              </motion.button>
            </div>
            <Image
              src={`/images/slider/carspareparts.jpeg`}
              fill
              alt="There supposed to be an image here"
              className="z-0 "
            />
          </div>
          <div className="relative flex items-center   bg-black justify-center h-screen bg-cover bg-center overflow-hidden">
            <div className="flex h-full justify-center items-center flex-col text-white p-10 bg-opacity-50 rounded-lg z-[20] text-center">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[20px] font-extrabold  z-20"
                style={{ letterSpacing: "10px" }}
              >
                United Auto Intel
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -1000 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[100px] font-extrabold mb-1 z-20 "
              >
                Unleash the Power
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 1000 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl z-20"
              >
                Experience unmatched performance with our premium auto parts.
              </motion.p>
              <motion.button className="flex gap-2 items-center rounded-lg p-5 text-white bg-highlight hover:bg-primary z-20 w-fit mt-10">
                <span>Explore</span> <FaArrowRight />
              </motion.button>
            </div>
            <Image
              src={`/images/slider/img1.webp`}
              fill
              alt="There supposed to be an image here"
              className="z-0 "
            />
          </div>
          {/* Repeat for other slides */}
        </Slider>
      </div>
    </NoSSRWrapper>
  );
};

export default HeroSection;
