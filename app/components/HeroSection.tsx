"use client";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Custom Arrow Components
const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-5 transform -translate-y-1/2 cursor-pointer text-primary z-10"
      onClick={onClick}
    >
      <FaArrowRight size={40} />
    </div>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] left-5 transform -translate-y-1/2 cursor-pointer text-primary z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={40} />
    </div>
  );
};

// Slide Animation Variants
const slideVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
  exit: { opacity: 0, x: "100vw", transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplayspeed: 500,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <NoSSRWrapper>
      <div className="h-screen overflow-hidden relative">
        <Slider {...settings} className="flex items-center justify-center">
          {/* Slide 1 */}
          <motion.div
            className="h-[100vh] min-h-[500px] flex w-full"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative flex h-full text-[20px] justify-evenly w-full">
              <img
                className="w-full h-full"
                src="/images/slider/SpareParts.svg"
                alt="spareParts"
              />
              <div className=" absolute z-10 top-[41%] lg:top-[30%] flex flex-col lg:gap-[10px] gap-2">
                <h1 className="text-sm font-extrabold uppercase md:text-[40px] lg:text-[70px] text-center justify-center items-center">
                  United Autos
                </h1>
                <p className="text-center text-highlight text-opacity-75 font-bold lg:mt-[20px] lg:text-[40px]">
                  WholeSale Auto Parts Delears
                </p>
                <p className="text-primary text-center">
                  Providing quality parts to our customers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            className="h-[100vh] min-h-[500px] flex w-full"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative flex h-full text-[20px] justify-evenly w-full">
              <img
                className="w-full h-full"
                src="/images/slider/genuine.svg"
                alt="spareParts"
              />
              <div className=" absolute z-10 top-[40%] lg:top-[45%] flex flex-col lg:gap-[10px] gap-2">
                <h1 className="text-sm font-extrabold uppercase md:text-[40px] lg:text-[50px] text-center text-wrap">
                  Genuine & After Market Parts
                </h1>
                <p className="text-center text-highlight text-opacity-75 font-bold lg:mt-[20px] lg:text-[40px]">
                  WholeSale Auto Parts Delears
                </p>
                <p className="text-primary text-center">
                  Providing quality parts to our customers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Slide 3 */}
          <motion.div
            className="h-[100vh] min-h-[500px] flex w-full"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative flex h-full text-[20px] justify-evenly w-full">
              <img
                className="w-full h-full"
                src="/images/slider/export.svg"
                alt="spareParts"
              />
              <div className=" absolute z-10 top-[40%] lg:top-[35%] flex flex-col lg:gap-[10px] gap-2 bg-white h-fit p-10">
                <h1 className="text-sm font-extrabold uppercase md:text-[40px] lg:text-[50px] text-center text-wrap">
                  Exporting in number of gulf Countries
                </h1>
                <p className="text-center text-highlight text-opacity-75 font-bold lg:mt-[20px] lg:text-[40px]">
                  WholeSale Auto Parts Delears
                </p>
                <p className="text-primary text-center">
                  Providing quality parts to our customers.
                </p>
              </div>
            </div>
          </motion.div>
        </Slider>
      </div>
    </NoSSRWrapper>
  );
};

export default HeroSection;
