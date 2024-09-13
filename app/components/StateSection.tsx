"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Counter from "@/app/components/Counter";
import Image from "next/image";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.section
          className="relative py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            background: "url(/images/carRed.jpg) ",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container mx-auto">
            <h2 className="text-6xl font-extrabold text-center text-white mb-20 ">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center text-white">
                <Counter
                  start={0}
                  end={1500}
                  duration={2.5}
                  isPlus={true}
                  label="Satisfied Customers"
                />
              </div>
              <div className="text-center text-white">
                <Counter
                  start={0}
                  end={120}
                  duration={2.5}
                  label="Projects Completed"
                />
              </div>
              <div className="text-center text-white">
                <Counter
                  start={0}
                  end={15}
                  duration={2.5}
                  label="Years in Business"
                />
              </div>
              <div className="text-center text-white">
                <Counter start={0} end={50} duration={2.5} label="Awards Won" />
              </div>
              <div className="text-center text-white">
                <Counter
                  start={0}
                  end={2000}
                  isPlus={true}
                  duration={2.5}
                  label="Products Sold"
                />
              </div>
              <div className="text-center text-white">
                <Counter
                  start={0}
                  end={300}
                  duration={2.5}
                  label="Global Partners"
                />
              </div>
              <div className="text-center text-white">
                <Counter
                  start={0}
                  end={95}
                  duration={2.5}
                  label="Customer Satisfaction Rate"
                />
              </div>
              <div className="text-center text-white">
                <Counter
                  start={0}
                  end={500}
                  isPlus={true}
                  duration={2.5}
                  label="Team Members"
                />
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default StatsSection;
