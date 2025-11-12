import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, 
  FiX, 
  FiPhone, 
  FiMail, 
  FiFacebook, 
  FiTwitter, 
  FiLinkedin, 
  FiClock 
} from 'react-icons/fi';

// Navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

// Main Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Get active link
  const activeLink = navLinks.find(link => link.path === location.pathname)?.path || '';
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-700">Xhaxha</span>
              <span className="text-2xl font-bold text-accent-500">Petroleum</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 group
                    ${activeLink === link.path ? 'text-primary-600 font-semibold' : ''}`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10 ${
                      activeLink === link.path ? 'w-4/5 left-1/10' : ''
                    }`}
                  ></span>
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent-200/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
              >
                <span>Get a Quote</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <FiX className="w-6 h-6 text-gray-700" />
                ) : (
                  <FiMenu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg ${
              isOpen ? 'max-h-96 py-4 px-2 my-2' : 'max-h-0 py-0 m-0 border-0'
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeLink === link.path
                      ? 'bg-primary-50 text-primary-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="w-full text-center px-4 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-accent-200/50 transition-all duration-300 mt-2 flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                <span>Get a Quote</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
