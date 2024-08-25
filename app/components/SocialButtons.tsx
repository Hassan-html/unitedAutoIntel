"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4">
      {/* Toggle Button */}
      <motion.button
        onClick={toggleIcons}
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="bg-accent p-4 rounded-full shadow-lg text-white"
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </motion.button>

      {/* Social Icons */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 space-y-4"
        >
          <motion.a
            href="https://facebook.com"
            className="flex items-center justify-center bg-blue-600 p-3 rounded-full shadow-lg text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebookF size={20} />
          </motion.a>
          <motion.a
            href="https://wa.me/1234567890"
            className="flex items-center justify-center bg-green-500 p-3 rounded-full shadow-lg text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={20} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            className="flex items-center justify-center bg-blue-400 p-3 rounded-full shadow-lg text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter size={20} />
          </motion.a>
        </motion.div>
      )}
    </div>
  );
};

export default SocialMediaIcons;
