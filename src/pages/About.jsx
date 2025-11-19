import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiChevronDown, FiTarget, FiShield, FiUsers, FiAward } from 'react-icons/fi';
// Images
const AboutHero = '/images/hero/ChatGPT Image Nov 13, 2025, 12_24_54 AM.png';
const TeamImage = '/images/about/Investing-in-SA_1200x675-1024x576.png';
const ValuesImage = '/images/about/oil-barrels.avif';

const About = () => {
  const features = [
    {
      icon: <FiTarget className="w-6 h-6 text-primary" />,
      title: 'Our Vision',
      description: 'To be a leading, trusted, and innovative petroleum wholesaler in Southern Africa, empowering industries and communities through sustainable energy solutions.'
    },
    {
      icon: <FiShield className="w-6 h-6 text-primary" />,
      title: 'Safety First',
      description: 'We prioritize the well-being of our employees, clients, and the environment in all our operations.'
    },
    {
      icon: <FiUsers className="w-6 h-6 text-primary" />,
      title: 'Our Team',
      description: 'A dedicated team of professionals with extensive experience in the petroleum industry.'
    },
    {
      icon: <FiAward className="w-6 h-6 text-primary" />,
      title: 'Our Commitment',
      description: 'We are committed to excellence, integrity, and sustainable business practices.'
    }
  ];

  const values = [
    'Integrity in all our dealings',
    'Commitment to excellence',
    'Customer satisfaction',
    'Environmental responsibility',
    'Continuous improvement',
    'Teamwork and collaboration'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-gray-900 text-white flex items-center justify-center rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={AboutHero}
            alt="About Xhaxha Petroleum"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              About Xhaxha Petroleum
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your trusted partner in premium petroleum solutions and energy excellence
            </motion.p>
            
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(255,255,255,0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Company Overview */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Company Overview</h2>
              <p className="text-gray-600 mb-6">
                Xhaxha Petroleum (Pty) Ltd is a proudly South African petroleum wholesale company specializing in the bulk distribution of high-quality fuels and lubricants. Established in 2024, we are committed to delivering reliable, efficient, and safe petroleum solutions to commercial, industrial, and government clients.
              </p>
              <p className="text-gray-600 mb-8">
                Backed by strong partnerships with reputable refineries and logistics providers, Xhaxha Petroleum ensures consistent supply and exceptional service across South Africa and neighboring markets.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-primary mb-3">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={TeamImage}
                  alt="Xhaxha Petroleum Team"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
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
                  src={ValuesImage}
                  alt="Our Values"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Mission</h3>
                <p className="text-gray-600 mb-6">
                  To deliver premium petroleum products at competitive prices while building enduring partnerships with clients, suppliers, and stakeholders. We uphold the highest standards in safety, quality, and environmental responsibility.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Core Values</h3>
                <ul className="space-y-2">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Lethumusa Mokoena',
                position: 'Founder & CEO',
                bio: 'With over 9 years of experience in the petroleum industry, Lethumusa leads Xhaxha Petroleum with a vision for innovation and excellence.'
              },
              {
                name: 'Vacant',
                position: 'Operations Director',
                bio: 'This leadership position is open for an experienced professional to oversee our day-to-day operations and ensure operational excellence.'
              },
              {
                name: 'Vacant',
                position: 'Sales & Marketing Manager',
                bio: 'We are looking for a dynamic individual to lead our sales and marketing efforts and drive business growth.'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={member.name === 'Lethumusa Mokoena' ? '/images/team/lethumusa mokoena.jpg' : ''} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '';
                      e.target.parentElement.innerHTML = '<span class="text-4xl w-full h-full flex items-center justify-center">👤</span>';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Check our careers page for current openings.
          </p>
          <a
            href="mailto:careers@xhaxhapetroleum.co.za"
            className="btn bg-white text-primary hover:bg-gray-100 font-semibold inline-flex items-center"
          >
            Send Your CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
