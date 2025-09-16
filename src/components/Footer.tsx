import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Tv, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Linkedin
} from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const handlePageChangeWithScroll = (onPageChange: (page: string) => void, page: string) => {
  onPageChange(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const footerSections = [
  {
    title: "IPTV Prime Services",
    links: [
      { name: "IPTV Prime Pricing", page: "pricing" },
      { name: "IPTV Prime Channels", page: "channels" },
      { name: "About IPTV Prime", page: "about" },
      { name: "IPTV Prime Features", page: "home" }
    ]
  },
  {
    title: "IPTV Prime Support",
    links: [
      { name: "Help Center", page: "support" },
      { name: "IPTV Prime FAQ", page: "faq" },
      { name: "Contact Support", page: "contact" },
      { name: "IPTV Prime Setup Guide", page: "support" }
    ]
  },
  {
    title: "IPTV Prime Community",
    links: [
      { name: "IPTV Prime Blog", page: "blog" },
      { name: "Customer Reviews", page: "testimonials" },
      { name: "IPTV Prime News", page: "blog" },
      { name: "Success Stories", page: "testimonials" }
    ]
  },
  {
    title: "Legal & Privacy",
    links: [
      { name: "Terms of Service", page: "terms" },
      { name: "Privacy Policy", page: "privacy" },
      { name: "Refund Policy", page: "refund" },
      { name: "IPTV Prime Legal", page: "terms" }
    ]
  }
];

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#" },
  { icon: Twitter, name: "Twitter", url: "#" },
  { icon: Instagram, name: "Instagram", url: "#" },
  { icon: Youtube, name: "YouTube", url: "#" },
  { icon: Linkedin, name: "LinkedIn", url: "#" }
];

export function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-dark-surface border-t border-neon-cyan/20 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* IPTV Prime Brand */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Tv className="w-8 h-8 text-neon-cyan animate-glow" />
                <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-xl"></div>
              </div>
              <span className="text-2xl font-bold">
                IPTV <span className="text-neon-cyan animate-glow">Prime</span>
              </span>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              IPTV Prime delivers premium streaming experiences to millions of users worldwide. 
              Join the future of entertainment today.
            </p>
            <Button
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 animate-pulse-glow"
              onClick={() => handlePageChangeWithScroll(onPageChange, 'pricing')}
            >
              Start IPTV Prime Free Trial
            </Button>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4 text-neon-cyan">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <button
                      className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-left"
                      onClick={() => handlePageChangeWithScroll(onPageChange, link.page)}
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-neon-cyan/20 mb-8" />

        {/* Contact & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-neon-purple">Contact IPTV Prime</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-neon-cyan mr-3" />
                <span>support@iptvprime.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-neon-cyan mr-3" />
                <span>+1 (555) 123-IPTV</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-neon-cyan mr-3" />
                <span>123 Streaming Avenue, Tech City, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-neon-purple">Follow IPTV Prime</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="p-3 bg-dark-bg rounded-full border border-neon-cyan/30 hover:border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Stay updated with the latest IPTV Prime news, features, and exclusive offers.
            </p>
          </div>
        </div>

        <Separator className="bg-neon-cyan/20 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>© 2024 IPTV Prime. All rights reserved. Revolutionizing streaming technology worldwide.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <button
              className="hover:text-neon-cyan transition-colors duration-300"
              onClick={() => handlePageChangeWithScroll(onPageChange, 'terms')}
            >
              IPTV Prime Terms
            </button>
            <button
              className="hover:text-neon-cyan transition-colors duration-300"
              onClick={() => handlePageChangeWithScroll(onPageChange, 'privacy')}
            >
              IPTV Prime Privacy
            </button>
            <button
              className="hover:text-neon-cyan transition-colors duration-300"
              onClick={() => handlePageChangeWithScroll(onPageChange, 'refund')}
            >
              IPTV Prime Refunds
            </button>
          </div>
        </div>

        {/* Additional IPTV Prime Branding */}
        <div className="text-center mt-8 pt-6 border-t border-neon-cyan/10">
          <p className="text-xs text-gray-500">
            IPTV Prime - Premium IPTV Services | 4K/8K Streaming | 20,000+ Channels | Global Coverage
          </p>
        </div>
      </div>
    </footer>
  );
}