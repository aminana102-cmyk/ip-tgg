import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../error_image/ImageWithFallback';
import { 
  Users, 
  Globe, 
  Award, 
  Zap, 
  Shield, 
  Heart,
  Tv,
  Smartphone,
  Tablet,
  Monitor,
  Target,
  TrendingUp
} from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

const milestones = [
  {
    year: "2018",
    title: "IPTV Prime Founded",
    description: "Started with a vision to revolutionize streaming technology"
  },
  {
    year: "2019",
    title: "1M+ Users",
    description: "IPTV Prime reached its first million satisfied customers"
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "IPTV Prime launched in 50+ countries worldwide"
  },
  {
    year: "2023",
    title: "10M+ Subscribers",
    description: "IPTV Prime became a leader in streaming technology"
  },
  {
    year: "2024",
    title: "4K & 8K Support",
    description: "IPTV Prime introduced ultra-high definition streaming"
  }
];

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "IPTV Prime delivers consistent, high-quality streaming 24/7"
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every IPTV Prime feature is designed with our users in mind"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "IPTV Prime continuously pushes the boundaries of streaming technology"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about delivering the best IPTV Prime experience"
  }
];

const devices = [
  { icon: Tv, name: "Smart TV", description: "Native IPTV Prime apps" },
  { icon: Smartphone, name: "Mobile", description: "iOS & Android IPTV Prime" },
  { icon: Tablet, name: "Tablet", description: "Optimized IPTV Prime interface" },
  { icon: Monitor, name: "Computer", description: "Web-based IPTV Prime access" }
];

export function AboutPage({ onPageChange }: AboutPageProps) {
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
            What is <span className="text-neon-cyan animate-glow">IPTV Prime</span>?
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            IPTV Prime is the world's leading streaming platform, delivering premium entertainment 
            experiences to millions of users across the globe. We're revolutionizing how people 
            consume media with cutting-edge technology and unparalleled service quality.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden neon-border">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616469829941-c7200edec809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwc3RyZWFtaW5nJTIwZGV2aWNlc3xlbnwxfHx8fDE3NTcwMDgwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="IPTV Prime Technology Stack"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Our Story */}
        <section className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              The <span className="text-neon-purple">IPTV Prime</span> Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded with a mission to make premium entertainment accessible worldwide, 
              IPTV Prime has grown from a small startup to a global streaming powerhouse.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Our Mission</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At IPTV Prime, we believe that everyone deserves access to world-class entertainment. 
                Our mission is to deliver affordable, reliable, and high-quality streaming services 
                that connect people with the content they love, no matter where they are in the world.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                IPTV Prime combines cutting-edge technology with user-centric design to create 
                streaming experiences that are both powerful and intuitive. From our advanced 
                content delivery network to our 24/7 customer support, every aspect of IPTV Prime 
                is built with our users' satisfaction in mind.
              </p>
              <Button
                className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90"
                onClick={() => onPageChange('contact')}
              >
                Join IPTV Prime Today
              </Button>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-dark-surface border-neon-cyan/30 p-6 text-center">
                  <Globe className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neon-cyan">50+</div>
                  <div className="text-sm text-gray-400">Countries Served</div>
                </Card>
                <Card className="bg-dark-surface border-neon-purple/30 p-6 text-center">
                  <Users className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neon-purple">10M+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </Card>
                <Card className="bg-dark-surface border-neon-cyan/30 p-6 text-center">
                  <Tv className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neon-cyan">20K+</div>
                  <div className="text-sm text-gray-400">Premium Channels</div>
                </Card>
                <Card className="bg-dark-surface border-neon-purple/30 p-6 text-center">
                  <Award className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neon-purple">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-neon-cyan">IPTV Prime</span> Journey
            </h2>
            <p className="text-xl text-gray-300">
              Key milestones in our mission to revolutionize streaming
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-purple"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-dark-surface border-neon-cyan/30 hover:border-neon-cyan p-6 transition-all duration-300">
                      <div className="text-3xl font-bold text-neon-cyan mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-neon-cyan rounded-full border-4 border-dark-bg animate-pulse-glow"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-neon-purple">IPTV Prime</span> Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do at IPTV Prime
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-dark-surface border-neon-purple/30 hover:border-neon-purple p-8 text-center h-full transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/20">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-neon-purple/10 rounded-full">
                      <value.icon className="w-8 h-8 text-neon-purple" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Multi-Device Support */}
        <section className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-neon-cyan">IPTV Prime</span> Multi-Device Streaming
            </h2>
            <p className="text-xl text-gray-300">
              Watch IPTV Prime anywhere, anytime, on any device
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devices.map((device, index) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center"
              >
                <div className="bg-dark-surface rounded-3xl p-8 neon-border hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="p-6 bg-neon-cyan/10 rounded-full animate-float">
                      <device.icon className="w-12 h-12 text-neon-cyan" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{device.name}</h3>
                  <p className="text-gray-300">{device.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join <span className="text-neon-cyan animate-glow">IPTV Prime</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the future of streaming with IPTV Prime. Join millions of satisfied customers 
            who trust us for their entertainment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 animate-pulse-glow"
              onClick={() => onPageChange('pricing')}
            >
              Start IPTV Prime Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border bg-transparent text-neon-purple hover:bg-neon-purple/10"
              onClick={() => onPageChange('contact')}
            >
              Contact IPTV Prime Team
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}