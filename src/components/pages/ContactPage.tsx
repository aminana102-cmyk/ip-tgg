import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Globe,
  Users,
  Headphones
} from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Get instant IPTV Prime support on WhatsApp",
    detail: "+212709668859",
    action: "Chat on WhatsApp",
    color: "neon-cyan",
    link: "https://wa.me/212709668859?text=Hello, I need help with IPTV Prime services"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your IPTV Prime questions",
    detail: "support@iptvprime.com",
    action: "Send Email",
    color: "neon-purple",
    link: "mailto:support@iptvprime.com"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call our IPTV Prime experts",
    detail: "+212709668859",
    action: "Call Now",
    color: "neon-blue",
    link: "tel:+212709668859"
  }
];

const supportFeatures = [
  {
    icon: Clock,
    title: "24/7 IPTV Prime Support",
    description: "Round-the-clock assistance for all IPTV Prime users"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "IPTV Prime support available in 15+ languages"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified IPTV Prime specialists ready to help"
  },
  {
    icon: Headphones,
    title: "Technical Assistance",
    description: "Complete IPTV Prime setup and troubleshooting"
  }
];

export function ContactPage({ onPageChange }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-24 pb-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-neon-cyan animate-glow">IPTV Prime</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about IPTV Prime? Need help with your subscription? 
            Our expert support team is here to assist you 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-dark-surface border-neon-cyan/30 p-8">
              <h2 className="text-3xl font-bold mb-6 text-neon-cyan">
                Subscribe to IPTV Prime
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to start your IPTV Prime journey? Fill out the form below and our team will get back to you within 2 hours.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`bg-dark-surface border-gray-600 text-white placeholder-gray-400 transition-all duration-300 ${
                          focusedField === 'name' ? 'border-neon-cyan shadow-lg shadow-neon-cyan/20' : ''
                        }`}
                        placeholder="Enter your full name"
                        required
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          className="absolute inset-0 rounded-lg border border-neon-cyan pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`bg-dark-surface border-gray-600 text-white placeholder-gray-400 transition-all duration-300 ${
                          focusedField === 'email' ? 'border-neon-cyan shadow-lg shadow-neon-cyan/20' : ''
                        }`}
                        placeholder="your.email@example.com"
                        required
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          className="absolute inset-0 rounded-lg border border-neon-cyan pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className={`bg-dark-surface border-gray-600 text-white placeholder-gray-400 transition-all duration-300 ${
                          focusedField === 'subject' ? 'border-neon-cyan shadow-lg shadow-neon-cyan/20' : ''
                        }`}
                        placeholder="IPTV Prime Subscription Inquiry"
                        required
                      />
                      {focusedField === 'subject' && (
                        <motion.div
                          className="absolute inset-0 rounded-lg border border-neon-cyan pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`bg-dark-surface border-gray-600 text-white placeholder-gray-400 min-h-32 transition-all duration-300 ${
                          focusedField === 'message' ? 'border-neon-cyan shadow-lg shadow-neon-cyan/20' : ''
                        }`}
                        placeholder="Tell us about your IPTV Prime needs, preferred subscription plan, or any questions you have..."
                        required
                      />
                      {focusedField === 'message' && (
                        <motion.div
                          className="absolute inset-0 rounded-lg border border-neon-cyan pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 animate-pulse-glow"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe to IPTV Prime
                    </Button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your interest in IPTV Prime! Our team will contact you within 2 hours to help you get started.
                  </p>
                  <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan animate-pulse-glow">
                    IPTV Prime Team Notified
                  </Badge>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neon-purple">
                Get IPTV Prime Support
              </h2>
              <p className="text-gray-300 mb-8">
                Choose your preferred way to contact our IPTV Prime support team. 
                We're here to help you 24/7 with any questions or technical issues.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <Card className={`bg-dark-surface border-${method.color}/30 hover:border-${method.color} p-6 transition-all duration-300 hover:shadow-lg hover:shadow-${method.color}/20`}>
                    <div className="flex items-center">
                      <div className={`p-3 bg-${method.color}/10 rounded-full mr-4`}>
                        <method.icon className={`w-6 h-6 text-${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white">{method.title}</h3>
                        <p className="text-gray-300 text-sm">{method.description}</p>
                        <p className={`text-${method.color} font-medium`}>{method.detail}</p>
                      </div>
                      <Button
                        size="sm"
                        className={`neon-border bg-transparent text-${method.color} hover:bg-${method.color}/10`}
                        onClick={() => window.open(method.link, '_blank')}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Support Features */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Why Choose <span className="text-neon-cyan">IPTV Prime</span> Support?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {supportFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start space-x-3 p-4 bg-dark-surface/50 rounded-lg border border-gray-700 hover:border-neon-cyan/30 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <feature.icon className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                      <p className="text-gray-400 text-xs">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Information */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-dark-surface border-neon-purple/30 p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-neon-purple mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">IPTV Prime Headquarters</h3>
                <p className="text-gray-300 text-sm">
                  123 Streaming Avenue<br />
                  Tech City, CA 90210<br />
                  United States
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-neon-cyan mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">IPTV Prime Support Hours</h3>
                <p className="text-gray-300 text-sm">
                  24/7 Live Chat & Email<br />
                  Phone: Mon-Fri 8AM-8PM PST<br />
                  Weekends: 10AM-6PM PST
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-neon-blue mx-auto mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">Global IPTV Prime Service</h3>
                <p className="text-gray-300 text-sm">
                  Serving 50+ Countries<br />
                  15+ Language Support<br />
                  Local IPTV Prime Representatives
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">
            Quick <span className="text-neon-cyan">IPTV Prime</span> Actions
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90"
              onClick={() => onPageChange('pricing')}
            >
              View IPTV Prime Plans
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border bg-transparent text-neon-purple hover:bg-neon-purple/10"
              onClick={() => onPageChange('faq')}
            >
              IPTV Prime FAQ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border bg-transparent text-neon-blue hover:bg-neon-blue/10"
              onClick={() => onPageChange('support')}
            >
              IPTV Prime Help Center
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}