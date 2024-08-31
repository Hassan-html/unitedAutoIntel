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
    autoplay: true,
    autoplaySpeed: 6000,
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
            <div className="flex h-full text-[20px] justify-evenly w-full">
              <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left text-[20px] w-full p-20">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="font-extrabold text-[30px] md:text-[50px] lg:text-[60px] mb-5"
                >
                  Your Trusted Partner in
                  <br /> Quality Auto Parts
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="text-red-600 mb-5 font-bold text-[18px] md:text-[24px] lg:text-[28px]"
                >
                  "Genuine and Aftermarket Parts for Every Vehicle, Every Need"
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.4 }}
                  className="max-w-[450px] mb-5 text-[14px] md:text-[18px] lg:text-[20px]"
                >
                  At United Auto, we specialize in providing a comprehensive
                  range of genuine and aftermarket auto parts at competitive
                  wholesale prices.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.6 }}
                  className="w-fit bg-red-600 p-4 md:p-5 text-white hover:bg-primary rounded-full shadow-lg transition-all duration-300 ease-in-out text-[14px] md:text-[18px]"
                >
                  Explore Our Inventory
                </motion.button>
              </div>
              <motion.div
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative h-full w-[50%] hidden md:flex"
              >
                <div
                  className="absolute h-full w-full"
                  style={{
                    backgroundImage: "url(/images/slider/img6.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.8)",
                  }}
                ></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            className="relative flex items-center justify-center h-screen overflow-hidden bg-[url('/images/slider/img1.jpg')] bg-cover bg-center"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex h-full justify-center items-center flex-col text-white p-10 bg-opacity-50 rounded-lg z-[20] text-center w-full">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[30px] md:text-[40px] lg:text-[50px] font-extrabold z-20"
                style={{ letterSpacing: "5px" }}
              >
                United Auto
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[20px] md:text-[40px] lg:text-[60px] font-extrabold mb-1 z-20"
                style={{ textShadow: "5px 5px 0px black" }}
              >
                Delivering Quality Auto Parts Worldwide
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[16px] md:text-[20px] z-20"
              >
                Experience unmatched performance with our premium auto parts.
              </motion.p>
              <motion.button className="flex gap-2 items-center rounded-lg p-4 md:p-5 text-white bg-highlight hover:bg-primary z-20 w-fit mt-10 text-[14px] md:text-[18px]">
                <span>Explore</span> <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>

          {/* Slide 3 */}
          <motion.div
            className="relative flex items-center justify-center h-screen overflow-hidden bg-[url('/images/carRed.jpg')] bg-cover bg-center"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex h-full justify-center items-center flex-col text-white p-10 bg-opacity-50 rounded-lg z-[20] text-center">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[20px] md:text-[40px] lg:text-[30px] font-extrabold z-20"
                style={{ letterSpacing: "5px" }}
              >
                Speed and Precision <br />
                <span
                  className="text-[30px] md:text-[50px] lg:text-[70px] font-extrabold mb-1 z-20"
                  style={{ textShadow: "5px 5px 0px black" }}
                >
                  Performance Parts for Your Vehicle
                </span>
                <br />
                <span>
                  Enhance your driving experience with our high-performance
                  parts.
                </span>
              </motion.h1>

              <motion.button className="flex gap-2 items-center rounded-lg p-4 md:p-5 text-white bg-highlight hover:bg-primary z-20 w-fit mt-10 text-[14px] md:text-[18px]">
                <span>See Our Products</span> <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>

          {/* Slide 4 */}
          <motion.div className="relative flex items-center justify-center h-screen overflow-hidden  bg-[url('/images/carRed.jpg')] bg-cover bg-center">
            <div className="flex h-full justify-center items-center flex-col text-white p-10 bg-opacity-50 rounded-lg z-[20] text-center">
              <motion.h1
                className="text-[20px] md:text-[40px] lg:text-[50px] font-extrabold z-20"
                style={{ letterSpacing: "5px" }}
              >
                Visit Us
              </motion.h1>
              <motion.h1
                className="text-[30px] md:text-[50px] lg:text-[70px] font-extrabold mb-1 z-20"
                style={{ textShadow: "5px 5px 0px black" }}
              >
                303 al sanabil - Naif - Dubai - United Arab Emirates
              </motion.h1>
              <motion.p className="text-[16px] md:text-[20px] z-20">
                Reach us at info@unitedautointl.com | +971558981016
              </motion.p>
              <motion.button className="flex gap-2 items-center rounded-lg p-4 md:p-5 text-white bg-highlight hover:bg-primary z-20 w-fit mt-10 text-[14px] md:text-[18px]">
                <span>Get Directions</span> <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </Slider>
      </div>
    </NoSSRWrapper>
  );
};

export default HeroSection;
