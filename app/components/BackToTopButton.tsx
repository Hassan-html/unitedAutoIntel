"use client";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <NoSSRWrapper>
      {visible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-accent text-white p-2 text-xl  shadow-lg"
        >
          <FaAngleUp />
        </motion.button>
      )}
    </NoSSRWrapper>
  );
};

export default BackToTopButton;
