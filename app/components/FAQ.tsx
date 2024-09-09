"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What should I consider when buying car spare parts?",
      answer:
        "When buying car spare parts, ensure you verify the part number, compatibility with your vehicle, and whether it’s an OEM (Original Equipment Manufacturer) part or aftermarket. Quality and warranty are also crucial factors.",
    },
    {
      question: "How do I know if a spare part is genuine?",
      answer:
        "Genuine parts usually come with specific markings, serial numbers, and packaging from the manufacturer. Always purchase from reputable dealers or directly from authorized dealerships to ensure authenticity.",
    },
    {
      question: "Can I use aftermarket parts instead of OEM parts?",
      answer:
        "Aftermarket parts can be a viable alternative to OEM parts. They are often cheaper and more widely available. However, the quality can vary, so it's essential to buy from reputable manufacturers and ensure they meet the required standards.",
    },
    {
      question: "What is the difference between OEM and aftermarket parts?",
      answer:
        "OEM parts are made by the vehicle’s original manufacturer and are identical to the parts used when the car was built. Aftermarket parts are produced by third-party companies and can vary in quality, but they are usually more affordable.",
    },
    {
      question: "How often should I replace car spare parts?",
      answer:
        "The replacement frequency depends on the part. For example, oil filters and air filters should be replaced during regular maintenance, while other parts like brake pads and tires depend on wear and tear. Always follow your vehicle’s maintenance schedule.",
    },
    {
      question: "Where can I find quality spare parts for my car?",
      answer:
        "You can find quality spare parts at authorized dealerships, online  s with good reviews, and specialty auto parts retailers. Ensure the parts are compatible with your car and come with a warranty.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.section
      id="faq-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16"
    >
      <h2 className="text-4xl font-extrabold text-center mb-4 text-primary">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-center  mb-12 text-primary">
        Get answers to the most common questions about car spare parts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-2xl font-bold mb-2 text-black flex justify-between items-center">
              {faq.question}
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </h3>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;
