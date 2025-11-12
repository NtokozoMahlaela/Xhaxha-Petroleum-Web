import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <motion.div
        className="w-24 h-24 mb-4"
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        style={{
          background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)'
        }}
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Xhaxha Petroleum</h2>
        <p className="text-gray-600 mt-2">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
