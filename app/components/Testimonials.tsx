"use client";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    text: "United Auto is our go-to for auto parts! They deliver high-quality service and ensure timely deliveries. I've been a loyal customer for years, and I can't recommend them enough.",
    author: "Ahmed Khan",
    date: "2024-08-20",
    rating: 5,
    picture: "/images/customer/person1.png",
  },
  {
    text: "Reliable and affordable. United Auto always provides exceptional service and top-notch products. Their customer support is excellent, and I always feel valued.",
    author: "Fatima Ali",
    date: "2024-08-18",
    rating: 4,
    picture: "/images/customer/person2.png",
  },
  {
    text: "Excellent customer support and fast delivery. Highly recommend! The staff at United Auto are knowledgeable and always go the extra mile to help.",
    author: "Omar Hassan",
    date: "2024-08-17",
    rating: 5,
    picture: "/images/customer/person3.png",
  },
  {
    text: "Great value for money. United Auto offers a great selection of parts at competitive prices. I've had nothing but positive experiences with them.",
    author: "Sara Sheikh",
    date: "2024-08-15",
    rating: 4,
    picture: "/images/customer/person4.png",
  },
  {
    text: "Impressed with the variety and quality of parts. United Auto has become my go-to supplier for all my auto parts needs. Their service is exceptional.",
    author: "HSN",
    date: "2024-08-10",
    rating: 5,
    picture: "/images/customer/person.webp",
  },
  {
    text: "خدمات ممتازة وتسليم سريع. أوتوماتيك المتحدة توفر أفضل قطع الغيار بأسعار مناسبة. أوصي بهم بشدة.",
    author: "محمد بن خالد",
    date: "2024-08-08",
    rating: 5,
    picture: "/images/customer/person6.png",
  },
  {
    text: "بہترین سروس اور معیاری مصنوعات۔ یونائٹڈ آٹو ہمیشہ میری توقعات سے بڑھ کر آتی ہے۔",
    author: "ندیم ارشد",
    date: "2024-08-05",
    rating: 5,
    picture: "/images/customer/person7.png",
  },
  {
    text: "United Auto is ممتاز in providing quality parts. I have been using their services for over a year now, and I am very satisfied.",
    author: "Aisha Ahmed",
    date: "2024-08-03",
    rating: 4,
    picture: "/images/customer/person8.png",
  },
  {
    text: "خدمة رائعة وأسعار منافسة. أنا راضٍ جدًا عن تجربتي مع يونيتد أوتو.",
    author: "عبد الله العتيبي",
    date: "2024-07-30",
    rating: 4,
    picture: "/images/customer/person9.png",
  },
  {
    text: "یونائٹڈ آٹو نے میری گاڑی کے لئے بہترین پارٹس فراہم کیں۔ ان کی ٹیم بہت مددگار ہے اور ہمیشہ وقت پر ڈیلیوری کرتی ہے۔",
    author: "زبیر خان",
    date: "2024-07-28",
    rating: 5,
    picture: "/images/customer/person10.png",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Remove controllers
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <div
        style={{
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
        className="container mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <SectionHeading
          title="Testimonials"
          subtitle="Here's what our customers think about us"
        />

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-xl relative mx-3 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
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
