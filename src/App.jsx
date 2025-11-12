import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components with error boundaries
const Navbar = React.lazy(() => import('./components/Navbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));
const LoadingScreen = React.lazy(() => import('./components/LoadingScreen'));

// Simple fallback component
const Fallback = () => <div>Loading...</div>;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <React.Suspense fallback={<Fallback />}><LoadingScreen /></React.Suspense>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <React.Suspense fallback={<Fallback />}>
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
