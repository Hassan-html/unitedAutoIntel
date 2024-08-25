"use client";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Great service and quality products. United Auto Intl is our go-to for auto parts! Their team consistently delivers high-quality service and ensures we always get the parts we need on time. I've been a loyal customer for years, and I can't recommend them enough. If you're looking for reliable and affordable auto parts, United Auto Intl is the place to go!",
    author: "Customer A",
    date: "2024-08-20",
    rating: 5,
    picture: "/images/customerA.jpg",
  },
  {
    text: "Reliable and affordable. I've been a loyal customer for years. United Auto Intl provides exceptional service and their products are always top-notch. Whenever I need spare parts, I know I can count on them to deliver quickly and efficiently. Their customer support is also excellent, and I always feel valued as a customer.",
    author: "Customer B",
    date: "2024-08-18",
    rating: 4,
    picture: "/images/customerB.jpg",
  },
  {
    text: "Excellent customer support and fast delivery. Highly recommend! The staff at United Auto Intl are knowledgeable and always go the extra mile to help. Their wide range of products means I can always find what I need, and the quality of their parts is consistently high. I appreciate their attention to detail and commitment to customer satisfaction.",
    author: "Customer C",
    date: "2024-08-17",
    rating: 5,
    picture: "/images/customerC.jpg",
  },
  {
    text: "Great value for money and the staff are very helpful. United Auto Intl offers a great selection of parts at competitive prices, and their customer service is second to none. I've had nothing but positive experiences with them and would highly recommend them to anyone in need of auto parts.",
    author: "Customer D",
    date: "2024-08-15",
    rating: 4,
    picture: "/images/customerD.jpg",
  },
  {
    text: "Impressed with the variety and quality of parts available. United Auto Intl has become my go-to supplier for all my auto parts needs. Their products are always of the highest quality, and their service is exceptional. I appreciate the peace of mind that comes with knowing I'm getting genuine parts at a fair price.",
    author: "Customer E",
    date: "2024-08-10",
    rating: 5,
    picture: "/images/customerE.jpg",
  },
];

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white bg-primary rounded-full shadow-lg"
    >
      <FaArrowLeft />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white bg-primary rounded-full shadow-lg"
    >
      <FaArrowRight />
    </button>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          bottom: "-40px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "gray",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  return (
    <NoSSRWrapper>
      <motion.section
        id="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-16"
      >
        <h2 className="text-3xl font-bold text-center mt-8 mb-2 uppercase">
          Testimonials
        </h2>
        <h2 className="text-lg font-bold text-center mb-10 uppercase">
          Here's what our customer think about us
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg relative mx-3"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.picture}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </Slider>
      </motion.section>
    </NoSSRWrapper>
  );
};

export default Testimonials;
