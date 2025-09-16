import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

interface FAQPageProps {
  onPageChange: (page: string) => void;
}

const faqCategories = [
  {
    name: "General Questions",
    icon: HelpCircle,
    faqs: [
      {
        question: "📺 What is IPTV Prime and How Does It Work?",
        answer: "IPTV Prime lets you stream live TV channels and on-demand content directly over the Internet, bypassing traditional cable or satellite services. Just connect your device to the internet, install the IPTV Prime app, and instantly access thousands of live channels, movies, and series from around the world!"
      },
      {
        question: "🌎 Can I Use IPTV Prime Outside of Canada?",
        answer: "Yes! IPTV Prime works worldwide with a stable internet connection (minimum 10 Mbps recommended). Whether in Canada, the USA, Europe, or elsewhere, enjoy full access to channels and on-demand content."
      },
      {
        question: "🔥 Why Choose IPTV Prime Over Other IPTV Services?",
        answer: "- 97,000+ live channels and VOD options\n- 4K / Full HD streaming with Anti-Freeze™ 3.0 technology\n- Instant activation — no waiting\n- 24/7 responsive customer support\n- Compatible with all devices without complicated setups\n- Affordable pricing — save over $1800/year compared to traditional TV"
      },
      {
        question: "⚖️ Is IPTV Prime Legal in Canada?",
        answer: "Yes. IPTV Prime is legal when accessing licensed or freely distributed content. Users are responsible for following local laws. Our team is always available to provide guidance."
      },
      {
        question: "🧠 Why IPTV Prime is #1 in 2025",
        answer: "- 97,000+ channels & VOD\n- Full HD & 4K quality\n- Instant activation\n- No hidden fees\n- 24/7 human support\n- Trusted globally"
      }
    ]
  },
  {
    name: "Device Compatibility & Installation",
    icon: MessageCircle,
    faqs: [
      {
        question: "📱 Is IPTV Prime Compatible with My Device?",
        answer: "Absolutely! IPTV Prime works on almost all devices, including:\n- Smart TVs (Samsung, LG, Android TV, etc.)\n- Amazon Fire Stick and Fire TV\n- Android Boxes and TV Boxes\n- iPads (iOS)\n- Android smartphones and tablets\n- Windows PCs and Mac computers\nIf your device can access the internet, IPTV Prime will most likely work flawlessly."
      },
      {
        question: "🛠️ How to Install IPTV Prime on Your Device",
        answer: "Once you place your order, you'll receive a step-by-step installation guide via email. Most setups take less than 5 minutes:\n1. Download the recommended IPTV Prime app.\n2. Enter the login credentials provided.\n3. Start watching your favorite channels instantly!\nWe also provide video tutorials and 24/7 support for any setup issues."
      },
      {
        question: "🏆 Best IPTV Prime Player Apps",
        answer: "- Tivimate (Android TV, Fire Stick)\n- IPTV Smarters Pro (iOS, Android, Windows, Mac)\n- Smart IPTV (SIPTV) for Smart TVs"
      },
      {
        question: "📦 Multiple Devices",
        answer: "IPTV Prime supports multiple devices (one active connection per subscription). Multi-connection plans are available — contact us for bundle deals."
      }
    ]
  },
  {
    name: "Streaming Quality & Performance",
    icon: Phone,
    faqs: [
      {
        question: "📈 How to Improve IPTV Prime Streaming Quality",
        answer: "- Use a stable internet connection (10 Mbps minimum, 25 Mbps+ for 4K)\n- Prefer wired Ethernet over Wi-Fi if possible\n- Close unused apps or devices consuming bandwidth\n- Use our recommended IPTV Prime player apps\n- Restart your device/router occasionally"
      },
      {
        question: "🌐 Will IPTV Prime Slow Down My Internet?",
        answer: "No. IPTV Prime uses minimal bandwidth:\n- 10 Mbps for SD\n- 20 Mbps for HD\n- 30 Mbps+ for 4K Ultra HD\nClose unused devices for optimal streaming."
      },
      {
        question: "🛠️ Troubleshooting Buffering Issues",
        answer: "- Restart your app or device\n- Restart your router\n- Switch to wired Ethernet\n- Use our recommended apps\n- Contact our 24/7 support"
      },
      {
        question: "🛡️ Do I Need a VPN to Use IPTV Prime?",
        answer: "No VPN is required. IPTV Prime's Anti-Freeze™ 3.0 ensures secure, stable streaming. VPNs are optional for added privacy or travel."
      }
    ]
  },
  {
    name: "Billing & Support",
    icon: Mail,
    faqs: [
      {
        question: "📩 When Will I Receive My IPTV Prime Subscription Details?",
        answer: "Immediately after payment confirmation, you'll get an email containing:\n- Your IPTV Prime login details\n- Setup instructions\n- App recommendations for your device\nIf you don't see it within 10 minutes, check your spam folder or contact our support — available 24/7!"
      },
      {
        question: "🔄 Does IPTV Prime Auto-Renew?",
        answer: "No. IPTV Prime subscriptions are one-time payments with no hidden automatic renewals. You can renew manually when your plan expires if you wish to continue using the service."
      },
      {
        question: "💳 Payment Methods",
        answer: "- Credit Cards (Visa, Mastercard)\n- PayPal\n- Cryptocurrency (Bitcoin, Ethereum, USDT)\n- And more"
      },
      {
        question: "🛡️ 30-Day Money-Back Guarantee",
        answer: "Not satisfied? Contact support within 30 days for a full refund — no questions asked."
      },
      {
        question: "💬 Need Help?",
        answer: "Our customer service is available 24/7.\n👉 [Contact Us Here]"
      }
    ]
  },
  {
    name: "Sports & Entertainment",
    icon: HelpCircle,
    faqs: [
      {
        question: "🎯 Sports Channels and Events on IPTV Prime",
        answer: "- Champions League, Premier League, La Liga, Serie A\n- NBA, NFL, NHL, MLB\n- UFC, Boxing PPV Events\n- Formula 1, MotoGP, and more\nEnjoy live sports in Full HD and 4K with no extra fees."
      }
    ]
  }
];

export function FAQPage({ onPageChange }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on search query
  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-neon-cyan animate-glow">IPTV Prime</span> FAQ
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to frequently asked questions about IPTV Prime. 
            Get help with setup, billing, channels, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-cyan w-5 h-5" />
            <Input
              type="text"
              placeholder="Search IPTV Prime FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-4 bg-dark-surface border-neon-cyan/30 focus:border-neon-cyan text-white placeholder-gray-400 neon-border"
            />
          </div>
        </motion.div>

        {/* FAQ Categories and Questions */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-dark-surface border-neon-cyan/30 p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-neon-cyan/10 rounded-full mr-4">
                    <category.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h2 className="text-2xl font-bold text-neon-cyan">{category.name}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-700 rounded-lg overflow-hidden hover:border-neon-cyan/50 transition-all duration-300"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-neon-cyan/5 text-white hover:text-neon-cyan transition-all duration-300">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {searchQuery && filteredFAQs.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-neon-cyan" />
            </div>
            <h3 className="text-2xl font-bold mb-4">No IPTV Prime FAQ Found</h3>
            <p className="text-gray-400 mb-6">
              We couldn't find any FAQ matching your search. Try different keywords or browse all categories.
            </p>
            <Button
              onClick={() => setSearchQuery('')}
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90"
            >
              Show All IPTV Prime FAQ
            </Button>
          </motion.div>
        )}

        {/* Quick Help Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-dark-surface border-neon-purple/30 hover:border-neon-purple p-8 text-center transition-all duration-300">
            <MessageCircle className="w-12 h-12 text-neon-purple mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Still Need Help?</h3>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Our IPTV Prime support team is here to help 24/7.
            </p>
            <Button
              className="neon-border bg-neon-purple text-white hover:bg-neon-purple/90"
              onClick={() => onPageChange('contact')}
            >
              Contact IPTV Prime Support
            </Button>
          </Card>

          <Card className="bg-dark-surface border-neon-cyan/30 hover:border-neon-cyan p-8 text-center transition-all duration-300">
            <HelpCircle className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Quick Setup Guide</h3>
            <p className="text-gray-300 mb-6">
              New to IPTV Prime? Check out our comprehensive setup guides and video tutorials.
            </p>
            <Button
              className="neon-border bg-transparent text-neon-cyan hover:bg-neon-cyan/10"
              onClick={() => onPageChange('support')}
            >
              View IPTV Prime Guides
            </Button>
          </Card>
        </motion.div>

        {/* Popular Questions */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8">
            Popular <span className="text-neon-cyan">IPTV Prime</span> Questions
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "IPTV Prime Setup",
              "Channel List",
              "4K Streaming",
              "Multi-Device",
              "Billing Help",
              "Troubleshooting",
              "Free Trial",
              "Cancellation"
            ].map((topic, index) => (
              <motion.button
                key={topic}
                className="bg-dark-surface px-4 py-2 rounded-full border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSearchQuery(topic)}
              >
                {topic}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Try <span className="text-neon-cyan animate-glow">IPTV Prime</span>?
          </h3>
          <p className="text-gray-300 mb-6">
            Start your IPTV Prime journey today with our free trial and experience premium streaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90"
              onClick={() => onPageChange('pricing')}
            >
              Start IPTV Prime Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border bg-transparent text-neon-purple hover:bg-neon-purple/10"
              onClick={() => onPageChange('channels')}
            >
              View IPTV Prime Channels
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}