import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiChevronDown, FiTruck, FiDroplet, FiSettings, FiShield, FiClock, FiUsers, FiBarChart2, FiCheck } from 'react-icons/fi';
// Service images
const ServiceHero = '/images/services/Photo-for-BP-Edgewater-8-1024x768.jpg';
const Service1 = '/images/services/Bulk supply.jpg';
const Service2 = '/images/services/fuel-management-system.webp';
const Service3 = '/images/services/Bulk-Oil-Fuel-Industrial-Lubricants-Suppliers.jpg';
const Service4 = '/images/services/Above-Ground-Fuel-Tank-Installation.jpg';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Bulk Fuel Supply',
      category: 'fuel',
      icon: <FiDroplet className="w-6 h-6 text-primary" />,
      image: Service1,
      description: 'Reliable and efficient bulk fuel supply solutions for businesses of all sizes. We ensure timely delivery of high-quality fuels to keep your operations running smoothly.',
      features: [
        'Diesel (50ppm & 500ppm)',
        'Unleaded Petrol (93 & 95)',
        'Illuminating Paraffin',
        'Jet A1 & AvGas',
        '24/7 emergency delivery',
        'Customized delivery schedules'
      ],
      benefits: [
        'Competitive pricing',
        'Reliable supply chain',
        'Quality assurance',
        'Flexible delivery options',
        'Bulk purchasing discounts'
      ]
    },
    {
      id: 2,
      title: 'Fuel Management Solutions',
      category: 'management',
      icon: <FiBarChart2 className="w-6 h-6 text-primary" />,
      image: Service2,
      description: 'Advanced fuel management systems to monitor, track, and optimize your fuel consumption, reducing costs and improving efficiency.',
      features: [
        'Real-time fuel monitoring',
        'Automated reporting',
        'Theft prevention',
        'Consumption analysis',
        'Remote tank monitoring',
        'Custom alerts and notifications'
      ],
      benefits: [
        'Reduce fuel costs',
        'Prevent fuel theft',
        'Improve efficiency',
        'Data-driven decisions',
        '24/7 system monitoring'
      ]
    },
    {
      id: 3,
      title: 'Lubricant Supply',
      category: 'lubricants',
      icon: <FiDroplet className="w-6 h-6 text-primary" />,
      image: Service3,
      description: 'Premium quality lubricants and greases for all your industrial and automotive needs, ensuring optimal performance and equipment longevity.',
      features: [
        'Engine oils',
        'Gear oils',
        'Hydraulic fluids',
        'Greases',
        'Specialty lubricants',
        'Bulk delivery options'
      ],
      benefits: [
        'Extended equipment life',
        'Reduced maintenance costs',
        'Improved performance',
        'Technical support',
        'Custom formulations available'
      ]
    },
    {
      id: 4,
      title: 'Fuel Tank Installation & Maintenance',
      category: 'installation',
      icon: <FiShield className="w-6 h-6 text-primary" />,
      image: Service4,
      description: 'Professional installation, maintenance, and inspection services for all types of fuel storage tanks and dispensing systems.',
      features: [
        'Tank installation',
        'Preventive maintenance',
        'Leak detection',
        'Tank cleaning',
        'Compliance testing',
        'Emergency repairs'
      ],
      benefits: [
        'Regulatory compliance',
        'Safety assurance',
        'Extended equipment life',
        'Reduced downtime',
        'Certified technicians'
      ]
    },
    {
      id: 5,
      title: 'Fleet Fueling Solutions',
      category: 'fleet',
      icon: <FiTruck className="w-6 h-6 text-primary" />,
      image: Service1,
      description: 'Comprehensive fueling solutions for fleet operators, including card systems, on-site fueling, and route optimization.',
      features: [
        'Fuel cards',
        'On-site fleet fueling',
        'Route optimization',
        'Fuel consumption tracking',
        'Driver behavior monitoring',
        'Custom reporting'
      ],
      benefits: [
        'Reduced fuel costs',
        'Improved fleet efficiency',
        'Simplified administration',
        'Reduced fraud risk',
        '24/7 customer support'
      ]
    },
    {
      id: 6,
      title: 'B-BBEE Fuel Procurement',
      category: 'bbbee',
      icon: <FiCheck className="w-6 h-6 text-primary" />,
      image: '/images/services/b-bbee.jpg',
      description: 'Strategic B-BBEE fuel procurement solutions to help your business meet its transformation goals while maintaining supply chain efficiency.',
      features: [
        'B-BBEE compliance',
        'Enterprise development',
        'Supplier development',
        'Skills development',
        'Socio-economic development',
        'Custom solutions'
      ],
      benefits: [
        'Improved B-BBEE score',
        'Supply chain optimization',
        'Risk mitigation',
        'Stakeholder value',
        'Sustainable growth'
      ]
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'fuel', name: 'Fuel Supply' },
    { id: 'management', name: 'Fuel Management' },
    { id: 'lubricants', name: 'Lubricants' },
    { id: 'fleet', name: 'Fleet Solutions' },
    { id: 'installation', name: 'Installation' },
    { id: 'bbbee', name: 'B-BBEE Solutions' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 text-white rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={ServiceHero}
            alt="Fuel services"
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
            className="max-w-3xl"
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Comprehensive fuel solutions tailored to your business needs
            </motion.p>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(255,255,255,0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
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

      {/* Services Tabs */}
      <div className="bg-white shadow-sm sticky top-16 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-1 hide-scrollbar">
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`whitespace-nowrap px-6 py-3 font-medium rounded-full transition-all duration-300 ${
                    activeTab === category.id ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-sm bg-black/60 px-3 py-1 rounded-full">
                      {service.category === 'fuel' && 'Fuel Supply'}
                      {service.category === 'management' && 'Management'}
                      {service.category === 'lubricants' && 'Lubricants'}
                      {service.category === 'fleet' && 'Fleet Solutions'}
                      {service.category === 'installation' && 'Installation'}
                      {service.category === 'bbbee' && 'B-BBEE'}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center hover:underline transition-colors"
                  >
                    Learn more about this service →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Service Overview</h4>
                  <p className="text-gray-700 mb-6">{selectedService.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-4">Features</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Benefits</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Interested in this service?</h4>
                    <p className="text-sm text-gray-600 mb-4">Contact us today to discuss your requirements and get a customized quote.</p>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="tel:+27833099640"
                        className="bg-primary text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
                      >
                        Call Us
                      </a>
                      <a
                        href="mailto:sales@xhaxhapetroleum.co.za"
                        className="border border-primary text-primary text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <h4 className="text-lg font-semibold mb-4">Service Documents</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 px-4 py-2.5 rounded-lg transition-all duration-300 hover:shadow-md">
                    <FiDownload className="mr-2" />
                    Service Brochure (PDF)
                  </button>
                  <button className="flex items-center text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 px-4 py-2.5 rounded-lg transition-all duration-300 hover:shadow-md">
                    <FiDownload className="mr-2" />
                    Technical Specifications
                  </button>
                  <button className="flex items-center text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 px-4 py-2.5 rounded-lg transition-all duration-300 hover:shadow-md">
                    <FiDownload className="mr-2" />
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Fuel Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you find the perfect fuel solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+27833099640"
              className="btn bg-white text-primary hover:bg-gray-100 font-semibold"
            >
              Call for a Consultation
            </a>
            <a
              href="mailto:sales@xhaxhapetroleum.co.za"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
