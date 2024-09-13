"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaTruck, FaTools, FaShippingFast } from "react-icons/fa"; // Using icons as examples

const WhyChooseUs = () => {
  return (
    <>
      <motion.section
        id="why-choose-us"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-20 px-6 w-full bg-gradient-to-r from-gray-50 to-gray-100"
      >
        {/* New Section Heading */}
        <SectionHeading
          title="Why Choose Us"
          subtitle="Your trusted partner for 100% genuine and aftermarket auto parts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Section with Icons */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="flex items-start space-x-4">
              <FaTools className="text-textPrimary text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-textPrimary mb-2">
                  Exporters of 100% Genuine Auto Parts
                </h3>
                <p className="text-base text-textSecondary">
                  We specialize in exporting authentic auto parts for a wide
                  range of brands, including Toyota, Nissan, Honda, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaTruck className="text-textPrimary text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-textPrimary mb-2">
                  Wholesale Only
                </h3>
                <p className="text-base text-textSecondary">
                  We handle bulk orders, ensuring the best value for large-scale
                  purchases.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaShippingFast className="text-textPrimary text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold text-textPrimary mb-2">
                  Global Shipping Expertise
                </h3>
                <p className="text-base text-textSecondary">
                  We provide flexible shipping options, including FCL, LCL, and
                  air cargo, to ensure timely and safe delivery worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-fit sticky top-[100px]"
          >
            <img
              src="/images/imTPwrk.jpg"
              alt="Quality Auto Parts"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default WhyChooseUs;
