// components/SectionHeading.jsx
import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: any) => {
  return (
    <div className="text-center relative mb-12">
      {/* Animated heading */}
      <motion.h2
        className="text-5xl font-bold text-textPrimary relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>

      {/* Accent underline */}
      <motion.div
        className="w-24 h-1 bg-primary mx-auto mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg text-textSecondary mt-4">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
