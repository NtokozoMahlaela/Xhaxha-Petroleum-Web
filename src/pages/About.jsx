import { motion } from 'framer-motion';
import { FiCheck, FiTarget, FiShield, FiUsers, FiAward } from 'react-icons/fi';
// Placeholder images from placeholder.com
const AboutHero = 'https://via.placeholder.com/1920x800.png?text=About+Us';
const TeamImage = 'https://via.placeholder.com/800x600.png?text=Our+Team';
const ValuesImage = 'https://via.placeholder.com/800x600.png?text=Our+Values';

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
      <section className="relative py-32 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src={AboutHero}
            alt="About Xhaxha Petroleum"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Xhaxha Petroleum</h1>
            <p className="text-xl text-gray-200">
              A proudly South African petroleum wholesale company specializing in the bulk distribution of high-quality fuels and lubricants.
            </p>
          </div>
        </div>
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
                bio: 'With over 15 years of experience in the petroleum industry, Lethumusa leads Xhaxha Petroleum with a vision for innovation and excellence.'
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
                <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                  <span className="text-4xl">👤</span>
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
