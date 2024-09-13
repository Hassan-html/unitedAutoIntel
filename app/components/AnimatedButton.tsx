// components/AnimatedButton.jsx
import { motion } from "framer-motion";

const AnimatedButton = ({ children, onClick }: any) => {
  return (
    <motion.button
      className="btn-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
