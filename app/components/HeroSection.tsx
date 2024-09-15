"use client";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AnimatedButton from "@/app/components/AnimatedButton"; // Import the Animated Button component

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
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
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
            <div className="relative flex h-full justify-evenly w-full">
              <img
                className=" h-full"
                src="/images/slider/sparePartsOrignal.jpeg"
                alt="spareParts"
              />
              <div className="absolute bg-white bg-opacity-80 w-full md:w-auto p-8 rounded-lg z-10 top-[45%] md:top-[30%] flex flex-col items-center">
                <h1 className="text-4xl md:text-[70px] font-bold text-center text-primary uppercase mb-2 md:mb-6">
                  United Auto
                </h1>
                <p className="text-highlight text-lg md:text-[40px] font-bold mb-2">
                  Wholesale Auto Parts Dealers
                </p>
                <p className="text-primary text-center mb-4 md:mb-6">
                  Providing quality parts to our customers.
                </p>
                {/* Animated Button */}
                <AnimatedButton onClick={() => window.scrollTo(0, 500)}>
                  Explore Products
                </AnimatedButton>
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
            <div className="relative flex h-full justify-evenly w-full">
              <img
                className=" h-full"
                src="/images/slider/genuineOrignal.jpeg"
                alt="spareParts"
              />
              <div className="absolute bg-white bg-opacity-80 w-full md:w-auto p-8 rounded-lg z-10 top-[45%] md:top-[40%] flex flex-col items-center">
                <h1 className="text-4xl md:text-[50px] font-bold text-center text-primary uppercase mb-2 md:mb-4">
                  Genuine & AfterMarket Parts
                </h1>
                <p className="text-highlight text-lg md:text-[40px] font-bold mb-2">
                  Wholesale Auto Parts Dealers
                </p>
                <p className="text-primary text-center mb-4 md:mb-6">
                  Providing quality parts to our customers.
                </p>
                {/* Animated Button */}
                <AnimatedButton onClick={() => window.scrollTo(0, 800)}>
                  Learn More
                </AnimatedButton>
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
            <div className="relative flex h-full justify-evenly w-full">
              <img
                className=" h-full"
                src="/images/slider/export.svg"
                alt="spareParts"
              />
              <div className="absolute bg-white bg-opacity-80 w-full md:w-auto p-8 rounded-lg z-10 top-[45%] md:top-[35%] flex flex-col items-center">
                <h1 className="text-4xl md:text-[50px] font-bold text-center text-primary uppercase mb-2 md:mb-4">
                  Exporting in Gulf Countries
                </h1>
                <p className="text-highlight text-lg md:text-[40px] font-bold mb-2">
                  Wholesale Auto Parts Dealers
                </p>
                <p className="text-primary text-center mb-4 md:mb-6">
                  Providing quality parts to our customers.
                </p>
                {/* Animated Button */}
                <AnimatedButton onClick={() => window.scrollTo(0, 1000)}>
                  Contact Us
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </Slider>
      </div>
    </>
  );
};

export default HeroSection;
