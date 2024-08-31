"use client";
import { motion } from "framer-motion";
import NoSSRWrapper from "@/utils/NoSSRWrapper";

const WhyChooseUs = () => {
  return (
    <NoSSRWrapper>
      <motion.section
        id="why-choose-us"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-16 px-6 "
      >
        <h2 className="text-5xl font-extrabold  my-10 text-center">
          What You Need To Know About Us ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">
              Unmatched Quality and Service
            </h3>
            <p className="text-lg leading-relaxed">
              At United Autos, we pride ourselves on offering only the highest
              quality auto spare parts. Our extensive selection is carefully
              sourced from top manufacturers to ensure maximum reliability and
              durability for your vehicle.
            </p>
            <p className="text-lg leading-relaxed">
              Our commitment to excellence is reflected in our exceptional
              customer service, ensuring that you get the right parts when you
              need them, with the support you deserve.
            </p>
            <ul className="list-disc list-inside text-left ">
              <li>Wide range of premium spare parts</li>
              <li>Trusted by thousands of customers across Dubai</li>
              <li>Expert advice and support from automotive specialists</li>
              <li>Competitive pricing with no compromise on quality</li>
              <li>Fast and reliable delivery services</li>
            </ul>
            <button
              className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg transform transition-transform hover:translate-y-1 hover:shadow-2xl"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              Explore Our Products
            </button>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-fit"
          >
            <img
              src="/images/imTPwrk.jpg"
              alt="Quality Auto Parts"
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </motion.section>
    </NoSSRWrapper>
  );
};

export default WhyChooseUs;
