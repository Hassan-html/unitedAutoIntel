"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaTimes,
  FaCommentDots,
  FaInstagram,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={toggleIcons}
        initial={{ scale: 1 }}
        animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
        whileTap={{ scale: 0.8 }}
        className={`bg-accent p-4 rounded-full shadow-lg text-white transition-all duration-300 ease-in-out`}
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </motion.button>

      {/* Social Icons */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, staggerChildren: 0.1 }}
          className="mt-4 space-y-4"
        >
          <motion.a
            href="https://www.facebook.com/share/Q8p9zYjhhvogF8gZ/?mibextid=LQQJ4d"
            className="flex items-center justify-center bg-blue-600 p-3 rounded-full shadow-lg text-white transition-all hover:scale-110"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebookF size={20} />
          </motion.a>
          <motion.a
            href="http://wa.me/971558981016"
            className="flex items-center justify-center bg-green-500 p-3 rounded-full shadow-lg text-white transition-all hover:scale-110"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={20} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/invites/contact/?igsh=st3g7int3a17&utm_content=vl53w82"
            className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg text-white transition-all hover:scale-110"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={20} />
          </motion.a>
        </motion.div>
      )}
    </div>
  );
};

export default SocialMediaIcons;
