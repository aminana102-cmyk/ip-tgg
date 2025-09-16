import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, Tv } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Blog', id: 'blog' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Contact', id: 'contact' },
  { name: 'About', id: 'about' },
];

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/90 backdrop-blur-md border-b border-neon-cyan/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => onPageChange('home')}
          >
            <div className="relative">
              <Tv className="w-8 h-8 text-neon-cyan" />
            </div>
            <span className="text-2xl font-bold text-white">
              IPTV <span className="text-neon-cyan">Prime</span> <span className="text-white">Canada</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'text-neon-cyan'
                    : 'text-soft-gray hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPageChange(item.id)}
              >
                {item.name}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-cyan/90 hover:to-neon-blue/90 text-dark-bg font-bold px-6 py-2 rounded-lg border-2 border-neon-blue shadow-lg shadow-neon-blue/40 hover:shadow-neon-blue/60 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
              onClick={() => onPageChange('pricing')}
            >
              Start Your Free IPTV Prime Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-soft-gray hover:text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-neon-cyan/20 py-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-neon-cyan bg-neon-cyan/10'
                      : 'text-soft-gray hover:text-white hover:bg-gray-800/50'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                className="mt-4 bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-cyan/90 hover:to-neon-blue/90 text-dark-bg font-bold border-2 border-neon-blue shadow-lg shadow-neon-blue/40 hover:shadow-neon-blue/60 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
                onClick={() => {
                  onPageChange('pricing');
                  setIsMobileMenuOpen(false);
                }}
              >
                Start Your Free IPTV Prime Trial
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}