import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../error_image/ImageWithFallback';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Users,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react';

interface TestimonialsPageProps {
  onPageChange: (page: string) => void;
}

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHRlc3RpbW9uaWFscyUyMHJldmlld3N8ZW58MXx8fHwxNzU3MDA4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    plan: "Premium",
    review: "IPTV Prime has completely transformed our family's entertainment experience. The 4K quality is stunning, and we love having access to international channels. The setup was incredibly easy, and customer support is outstanding. Best streaming service we've ever used!",
    date: "2024-01-15",
    highlight: "4K Quality & International Channels"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHRlc3RpbW9uaWFscyUyMHJldmlld3N8ZW58MXx8fHwxNzU3MDA4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    plan: "VIP",
    review: "As a tech enthusiast, I'm impressed by IPTV Prime's technology and reliability. Zero buffering, crystal clear picture, and the multi-device support is perfect for my smart home setup. The sports package is incredible - never miss a game!",
    date: "2024-01-12",
    highlight: "Zero Buffering & Sports Package"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHRlc3RpbW9uaWFscyUyMHJldmlld3N8ZW58MXx8fHwxNzU3MDA4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    plan: "Standard",
    review: "IPTV Prime exceeded all my expectations! The channel variety is amazing, and I love being able to watch my favorite shows from back home. The mobile app works perfectly, and the pricing is very reasonable. Highly recommend to everyone!",
    date: "2024-01-10",
    highlight: "Amazing Channel Variety"
  },
  {
    id: 4,
    name: "David Kumar",
    location: "Sydney, Australia",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHRlc3RpbW9uaWFscyUyMHJldmlld3N8ZW58MXx8fHwxNzU3MDA4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    plan: "Premium",
    review: "Switched from cable to IPTV Prime six months ago and couldn't be happier. The savings are significant, and the service quality is superior. DVR functionality works flawlessly, and 24/7 support team is always helpful.",
    date: "2024-01-08",
    highlight: "Superior Quality & Great Savings"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "Berlin, Germany",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHRlc3RpbW9uaWFscyUyMHJldmlld3N8ZW58MXx8fHwxNzU3MDA4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    plan: "Basic",
    review: "IPTV Prime is perfect for our family budget and entertainment needs. Easy installation, great picture quality, and the kids love the cartoon channels. Customer service responds quickly and resolves issues professionally.",
    date: "2024-01-05",
    highlight: "Family-Friendly & Budget-Perfect"
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Dubai, UAE",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHRlc3RpbW9uaWFscyUyMHJldmlld3N8ZW58MXx8fHwxNzU3MDA4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    plan: "VIP",
    review: "Outstanding service with global coverage! IPTV Prime delivers content from every corner of the world with exceptional quality. The 8K channels are breathtaking, and the service reliability is unmatched. Worth every penny!",
    date: "2024-01-03",
    highlight: "Global Coverage & 8K Quality"
  }
];

const stats = [
  {
    icon: Users,
    number: "10M+",
    label: "Happy IPTV Prime Users",
    color: "neon-cyan"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Average IPTV Prime Rating",
    color: "neon-purple"
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries Using IPTV Prime",
    color: "neon-blue"
  },
  {
    icon: Award,
    number: "99.9%",
    label: "IPTV Prime Uptime",
    color: "neon-cyan"
  }
];

export function TestimonialsPage({ onPageChange }: TestimonialsPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

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
            What Our <span className="text-neon-cyan animate-glow">IPTV Prime</span> Users Say
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what millions of satisfied IPTV Prime customers 
            around the world are saying about their streaming experience.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={`bg-dark-surface border-${stat.color}/30 hover:border-${stat.color} p-6 transition-all duration-300 hover:shadow-lg hover:shadow-${stat.color}/20`}>
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-${stat.color}/10 rounded-full`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-dark-surface border-neon-cyan/30 overflow-hidden">
            <div className="relative h-96 md:h-80">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 p-8 flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
                      {/* Avatar & Info */}
                      <div className="text-center md:text-left">
                        <div className="relative w-24 h-24 mx-auto md:mx-0 mb-4">
                          <ImageWithFallback
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover border-4 border-neon-cyan/50"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-neon-cyan rounded-full p-2">
                            <Badge className="bg-neon-cyan text-dark-bg text-xs px-2 py-1">
                              {testimonial.plan}
                            </Badge>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{testimonial.location}</p>
                        <div className="flex justify-center md:justify-start mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <Badge variant="outline" className="border-neon-purple/50 text-neon-purple text-xs">
                          {testimonial.highlight}
                        </Badge>
                      </div>

                      {/* Review Content */}
                      <div className="md:col-span-2">
                        <Quote className="w-12 h-12 text-neon-cyan/30 mb-4" />
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                          "{testimonial.review}"
                        </p>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>IPTV Prime User since {new Date(testimonial.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark-bg/80 hover:bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark-bg/80 hover:bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                onClick={nextSlide}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-neon-cyan animate-pulse-glow'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-dark-surface border-neon-cyan/20 hover:border-neon-cyan p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                  <Badge className="ml-auto bg-neon-purple/20 text-neon-purple">
                    {testimonial.plan}
                  </Badge>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  "{testimonial.review}"
                </p>

                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan text-xs">
                  {testimonial.highlight}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Trusted by Millions of <span className="text-neon-cyan">IPTV Prime</span> Users Worldwide
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["🌟 Trustpilot Rated", "✅ Verified Reviews", "🏆 Industry Leader", "🔒 Secure Platform", "📞 24/7 Support"].map((trust, index) => (
              <motion.div
                key={trust}
                className="bg-dark-surface px-6 py-3 rounded-full border border-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-gray-300">{trust}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Join Our <span className="text-neon-cyan animate-glow">IPTV Prime</span> Community
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the streaming service that millions trust. Start your IPTV Prime journey today 
            and discover why our users give us 5-star reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 animate-pulse-glow"
              onClick={() => onPageChange('pricing')}
            >
              <Play className="w-5 h-5 mr-2" />
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