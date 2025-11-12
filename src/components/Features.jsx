import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiClock, FiTrendingUp, FiGlobe, FiDroplet, FiUsers } from 'react-icons/fi';

const features = [
  {
    icon: <FiShield className="w-8 h-8 text-white" />,
    title: 'Safety First',
    description: 'Rigorous safety protocols and compliance with international standards to ensure secure operations.',
    stats: '99.9% Safety Record',
    color: 'from-red-500 to-rose-600',
    delay: 0.1
  },
  {
    icon: <FiClock className="w-8 h-8 text-white" />,
    title: '24/7 Availability',
    description: 'Round-the-clock service and support to meet your energy needs whenever you need them.',
    stats: '24/7 Support',
    color: 'from-blue-500 to-indigo-600',
    delay: 0.2
  },
  {
    icon: <FiTrendingUp className="w-8 h-8 text-white" />,
    title: 'Cost Efficiency',
    description: 'Optimized solutions that help reduce operational costs while maintaining quality service.',
    stats: 'Up to 30% Savings',
    color: 'from-green-500 to-emerald-600',
    delay: 0.3
  },
  {
    icon: <FiGlobe className="w-8 h-8 text-white" />,
    title: 'Global Reach',
    description: 'Extensive network ensuring reliable fuel supply across multiple regions and countries.',
    stats: '50+ Countries',
    color: 'from-purple-500 to-violet-600',
    delay: 0.4
  },
  {
    icon: <FiDroplet className="w-8 h-8 text-white" />,
    title: 'Quality Fuel',
    description: 'Premium quality fuels that enhance engine performance and reduce emissions.',
    stats: '99.9% Purity',
    color: 'from-amber-500 to-orange-600',
    delay: 0.5
  },
  {
    icon: <FiUsers className="w-8 h-8 text-white" />,
    title: 'Expert Team',
    description: 'Highly skilled professionals with decades of experience in the energy sector.',
    stats: '100+ Experts',
    color: 'from-cyan-500 to-sky-600',
    delay: 0.6
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: feature.delay }}
      className="relative group h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-70 blur transition duration-500 group-hover:duration-200"></div>
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {feature.stats}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-gold-700 bg-gold-100 dark:bg-gold-900/30 dark:text-gold-400 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Excellence in Energy Solutions
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering reliable and innovative energy solutions with a commitment to quality and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Need more information?</h3>
              <p className="text-gray-600 dark:text-gray-300">Our experts are here to help you with all your energy needs.</p>
            </div>
            <button className="whitespace-nowrap px-6 py-3 bg-gradient-to-r from-gold-500 to-amber-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Contact Us Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
