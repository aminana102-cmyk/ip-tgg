import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, FileText, RefreshCw, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onPageChange: (page: string) => void;
  pageType: 'terms' | 'privacy' | 'refund';
}

const legalContent = {
  terms: {
    title: "IPTV Prime Terms of Service",
    icon: FileText,
    lastUpdated: "January 1, 2024",
    sections: [
      {
        title: "1. IPTV Prime Service Agreement",
        content: "By using IPTV Prime, you agree to these terms and conditions. IPTV Prime provides streaming services subject to the terms outlined in this agreement."
      },
      {
        title: "2. IPTV Prime Subscription",
        content: "Your IPTV Prime subscription grants you access to our streaming content library. Subscriptions are billed monthly or annually as selected during signup."
      },
      {
        title: "3. Acceptable Use of IPTV Prime",
        content: "You may use IPTV Prime for personal, non-commercial purposes only. You agree not to redistribute, modify, or reverse engineer any IPTV Prime content or software."
      },
      {
        title: "4. IPTV Prime Content Rights",
        content: "All content provided through IPTV Prime is licensed and protected by copyright. IPTV Prime retains all rights to the service and content."
      },
      {
        title: "5. Termination of IPTV Prime Service",
        content: "Either party may terminate the IPTV Prime service agreement at any time. Upon termination, your access to IPTV Prime will be discontinued."
      }
    ]
  },
  privacy: {
    title: "IPTV Prime Privacy Policy",
    icon: Shield,
    lastUpdated: "January 1, 2024",
    sections: [
      {
        title: "1. Information IPTV Prime Collects",
        content: "IPTV Prime collects information necessary to provide our streaming services, including account details, viewing preferences, and technical data."
      },
      {
        title: "2. How IPTV Prime Uses Your Information",
        content: "We use your information to deliver IPTV Prime services, improve user experience, and communicate important service updates."
      },
      {
        title: "3. IPTV Prime Data Protection",
        content: "IPTV Prime implements industry-standard security measures to protect your personal information and viewing data."
      },
      {
        title: "4. Information Sharing by IPTV Prime",
        content: "IPTV Prime does not sell your personal information. We may share data with service providers necessary for IPTV Prime operations."
      },
      {
        title: "5. Your IPTV Prime Privacy Rights",
        content: "You have the right to access, modify, or delete your IPTV Prime account information. Contact our support team for privacy-related requests."
      }
    ]
  },
  refund: {
    title: "IPTV Prime Refund Policy",
    icon: RefreshCw,
    lastUpdated: "January 1, 2024",
    sections: [
      {
        title: "1. IPTV Prime Money-Back Guarantee",
        content: "IPTV Prime offers a 30-day money-back guarantee for new subscriptions. If you're not satisfied with our service, request a full refund within 30 days."
      },
      {
        title: "2. IPTV Prime Refund Eligibility",
        content: "Refunds are available for first-time IPTV Prime subscribers only. Refund requests must be made within 30 days of initial subscription."
      },
      {
        title: "3. How to Request IPTV Prime Refund",
        content: "To request an IPTV Prime refund, contact our customer support team with your account details and reason for refund."
      },
      {
        title: "4. IPTV Prime Refund Processing",
        content: "Approved IPTV Prime refunds will be processed within 5-7 business days to your original payment method."
      },
      {
        title: "5. IPTV Prime Refund Exceptions",
        content: "Refunds are not available for accounts terminated for terms of service violations or after the 30-day guarantee period."
      }
    ]
  }
};

export function LegalPage({ onPageChange, pageType }: LegalPageProps) {
  const content = legalContent[pageType];
  const IconComponent = content.icon;

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            variant="ghost"
            className="mb-6 text-neon-cyan hover:text-neon-cyan/80"
            onClick={() => onPageChange('home')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to IPTV Prime Home
          </Button>
          
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-neon-cyan/10 rounded-full mr-4">
              <IconComponent className="w-8 h-8 text-neon-cyan" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {content.title}
              </h1>
              <Badge variant="outline" className="mt-2 border-neon-purple/50 text-neon-purple">
                Last Updated: {content.lastUpdated}
              </Badge>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            This document outlines the important legal terms and conditions for using IPTV Prime services.
          </p>
        </motion.div>

        {/* Legal Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-dark-surface border-neon-cyan/20 hover:border-neon-cyan/40 p-8 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-4 text-neon-cyan">
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Questions about IPTV Prime Legal Terms?
          </h3>
          <p className="text-gray-300 mb-6">
            If you have any questions about these terms or need clarification about IPTV Prime policies, 
            our legal team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90"
              onClick={() => onPageChange('contact')}
            >
              Contact IPTV Prime Legal Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border bg-transparent text-neon-purple hover:bg-neon-purple/10"
              onClick={() => onPageChange('faq')}
            >
              IPTV Prime FAQ
            </Button>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-8 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p>
            These terms are effective as of {content.lastUpdated} and apply to all IPTV Prime users. 
            We may update these terms periodically, and continued use of IPTV Prime constitutes acceptance of any changes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}