import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTruck, FiShield, FiAward, FiClock } from 'react-icons/fi';

// Image paths
const HeroImage = '/images/hero/ChatGPT Image Nov 13, 2025, 12_24_54 AM.png';
const AboutImage = '/images/about/Minister-of-Mineral-Resources-echoes-BBP-Law-recommendations.jpg.jpeg';
const Service1 = '/images/services/Photo-for-BP-Edgewater-8-1024x768.jpg';
const Service2 = '/images/products/Petrol-south-africa.jpg';
const Service3 = '/images/products/petrolstation-e1470054216342.jpg';
// Using team photo as placeholder for testimonials (you may want to add specific testimonial photos later)
const Testimonial1 = '/images/team/adf5af6695994a6fbcc2428b53b93181.jpg';
const Testimonial2 = '/images/team/adf5af6695994a6fbcc2428b53b93181.jpg';
const Testimonial3 = '/images/team/adf5af6695994a6fbcc2428b53b93181.jpg';


const Home = () => {
  const stats = [
    { 
      value: '100+', 
      label: 'Clients Served', 
      icon: <FiTruck className="text-4xl mb-3 text-gold-500" />,
      animation: 'fade-in'
    },
    { 
      value: '24/7', 
      label: 'Support', 
      icon: <FiClock className="text-4xl mb-3 text-gold-500" />,
      animation: 'fade-in',
      delay: '100'
    },
    { 
      value: '100%', 
      label: 'Satisfaction', 
      icon: <FiAward className="text-4xl mb-3 text-gold-500" />,
      animation: 'fade-in',
      delay: '200'
    },
    { 
      value: '10+', 
      label: 'Years Experience', 
      icon: <FiShield className="text-4xl mb-3 text-gold-500" />,
      animation: 'fade-in',
      delay: '300'
    },
  ];

  const services = [
    {
      icon: <FiTruck className="w-8 h-8 text-primary" />,
      title: 'Bulk Fuel Supply',
      description: 'Reliable and efficient delivery of high-quality petroleum products to your location.',
      image: Service1,
    },
    {
      icon: <FiShield className="w-8 h-8 text-primary" />,
      title: 'Fuel Management',
      description: 'Advanced solutions to monitor and optimize your fuel consumption and costs.',
      image: Service2,
    },
    {
      icon: <FiAward className="w-8 h-8 text-primary" />,
      title: 'Premium Lubricants',
      description: 'High-performance lubricants for all your industrial and automotive needs.',
      image: Service3,
    },
  ];

  const testimonials = [
    {
      quote: "Xhaxha Petroleum has been our trusted fuel supplier for years. Their reliability and customer service are unmatched.",
      author: "Zama Ndima",
      position: "Operations Manager, ABC Mining",
      image: Testimonial1,
    },
    {
      quote: "The quality of their products and the efficiency of their delivery service have significantly improved our operations.",
      author: "Ntokozo Mahlaela",
      position: "CEO, XYZ Transport",
      image: Testimonial2,
    },
    {
      quote: "Professional, reliable, and always on time. Xhaxha Petroleum is our go-to for all our fuel needs.",
      author: "Lerato Mokoena",
      position: "Facility Manager, 123 Industries",
      image: Testimonial3,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            alt="Xhaxha Petroleum - Fueling the Future Together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Fueling the Future Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Your trusted partner for reliable and efficient petroleum solutions in South Africa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="bg-secondary text-dark font-semibold px-8 py-4 rounded-md hover:bg-yellow-500 transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={AboutImage}
                  alt="Xhaxha Petroleum team"
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg w-48">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary font-semibold">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading Petroleum Solutions in South Africa</h2>
              <p className="text-gray-600 mb-6">
                Xhaxha Petroleum is a proudly South African petroleum wholesale company specializing in the bulk distribution of high-quality fuels and lubricants. Established to meet the growing energy demands across various sectors, we are committed to delivering reliable, efficient, and safe petroleum solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <FiShield className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Safety First</h4>
                    <p className="text-gray-600 text-sm">We prioritize the well-being of our employees, clients, and the environment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <FiClock className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock assistance for all your fuel needs.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-primary font-semibold flex items-center group">
                Learn more about us
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Fuel Solutions</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-primary font-semibold flex items-center group text-sm"
                  >
                    Learn more
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn btn-primary inline-flex items-center"
            >
              View All Services <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-800 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Xhaxha Petroleum for reliable fuel solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100 font-semibold"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
