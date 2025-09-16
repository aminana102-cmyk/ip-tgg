// IPTV Prime - Meta Description: Welcome to Prime IPTV, the #1 choice for high-quality and affordable IPTV services worldwide. Enjoy unlimited access to live TV channels, movies, TV series (VOD), and sports in Full HD, Ultra HD, and even 4K quality – anytime, anywhere.

import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { PricingPage } from './components/pages/PricingPage';
import { ChannelsPage } from './components/pages/ChannelsPage';
import { AboutPage } from './components/pages/AboutPage';
import { FAQPage } from './components/pages/FAQPage';
import { ContactPage } from './components/pages/ContactPage';
import { BlogPage } from './components/pages/BlogPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { SupportPage } from './components/pages/SupportPage';
import { LegalPage } from './components/pages/LegalPage';
import { CheckoutPage } from './components/pages/CheckoutPage';
import WhatsAppButton from './components/WhatsAppButton';

// Router component to handle page routing with animations
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get current page from URL pathname
  const getCurrentPage = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    return path || 'home';
  };

  const handlePageChange = (page: string) => {
    // Navigate to the new page URL
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set page title based on current route
  useEffect(() => {
    const currentPage = getCurrentPage();
    const pageTitles: { [key: string]: string } = {
      home: 'IPTV Prime Canada - Premium IPTV Service',
      pricing: 'IPTV Prime Canada - Pricing Plans',
      channels: 'IPTV Prime Canada - TV Channels',
      about: 'IPTV Prime Canada - About Us',
      faq: 'IPTV Prime Canada - Frequently Asked Questions',
      contact: 'IPTV Prime Canada - Contact Us',
      blog: 'IPTV Prime Canada - Blog',
      testimonials: 'IPTV Prime Canada - Customer Testimonials',
      support: 'IPTV Prime Canada - Support Center',
      terms: 'IPTV Prime Canada - Terms of Service',
      privacy: 'IPTV Prime Canada - Privacy Policy',
      refund: 'IPTV Prime Canada - Refund Policy',
      checkout: 'IPTV Prime Canada - Checkout'
    };
    
    document.title = pageTitles[currentPage] || 'IPTV Prime Canada';
    
    // Set meta description
    const metaDescriptions: { [key: string]: string } = {
      home: 'Welcome to IPTV Prime Canada, the #1 choice for high-quality and affordable IPTV services. Enjoy unlimited access to live TV channels, movies, TV series (VOD), and sports in Full HD, Ultra HD, and even 4K quality.',
      pricing: 'Choose the perfect IPTV Prime Canada plan for your streaming needs. Simple, transparent pricing with all features included and no hidden fees.',
      channels: 'Explore over 50,000 live TV channels from around the world with IPTV Prime Canada. Premium channels in Full HD and 4K quality.',
      about: 'Learn about IPTV Prime Canada - your trusted streaming partner delivering premium entertainment experiences to millions of users worldwide.',
      faq: 'Find answers to frequently asked questions about IPTV Prime Canada. Get help with setup, billing, channels, and technical support.',
      contact: 'Contact IPTV Prime Canada support team. We\'re here to help 24/7 with any questions about our IPTV services.',
      checkout: 'Complete your IPTV Prime Canada subscription order. Secure checkout with instant activation and 24/7 support.'
    };
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescriptions[currentPage] || metaDescriptions.home);
    
  }, [location.pathname]);

  return (
    <div className="dark min-h-screen bg-dark-bg">
      <Navigation currentPage={getCurrentPage()} onPageChange={handlePageChange} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage onPageChange={handlePageChange} />} />
            <Route path="/home" element={<HomePage onPageChange={handlePageChange} />} />
            <Route path="/pricing" element={<PricingPage onPageChange={handlePageChange} />} />
            <Route path="/channels" element={<ChannelsPage onPageChange={handlePageChange} />} />
            <Route path="/about" element={<AboutPage onPageChange={handlePageChange} />} />
            <Route path="/faq" element={<FAQPage onPageChange={handlePageChange} />} />
            <Route path="/contact" element={<ContactPage onPageChange={handlePageChange} />} />
            <Route path="/blog" element={<BlogPage onPageChange={handlePageChange} />} />
            <Route path="/testimonials" element={<TestimonialsPage onPageChange={handlePageChange} />} />
            <Route path="/support" element={<SupportPage onPageChange={handlePageChange} />} />
            <Route path="/terms" element={<LegalPage onPageChange={handlePageChange} pageType="terms" />} />
            <Route path="/privacy" element={<LegalPage onPageChange={handlePageChange} pageType="privacy" />} />
            <Route path="/refund" element={<LegalPage onPageChange={handlePageChange} pageType="refund" />} />
            <Route path="/checkout" element={<CheckoutPage onPageChange={handlePageChange} />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<HomePage onPageChange={handlePageChange} />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      
      <Footer onPageChange={handlePageChange} />
      <WhatsAppButton />
    </div>
  );
}

// Main App component with Router wrapper
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}