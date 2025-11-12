import React from 'react';
import { motion } from 'framer-motion';
import { FiTruck, FiDroplet, FiShield, FiZap, FiWind, FiSun } from 'react-icons/fi';

const services = [
  {
    icon: <FiTruck className="w-10 h-10 text-gold-500" />,
    title: 'Bulk Fuel Supply',
    description: 'Reliable and efficient bulk fuel delivery for businesses of all sizes with 24/7 availability and emergency services.',
    features: ['Diesel & Petrol', 'Aviation Fuel', 'Industrial Oils', 'Lubricants'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <FiDroplet className="w-10 h-10 text-gold-500" />,
    title: 'Fuel Management',
    description: 'Advanced fuel management solutions to optimize consumption and reduce operational costs.',
    features: ['Fuel Monitoring', 'Consumption Analysis', 'Theft Prevention', 'Automated Reporting'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: <FiShield className="w-10 h-10 text-gold-500" />,
    title: 'HSSE Compliance',
    description: 'Comprehensive health, safety, security, and environmental compliance services.',n    features: ['Risk Assessment', 'Safety Training', 'Incident Management', 'Regulatory Compliance'],
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: <FiZap className="w-10 h-10 text-gold-500" />,
    title: 'Energy Solutions',
    description: 'Innovative and sustainable energy solutions for a greener future.',
    features: ['Solar Power', 'Energy Storage', 'Hybrid Systems', 'Energy Audits'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: <FiWind className="w-10 h-10 text-gold-500" />,
    title: 'Renewable Energy',
    description: 'Cutting-edge renewable energy solutions to reduce carbon footprint.',
    features: ['Wind Energy', 'Biofuels', 'Hydrogen Fuel', 'Carbon Credits'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: <FiSun className="w-10 h-10 text-gold-500" />,
    title: 'Consulting Services',
    description: 'Expert consulting for energy optimization and sustainability strategies.',
    features: ['Feasibility Studies', 'Project Management', 'Technical Advisory', 'Market Analysis'],
    color: 'from-purple-500 to-indigo-600',
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-gold-700 rounded-2xl opacity-0 group-hover:opacity-70 blur transition duration-500 group-hover:duration-200"></div>
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="mb-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900/30 dark:to-gold-800/20 flex items-center justify-center mb-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4 mr-2 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-6 text-sm font-medium text-gold-600 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300 flex items-center transition-colors">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-gold-700 bg-gold-100 dark:bg-gold-900/30 dark:text-gold-400 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Energy Solutions
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering innovative and sustainable energy solutions tailored to meet the evolving needs of our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 transform hover:-translate-y-1">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
