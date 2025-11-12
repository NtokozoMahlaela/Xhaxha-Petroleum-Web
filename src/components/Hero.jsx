import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-green-800 to-emerald-700">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-emerald-800/70" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Powering Progress <br />
            <span className="text-emerald-400">Fueling the Future</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8">
            Delivering reliable energy solutions with cutting-edge technology and sustainable practices. 
            Join us in shaping a cleaner, more efficient energy future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5"
            >
              Explore Our Services
            </button>
            
            <button
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-white/10 transform hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '15K+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support' },
              { value: '99.9%', label: 'Reliability' },
              { value: '50+', label: 'Locations' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;