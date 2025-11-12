import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary text-xl" />,
      text: '9 Cedar Avenue West, Fourways, Sandton 2191',
    },
    {
      icon: <FaPhone className="text-primary text-xl" />,
      text: '+27 83 309 9640',
      link: 'tel:+27833099640',
    },
    {
      icon: <FaEnvelope className="text-primary text-xl" />,
      text: 'info@xhaxhapetroleum.co.za',
      link: 'mailto:info@xhaxhapetroleum.co.za',
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">XHAXHA</span>
              <span className="text-secondary">PETROLEUM</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Fuelling the future together with reliable and sustainable energy solutions across South Africa.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors text-xl"
                  aria-label={social.icon.type.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-1">{item.icon}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span>08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Xhaxha Petroleum (Pty) Ltd. All Rights Reserved. | Registration No: 2024/286983/07
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
