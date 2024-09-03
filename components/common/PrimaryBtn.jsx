"use client";
import { motion } from "framer-motion";
const PrimaryBtn = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      {...props}
      className="bg-primaryColor hover:bg-accentColor text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 p-2"
    >
      {children}
    </motion.button>
  );
};

export default PrimaryBtn;
