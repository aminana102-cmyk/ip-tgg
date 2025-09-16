import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { 
  Search, 
  Book, 
  Settings, 
  CreditCard, 
  MessageCircle,
  Phone,
  Mail,
  Video,
  Download,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  PlayCircle
} from 'lucide-react';

interface SupportPageProps {
  onPageChange: (page: string) => void;
}

const supportCategories = [
  {
    id: 'installation',
    name: 'Installation & Setup',
    icon: Settings,
    description: 'Get IPTV Prime running on all your devices',
    articles: 15,
    color: 'neon-cyan'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    icon: AlertCircle,
    description: 'Solve common IPTV Prime issues quickly',
    articles: 22,
    color: 'neon-purple'
  },
  {
    id: 'billing',
    name: 'Billing & Payments',
    icon: CreditCard,
    description: 'Manage your IPTV Prime subscription',
    articles: 8,
    color: 'neon-blue'
  },
  {
    id: 'features',
    name: 'Features & Usage',
    icon: PlayCircle,
    description: 'Learn about IPTV Prime capabilities',
    articles: 18,
    color: 'neon-cyan'
  }
];

const popularArticles = [
  {
    title: "How to Install IPTV Prime on Smart TV",
    category: "Installation",
    readTime: "5 min",
    difficulty: "Easy",
    views: "15.2K"
  },
  {
    title: "IPTV Prime Not Working? Quick Fixes",
    category: "Troubleshooting",
    readTime: "3 min",
    difficulty: "Easy",
    views: "12.8K"
  },
  {
    title: "Setting Up IPTV Prime on Multiple Devices",
    category: "Installation",
    readTime: "8 min",
    difficulty: "Medium",
    views: "9.5K"
  },
  {
    title: "How to Change IPTV Prime Subscription Plan",
    category: "Billing",
    readTime: "2 min",
    difficulty: "Easy",
    views: "8.1K"
  },
  {
    title: "IPTV Prime EPG Guide Setup",
    category: "Features",
    readTime: "6 min",
    difficulty: "Medium",
    views: "7.3K"
  },
  {
    title: "Optimizing IPTV Prime for 4K Streaming",
    category: "Features",
    readTime: "4 min",
    difficulty: "Medium",
    views: "6.9K"
  }
];

const quickActions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant IPTV Prime support",
    action: "Start Chat",
    available: true,
    color: "neon-cyan"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call our IPTV Prime experts",
    action: "Call Now",
    available: true,
    color: "neon-purple"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions",
    action: "Send Email",
    available: true,
    color: "neon-blue"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch IPTV Prime guides",
    action: "Watch Now",
    available: true,
    color: "neon-cyan"
  }
];

const systemStatus = [
  { service: "IPTV Prime Streaming", status: "operational", uptime: "99.9%" },
  { service: "IPTV Prime API", status: "operational", uptime: "99.8%" },
  { service: "IPTV Prime Support", status: "operational", uptime: "100%" },
  { service: "IPTV Prime Mobile Apps", status: "operational", uptime: "99.7%" }
];

export function SupportPage({ onPageChange }: SupportPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = selectedCategory === 'all' 
    ? popularArticles 
    : popularArticles.filter(article => 
        article.category.toLowerCase() === selectedCategory
      );

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-neon-cyan animate-glow">IPTV Prime</span> Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers, tutorials, and get support for your IPTV Prime experience. 
            Our comprehensive help center is here to guide you every step of the way.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-cyan w-6 h-6" />
            <Input
              type="text"
              placeholder="Search IPTV Prime help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 py-4 text-lg bg-dark-surface border-neon-cyan/30 focus:border-neon-cyan text-white placeholder-gray-400 neon-border"
            />
            <Button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90"
              size="sm"
            >
              Search
            </Button>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className={`bg-dark-surface border-${action.color}/30 hover:border-${action.color} p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-${action.color}/20`}>
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-${action.color}/10 rounded-full`}>
                    <action.icon className={`w-8 h-8 text-${action.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{action.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{action.description}</p>
                <Button
                  size="sm"
                  className={`neon-border bg-transparent text-${action.color} hover:bg-${action.color}/10 w-full`}
                >
                  {action.action}
                </Button>
                {action.available && (
                  <Badge className="mt-2 bg-green-500/20 text-green-400 border-green-500/50">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                    Available Now
                  </Badge>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Categories */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Browse <span className="text-neon-cyan">IPTV Prime</span> Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className={`bg-dark-surface border-${category.color}/30 hover:border-${category.color} p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-${category.color}/20`}>
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-${category.color}/10 rounded-full`}>
                      <category.icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white text-center">{category.name}</h3>
                  <p className="text-gray-400 text-sm text-center mb-4">{category.description}</p>
                  <div className="text-center">
                    <Badge className={`bg-${category.color}/20 text-${category.color} border-${category.color}/50`}>
                      {category.articles} Articles
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Articles */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Popular <span className="text-neon-purple">IPTV Prime</span> Help Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <Card className="bg-dark-surface border-neon-cyan/20 hover:border-neon-cyan p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="border-neon-purple/50 text-neon-purple text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 text-white hover:text-neon-cyan transition-colors">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        article.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        article.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {article.difficulty}
                    </Badge>
                    <span>{article.views} views</span>
                  </div>
                  
                  <Button
                    size="sm"
                    className="neon-border bg-transparent text-neon-cyan hover:bg-neon-cyan/10 w-full"
                  >
                    Read Article <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Status */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-neon-cyan">IPTV Prime</span> System Status
          </h2>
          <Card className="bg-dark-surface border-neon-cyan/30 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemStatus.map((system, index) => (
                <motion.div
                  key={system.service}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-3">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{system.service}</h4>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50 mb-2">
                    Operational
                  </Badge>
                  <p className="text-sm text-gray-400">{system.uptime} uptime</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          className="text-center bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Still Need <span className="text-neon-cyan animate-glow">IPTV Prime</span> Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our IPTV Prime support team is available 24/7 
            to help you with any questions or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 animate-pulse-glow"
              onClick={() => onPageChange('contact')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact IPTV Prime Support
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border bg-transparent text-neon-purple hover:bg-neon-purple/10"
              onClick={() => onPageChange('faq')}
            >
              <Book className="w-5 h-5 mr-2" />
              Browse IPTV Prime FAQ
            </Button>
          </div>
        </motion.div>

        {/* Support Hours */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-dark-surface border-neon-purple/30 p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-neon-purple">IPTV Prime Support Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-bold text-white mb-2">Live Chat</h4>
                <p className="text-gray-400">24/7 Available</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Phone Support</h4>
                <p className="text-gray-400">Mon-Fri: 8AM-8PM PST</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Email Support</h4>
                <p className="text-gray-400">Response within 2 hours</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}