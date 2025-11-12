import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDroplet, FiTruck, FiZap, FiFilter, FiDownload } from 'react-icons/fi';
// Placeholder images from placeholder.com
const Product1 = 'https://via.placeholder.com/600x400.png?text=Diesel';
const Product2 = 'https://via.placeholder.com/600x400.png?text=Petrol';
const Product3 = 'https://via.placeholder.com/600x400.png?text=Paraffin';
const Product4 = 'https://via.placeholder.com/600x400.png?text=Jet+Fuel';

const Products = () => {
  const [activeTab, setActiveTab] = useState('fuels');

  const products = {
    fuels: [
      {
        id: 1,
        name: 'Diesel 50ppm',
        description: 'Ultra-low sulfur diesel fuel for cleaner emissions and better engine performance.',
        features: ['50ppm sulfur content', 'Improved fuel economy', 'Reduced emissions', 'Enhanced engine protection'],
        image: Product1,
        specifications: {
          'Density at 15°C': '820-845 kg/m³',
          'Flash Point': '> 55°C',
          'Sulfur Content': '≤ 50 mg/kg',
          'Cetane Number': '≥ 51',
        }
      },
      {
        id: 2,
        name: 'Diesel 500ppm',
        description: 'Standard diesel fuel suitable for a wide range of industrial applications.',
        features: ['Cost-effective', 'Widely available', 'Suitable for older engines', 'Reliable performance'],
        image: Product2,
        specifications: {
          'Density at 15°C': '820-860 kg/m³',
          'Flash Point': '> 55°C',
          'Sulfur Content': '≤ 500 mg/kg',
          'Cetane Number': '≥ 48',
        }
      },
      {
        id: 3,
        name: 'Unleaded Petrol 93',
        description: 'High-octane unleaded petrol for optimal engine performance.',
        features: ['93 RON', 'Engine cleanliness', 'Improved acceleration', 'Reduced knocking'],
        image: Product3,
        specifications: {
          'Research Octane Number': '≥ 93',
          'Density at 15°C': '720-775 kg/m³',
          'Sulfur Content': '≤ 10 mg/kg',
          'Reid Vapor Pressure': '45-70 kPa',
        }
      },
      {
        id: 4,
        name: 'Unleaded Petrol 95',
        description: 'Premium unleaded petrol for high-performance vehicles.',
        features: ['95 RON', 'Enhanced engine protection', 'Superior performance', 'Fuel efficiency'],
        image: Product4,
        specifications: {
          'Research Octane Number': '≥ 95',
          'Density at 15°C': '720-775 kg/m³',
          'Sulfur Content': '≤ 10 mg/kg',
          'Reid Vapor Pressure': '45-70 kPa',
        }
      },
      {
        id: 5,
        name: 'Illuminating Paraffin',
        description: 'High-quality illuminating paraffin for various applications.',
        features: ['Clean burning', 'Low odor', 'Ideal for lighting and heating', 'Consistent quality'],
        image: Product1,
        specifications: {
          'Flash Point': '> 38°C',
          'Sulfur Content': '≤ 0.1%',
          'Density at 15°C': '780-810 kg/m³',
          'Smoke Point': '≥ 20 mm',
        }
      },
      {
        id: 6,
        name: 'Jet A1 Fuel',
        description: 'Aviation turbine fuel for commercial and private aircraft.',
        features: ['High energy content', 'Excellent thermal stability', 'Low freezing point', 'Global availability'],
        image: Product2,
        specifications: {
          'Freezing Point': '≤ -47°C',
          'Flash Point': '> 38°C',
          'Density at 15°C': '775-840 kg/m³',
          'Aromatics': '≤ 25.0%',
        }
      },
    ],
    lubricants: [
      {
        id: 1,
        name: 'Engine Oil 15W-40',
        description: 'High-performance engine oil for diesel and petrol engines.',
        features: ['API CI-4/SL', 'Excellent wear protection', 'Extended drain intervals', 'Improved fuel economy'],
        image: Product3,
        specifications: {
          'Viscosity Grade': '15W-40',
          'API Classification': 'CI-4/SL',
          'Density at 15°C': '880 kg/m³',
          'Flash Point': '> 200°C',
        }
      },
      {
        id: 2,
        name: 'Gear Oil 80W-90',
        description: 'Heavy-duty gear oil for manual transmissions and differentials.',
        features: ['API GL-5', 'Extreme pressure protection', 'Thermal stability', 'Corrosion protection'],
        image: Product4,
        specifications: {
          'Viscosity Grade': '80W-90',
          'API Classification': 'GL-5',
          'Density at 15°C': '900 kg/m³',
          'Pour Point': '≤ -30°C',
        }
      },
      {
        id: 3,
        name: 'Hydraulic Oil ISO 46',
        description: 'Premium hydraulic oil for industrial and mobile equipment.',
        features: ['ISO 46', 'Anti-wear protection', 'Oxidation stability', 'Foam control'],
        image: Product1,
        specifications: {
          'Viscosity Grade': 'ISO VG 46',
          'Density at 15°C': '870 kg/m³',
          'Flash Point': '> 200°C',
          'Pour Point': '≤ -24°C',
        }
      },
      {
        id: 4,
        name: 'Grease NLGI 2',
        description: 'Multi-purpose grease for various industrial applications.',
        features: ['NLGI 2', 'Water resistance', 'Mechanical stability', 'Corrosion protection'],
        image: Product2,
        specifications: {
          'NLGI Grade': '2',
          'Base Oil Viscosity': '150 cSt @ 40°C',
          'Dropping Point': '> 180°C',
          'Worked Penetration': '265-295',
        }
      },
    ]
  };

  const getProductIcon = (productName) => {
    if (productName.toLowerCase().includes('diesel')) return <FiTruck className="w-6 h-6" />;
    if (productName.toLowerCase().includes('petrol')) return <FiZap className="w-6 h-6" />;
    if (productName.toLowerCase().includes('paraffin')) return <FiDroplet className="w-6 h-6" />;
    if (productName.toLowerCase().includes('jet') || productName.toLowerCase().includes('avgas')) return <FiFilter className="w-6 h-6" />;
    return <FiDroplet className="w-6 h-6" />;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-gray-200">
              High-quality petroleum products to meet all your energy needs
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap border-b border-gray-200">
            <button
              onClick={() => setActiveTab('fuels')}
              className={`px-6 py-4 font-medium text-sm md:text-base ${activeTab === 'fuels' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Fuels
            </button>
            <button
              onClick={() => setActiveTab('lubricants')}
              className={`px-6 py-4 font-medium text-sm md:text-base ${activeTab === 'lubricants' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
            >
              Lubricants & Oils
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[activeTab].map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  {getProductIcon(product.name)}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {activeTab === 'fuels' ? 'Fuel' : 'Lubricant'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold mb-2">Specifications:</h4>
                    <div className="space-y-2 text-sm">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <button className="text-primary font-medium text-sm hover:underline flex items-center">
                      <FiDownload className="mr-1" /> Download Specs
                    </button>
                    <button className="btn btn-primary text-sm px-4 py-2">
                      Request Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We can provide customized fuel and lubricant solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+27833099640"
              className="btn bg-white text-primary hover:bg-gray-100 font-semibold"
            >
              Call Us Now
            </a>
            <a
              href="mailto:sales@xhaxhapetroleum.co.za"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
