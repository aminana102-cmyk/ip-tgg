import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ImageWithFallback } from '../error_image/ImageWithFallback';
import { MovingBanner } from '../MovingBanner';
import { DeviceIcons } from '../DeviceIcons';
import { 
  Tv, 
  Zap, 
  Smartphone, 
  Headphones, 
  Star, 
  Play,
  Wifi,
  Shield,
  Clock,
  Globe,
  HelpCircle
} from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const benefits = [
  {
    icon: Tv,
    title: "HD Channels",
    description: "Access thousands of IPTV Prime HD channels with crystal clear quality"
  },
  {
    icon: Zap,
    title: "Fast Streaming",
    description: "Experience lightning-fast streaming with IPTV Prime's optimized servers"
  },
  {
    icon: Smartphone,
    title: "Multi-Device Access",
    description: "Watch IPTV Prime on any device - TV, phone, tablet, or computer"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get round-the-clock support from our IPTV Prime experts"
  }
];

const features = [
  {
    icon: Shield,
    title: "Secure Streaming",
    description: "IPTV Prime uses advanced encryption for secure viewing"
  },
  {
    icon: Clock,
    title: "On-Demand Content",
    description: "Watch your favorite shows anytime with IPTV Prime's VOD library"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "IPTV Prime delivers content worldwide with reliable service"
  },
  {
    icon: Wifi,
    title: "Adaptive Quality",
    description: "IPTV Prime automatically adjusts quality based on your connection"
  }
];

const streamingApps = [
  "Netflix", "Prime Video", "Disney+", "Hulu", "HBO Max", "Apple TV+", "Paramount+", "Peacock"
];

const faqs = [
  {
    question: "What is IPTV Prime and how does it work?",
    answer: "IPTV Prime is a premium internet-based television service that delivers live TV channels, movies, and on-demand content directly to your devices via the internet. Unlike traditional cable or satellite TV, IPTV Prime uses your internet connection to stream high-quality content in HD, 4K, and even 8K resolution to any compatible device worldwide."
  },
  {
    question: "What devices are compatible with IPTV Prime?",
    answer: "IPTV Prime works on virtually all devices including Smart TVs (Samsung, LG, Sony), Android/iOS smartphones and tablets, computers (Windows, Mac, Linux), streaming devices (Fire TV Stick, Roku, Apple TV, Chromecast), gaming consoles, and any device that supports IPTV apps like VLC Media Player or dedicated IPTV applications."
  },
  {
    question: "How many devices can I use simultaneously?",
    answer: "With IPTV Prime, you can use multiple devices simultaneously depending on your subscription plan. Our plans range from 1 to 5 devices, and we offer a 10% discount when you subscribe for multiple devices. Each device can stream different content at the same time without affecting the quality."
  },
  {
    question: "What internet speed do I need for IPTV Prime?",
    answer: "For optimal performance: HD quality requires 5-10 Mbps, 4K quality requires 15-25 Mbps, and 8K quality requires 30+ Mbps. IPTV Prime features adaptive streaming technology that automatically adjusts quality based on your internet connection to ensure smooth playback without buffering."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! IPTV Prime offers a 48-hour free trial that includes access to over 2,000+ channels in HD quality across all supported devices. This allows you to test our service quality, channel selection, and compatibility with your devices before making a purchase decision."
  },
  {
    question: "What channels and content are included?",
    answer: "IPTV Prime includes over 50,000+ live TV channels from around the world, including sports, movies, news, entertainment, kids' content, and premium channels. We also offer an extensive Video on Demand (VOD) library with thousands of movies and TV series, plus 24/7 sports channels and PPV events."
  },
  {
    question: "Is IPTV Prime service reliable?",
    answer: "Yes, IPTV Prime guarantees 99.9% uptime with our premium server infrastructure. We use multiple backup servers worldwide to ensure uninterrupted service. Our advanced technology prevents buffering and provides consistent high-quality streaming across all supported devices."
  },
  {
    question: "How do I get started with IPTV Prime?",
    answer: "Getting started is simple: 1) Choose your preferred subscription plan, 2) Complete the secure checkout process, 3) Receive your login credentials via email within minutes, 4) Download the recommended IPTV app for your device, 5) Enter your credentials and start enjoying premium content immediately. Our 24/7 support team is available to assist with setup if needed."
  }
];

export function HomePage({ onPageChange }: HomePageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-light-gray overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 min-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-dark-bg to-neon-purple/10"></div>
        
        {/* Background with app icons */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mobile-text-scale">
                  <span className="text-neon-cyan">IPTV Prime Canada:</span>{' '}
                  <span className="text-white">Best Premium</span><br />
                  <span className="text-white">Streaming Experience</span>
                </h1>
              </motion.div>

              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mobile-text-scale"
                variants={itemVariants}
              >
                Experience the best in streaming with over <strong className="text-neon-cyan">+50,000 live channels</strong>, stunning 
                <strong className="text-neon-cyan"> 4K/8K quality</strong>, and flawless performance on all your devices. 
                <strong className="text-neon-cyan"> 99.9% uptime</strong> guaranteed.
              </motion.p>

              {/* Features */}
              <motion.div 
                className="flex flex-wrap gap-4 sm:gap-6"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                  <span className="text-gray-300">HD & 4K Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                  <span className="text-gray-300">+50,000 Channels</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                  <span className="text-gray-300">24/7 Support</span>
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-cyan/90 hover:to-neon-blue/90 text-dark-bg font-bold px-8 py-4 rounded-full border-2 border-neon-blue shadow-lg shadow-neon-blue/40 hover:shadow-neon-blue/60 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
                  onClick={() => {
                    // Set a default trial plan for checkout
                    const trialPlan = {
                      name: 'Free Trial',
                      price: 0,
                      devices: 1,
                      duration: '48 hours',
                      features: ['2,000+ Channels', 'HD Quality', 'All Devices', '48h Access'],
                      isPopular: false
                    };
                    localStorage.setItem('selectedPlan', JSON.stringify(trialPlan));
                    onPageChange('checkout');
                  }}
                >
                  🎁 Get Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-400 text-gray-300 hover:bg-gray-400/10 px-8 py-4 rounded-full transition-all duration-300"
                  onClick={() => onPageChange('pricing')}
                >
                  View Plans
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
              animate={{
                x: [0, 10, 0]
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity
              }}
            >
              <div className="relative bg-dark-surface/50 rounded-3xl p-4 backdrop-blur-sm border border-neon-cyan/20">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1631408657211-f485611484af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB0ZWxldmlzaW9uJTIwZW50ZXJ0YWlubWVudCUyMG1vZGVybnxlbnwxfHx8fDE3NTc2ODYyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="IPTV Prime - Premium Streaming Experience - Modern TV streaming setup"
                      className="w-full h-full object-cover rounded-2xl"
                      loading="eager"
                    />
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Device Icons Section */}
      <DeviceIcons />



      {/* Benefits Section */}
      <section className="py-20 px-4 bg-dark-surface/50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-neon-cyan animate-glow">IPTV Prime</span>?
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              IPTV Prime delivers unmatched streaming quality and reliability for the ultimate entertainment experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-dark-surface border-neon-cyan/30 hover:border-neon-cyan p-8 text-center h-full transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-neon-cyan/10 rounded-full">
                      <benefit.icon className="w-8 h-8 text-neon-cyan" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-light-gray">{benefit.title}</h3>
                  <p className="text-soft-gray">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-dark-surface/80 border-neon-purple/30 hover:border-neon-purple p-6 text-center h-full transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-neon-purple" />
                  </div>
                  <h4 className="font-bold mb-2 text-light-gray">{feature.title}</h4>
                  <p className="text-sm text-soft-gray">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Banner Section */}
      <MovingBanner />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-dark-surface/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-neon-cyan" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Frequently Asked <span className="text-neon-cyan animate-glow">Questions</span>
              </h2>
            </div>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              Everything you need to know about IPTV Prime. Can't find the answer you're looking for? 
              <span 
                className="text-neon-cyan hover:text-neon-cyan/80 cursor-pointer ml-1 underline"
                onClick={() => onPageChange('contact')}
              >
                Contact our support team
              </span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-dark-surface border border-neon-cyan/20 rounded-lg px-6 hover:border-neon-cyan/40 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:text-neon-cyan transition-colors duration-300 py-6">
                      <span className="font-semibold text-lg text-light-gray pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-soft-gray leading-relaxed pb-6 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* FAQ CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-dark-surface border border-neon-cyan/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-light-gray">
                Still have questions?
              </h3>
              <p className="text-soft-gray mb-6">
                Our expert support team is available 24/7 to help you with any questions about IPTV Prime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-neon-cyan hover:bg-neon-cyan/90 text-dark-bg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/30"
                  onClick={() => window.open('https://wa.me/212709668859', '_blank')}
                >
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                  onClick={() => onPageChange('faq')}
                >
                  View All FAQs
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-neon-cyan animate-glow">IPTV Prime</span>?
            </h2>
            <p className="text-xl text-soft-gray mb-8 max-w-2xl mx-auto">
              Join millions of satisfied customers who trust IPTV Prime for their entertainment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 btn-elegant-hover"
                onClick={() => onPageChange('pricing')}
              >
                Get IPTV Prime Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neon-border bg-transparent text-neon-purple hover:bg-neon-purple/10 btn-elegant-hover"
                onClick={() => onPageChange('contact')}
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}