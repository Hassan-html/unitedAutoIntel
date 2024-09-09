"use client";
import { motion } from "framer-motion";
import NoSSRWrapper from "@/utils/NoSSRWrapper";

const WhyChooseUs = () => {
  return (
    <NoSSRWrapper>
      <div className="bg-red-600">
        <motion.section
          id="why-choose-us"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto py-16 px-6 bg-red-600 font-extrabold text-white w-full"
        >
          <h2 className="text-5xl font-extrabold my-10 text-center">
            What You Need To Know About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Section */}
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-extrabold mb-4">
                Exporters of 100% Genuine Auto Parts
              </h3>
              <p className="text-lg leading-relaxed">
                We specialize in exporting authentic auto parts for a wide range
                of brands, including:
              </p>
              <ul className="list-disc list-inside text-left">
                Toyota Nissan Isuzu Honda Ford Chevrolet MG Suzuki Mazda
                Mitsubishi Lexus Hyundai And many more...
              </ul>

              <h3 className="text-3xl font-extrabold mb-4 mt-8">
                Aftermarket Parts from Top Brands
              </h3>
              <p className="text-lg leading-relaxed">
                We supply high-quality aftermarket parts from trusted brands
                like:
              </p>
              <ul className="list-disc list-inside text-left">
                AISIN KYB DENSO RBI TOKICO KOYO NSK LUK NGK And many more...
              </ul>

              <h3 className="text-3xl font-extrabold mb-4 mt-8">
                Wholesale Only
              </h3>
              <ul className="list-disc list-inside text-left">
                <li>We handle bulk orders, no retail sales.</li>
                <li>Best value for large-scale purchases.</li>
              </ul>

              <h3 className="text-3xl font-extrabold mb-4 mt-8">
                Global Shipping Expertise
              </h3>
              <p className="text-lg leading-relaxed">
                Our extensive experience in international shipping ensures that
                your products arrive safely and on time. We provide:
              </p>
              <ul className="list-disc list-inside text-left">
                <li>Door-to-door delivery worldwide</li>
                <li>
                  Experience shipping to Saudi Arabia, Yemen, Libya, Iraq, and
                  more
                </li>
                <li>Jebel Ali Port as the main hub for reliable logistics</li>
                <li>Flexible shipping options: FCL, LCL, air cargo</li>
              </ul>

              <h3 className="text-3xl font-extrabold mb-4 mt-8">
                Efficient and Timely Delivery
              </h3>
              <p className="text-lg leading-relaxed">
                Whether by sea or air, we prioritize safe and on-time delivery
                to meet your business needs.
              </p>

              <button
                className="mt-6 px-6 py-3 bg-yellow-200 text-black rounded-lg shadow-lg transform transition-transform hover:translate-y-1 hover:shadow-2xl"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                Explore Our Products
              </button>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-fit sticky top-[100px]"
            >
              <img
                src="/images/imTPwrk.jpg"
                alt="Quality Auto Parts"
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </NoSSRWrapper>
  );
};

export default WhyChooseUs;
