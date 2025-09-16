import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../error_image/ImageWithFallback';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Star,
  Play,
  Settings,
  Zap,
  Shield,
  Smartphone,
  Crown,
  Heart,
  CreditCard,
  Globe,
  Wrench,
  Rocket,
  Target
} from 'lucide-react';

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

const blogPosts = [
  {
    id: 1,
    title: "What is IPTV Prime and Why It's the Future of TV",
    excerpt: "In today's fast-paced digital world, traditional cable TV is no longer enough. IPTV Prime is changing the way we watch television by delivering live TV channels and on-demand content directly through the internet.",
    author: "IPTV Prime Team",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "General",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEiDp5NN8zuujsnxiIWI2EaDtAlNC422pFjD_xk3ghJceIK_BCao4RDcXZxvWG1sYV2_3DN4G-s-NQlg5vHQ8qfX3eGbs3PZyb3DNCo-4kb7FKftnrYShJ6dxzUvn9JO7PW28cX-mY8SPBptl8AxDzfMqGEDfs_P2CRGZ8aqSCw_IEP4pRyHQhkW032aR9o",
    featured: true,
    tags: ["IPTV Prime", "Future", "Streaming"],
    icon: Star
  },
  {
    id: 2,
    title: "Top 10 IPTV Prime Features You Can't Miss",
    excerpt: "IPTV Prime isn't just another streaming service—it's packed with features that make it a must-have for anyone who loves TV. Here are the top 10 features that set IPTV Prime apart from the competition.",
    author: "IPTV Prime Team",
    date: "2025-01-14",
    readTime: "6 min read",
    category: "Features",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEi_Rb3rUHgk1-CKYJq0w6pdIKJDM1OdUk4IbxfK69nVgMhfxR51EWrV1IckPVdj3GD3Lbf2U37XTDomenrU4xdfezeOO4LQmMdNsTW1njOb6ccA5LvhBunLQah1_DxiXSqhaFBqSRCeLrqFmsh_oVpju9QqOOWfQLErARwin_swocUO6yj4EERzO5xgNAw",
    featured: false,
    tags: ["IPTV Prime", "Features", "Benefits"],
    icon: Play
  },
  {
    id: 3,
    title: "How to Install IPTV Prime on Any Device in 5 Minutes",
    excerpt: "Setting up IPTV Prime is quick and easy. You don't need to be a tech expert—most devices are compatible, and installation takes less than 5 minutes.",
    author: "Tech Support Team",
    date: "2025-01-13",
    readTime: "4 min read",
    category: "Setup",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEhpA71qCsBjTFAl4CViG8HXWlS9ZsiQPIgPOz2yOBMrNv3PozniOHaobm1WxaJ_4QL0mjCVYBImvvKuyB12vtrWMG77RT0qzE-BRxYBjsnedrNzOdetZVOwvH5SvDhaD0hC29JkvFhSlAmIB4X0GvC7gEiQ2qes0z2neF8ex_NUqIdSDJ8iuc2NRw7wy5A",
    featured: false,
    tags: ["IPTV Prime", "Installation", "Tutorial"],
    icon: Settings
  },
  {
    id: 4,
    title: "IPTV Prime vs Cable TV: Why Streaming Wins",
    excerpt: "Traditional cable TV is becoming outdated, and IPTV Prime offers a modern alternative that's more flexible, affordable, and convenient.",
    author: "IPTV Prime Team",
    date: "2025-01-12",
    readTime: "5 min read",
    category: "Comparison",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEiBsqxuhHIMIktyBdKOMDSwIpz-Guzna8guo62pkn44iPcP0K7QKMDzh-lpjuTz5APr1da_SoYMzmk2FSj4qrvnOkhzlSMOi85-nKTJp6y3VhZvHJ9IrCflUacdB8RUOB5UAUxJ5DteRbPDMy7sc0ZQs4Vh_1C5GfuMpbaWuzS97cn91LwxmcCgup1Qh_w",
    featured: false,
    tags: ["IPTV Prime", "Cable TV", "Comparison"],
    icon: TrendingUp
  },
  {
    id: 5,
    title: "The Best IPTV Prime Apps for Android, iOS, and Smart TVs",
    excerpt: "To enjoy IPTV Prime at its best, choosing the right app is essential. Here are the top apps for IPTV Prime users.",
    author: "IPTV Prime Team",
    date: "2025-01-11",
    readTime: "4 min read",
    category: "Apps",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEjTIxOeUYMopOB0-T5BW4KKmDIpDY_FekQeLfhM2kmZYjdCqrgAgWiz4BdYPzI8kBxsj_G45X03kfVdJXNolmjcZP-yt6iFOdx9W4QuKAupmm_LZhTRVz2q2kHFW9K4epCvSNT0qauw3G5Gbu0zs5OeuYBeT9du98AYH2hhRPzH1ij_mlE-7Gr5ARCADLo",
    featured: false,
    tags: ["IPTV Prime", "Apps", "Devices"],
    icon: Smartphone
  },
  {
    id: 6,
    title: "How to Improve Your IPTV Prime Streaming Quality",
    excerpt: "Watching IPTV Prime should always be smooth and buffer-free. Here are essential tips to enhance your streaming experience.",
    author: "Tech Support Team",
    date: "2025-01-10",
    readTime: "3 min read",
    category: "Tips",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEhrFfYACQPzlTi2gylsj5OrHzII9JdSo-NSNFdR_q_-tvQVahFqfmV_WjW4Y3XtJjfQnJe-JwmliTJte53PSLl7did8M1yzg7I2MbrXv4l-iMdalqcQf4DmehOw33dqi8GThIO-tfeNEMbb04jlEKpPEOvONV1yXyyhhyIREdC_3lla-3ZIIRlahCDrUIQ",
    featured: false,
    tags: ["IPTV Prime", "Quality", "Optimization"],
    icon: Zap
  },
  {
    id: 7,
    title: "IPTV Prime Legal Guide: Is Streaming Safe in Canada?",
    excerpt: "Many users ask whether using IPTV Prime is legal. IPTV itself is 100% legal in Canada when accessing licensed or freely distributed content.",
    author: "Legal Team",
    date: "2025-01-09",
    readTime: "3 min read",
    category: "Legal",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEjRke3qC7bkVnN24TbKw9tcfi0NLghZyyp_KB6NA0i-BDne6-VtSIq4koXndi2ke4Blfj5KJKXsq-Sxr3i3ahzJU4VcXx0AYjLTzizSncd_Sa1gJdS_VLpBNGd4XyMgH6qi3WYrBUjXbGTsBJZ0w1YsoO4S8Iw8GHPfNfLXxkNDa-dyZEWDg3DHeMZHSlM",
    featured: false,
    tags: ["IPTV Prime", "Legal", "Canada"],
    icon: Shield
  },
  {
    id: 8,
    title: "IPTV Prime for Sports Fans: Watch Live Events Worldwide",
    excerpt: "For sports enthusiasts, IPTV Prime is the ultimate streaming solution. Access live events from around the globe without missing a single match.",
    author: "Sports Team",
    date: "2025-01-08",
    readTime: "4 min read",
    category: "Sports",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEiS8goAQJq-pUjle6fNl7-1vsRlUbXF9qtde1TE0yHLXTFIv6prDOwXWx1xe4wCXDhyQ7aowj1USNscAEw_QzpOC_X01gGLhBXALko5kcbkecgsL6yuU56gmGReFqY-RR1FAI2d6y0n-Kwn7osFTfBUcxAoHajcmCLJ7N-0hPL98048JH0fRXpGahoQBcc",
    featured: false,
    tags: ["IPTV Prime", "Sports", "Live Events"],
    icon: Play
  },
  {
    id: 9,
    title: "Why IPTV Prime is the #1 Choice for Global Viewers in 2025",
    excerpt: "As streaming technology evolves, IPTV Prime has become the top choice for viewers worldwide. Here's why.",
    author: "IPTV Prime Team",
    date: "2025-01-07",
    readTime: "5 min read",
    category: "General",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEjt2-gEbk2NwXrrizVm0065MJCw_5rugQ9al-wSH_bPG6mfN35Yj46_rd9QtpB9A_glxTAmohCTuaPrwwD456R_d93Bx5BZQEnvYtw3BsXxIZMNokAjppCa4TmIIL8C1iXHp0QzEs75Ep1gVLNFxD75QhNhM-uSsX_wnUroIt6pXjfqH_EbQ11NjyGznFM",
    featured: false,
    tags: ["IPTV Prime", "2025", "Global"],
    icon: Crown
  },
  {
    id: 10,
    title: "Top 5 Benefits of Choosing IPTV Prime for Your Family",
    excerpt: "Bring IPTV Prime into your home and enjoy endless family entertainment with these top 5 benefits.",
    author: "Family Team",
    date: "2025-01-06",
    readTime: "3 min read",
    category: "Family",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEgrrUg2Ki5K9MAJtkVH0QxUa0qgaa3Ggm74eXN2xR36E3p0q9RK84gMHmRwn2SdxdWbflAXzTxVrUFthMkoqy69ByEoTk8dYZArTDSi_Sz3qq9Na4aS_JGSqG4RJ1zkcJj0yxw8aW6BCXcsmowofag3C_8cSVGgsFscWUhbPi2G5-YzfiRvSwo0qA_wEWA",
    featured: false,
    tags: ["IPTV Prime", "Family", "Benefits"],
    icon: Heart
  },
  {
    id: 11,
    title: "IPTV Prime Subscription Plans: Find the Right Fit for You",
    excerpt: "Select your IPTV Prime plan today and start enjoying the best TV content worldwide with flexible subscription options.",
    author: "Sales Team",
    date: "2025-01-05",
    readTime: "4 min read",
    category: "Plans",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEjTx4EwJaND92DsHctwxkzRyP-5LJ8EzrQc_ZIx-i6H19duyymOZADV-VlqVuxv8tgMjKMNDHL2w8YBoQW0ZWqOw5qMOss7Mnaw3sKEv_q-y0Ux6lc_F4QGeI41ZsxDEM5oHvLUxP8m2WnjlpSquZh8di57qdcBOdM-90yqFzMDDZfhjx5KiYYEfEIfutA",
    featured: false,
    tags: ["IPTV Prime", "Plans", "Subscription"],
    icon: CreditCard
  },
  {
    id: 12,
    title: "How IPTV Prime Works Outside of Canada",
    excerpt: "Experience global streaming today with IPTV Prime! Access worldwide content with full compatibility and instant setup.",
    author: "Global Team",
    date: "2025-01-04",
    readTime: "3 min read",
    category: "Global",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEiUK6ICtf3RY0GChL5_B_0mEqT4kRq-ykkfn8VM1zHAe4Iubw23eWgkufMpBfCIC-H5Ne1F4GUlA0VlhDMFhXfxTUhh9aY8RwVu7c27ZTF8O_HbO8Ewlu3vPKx4LywBiTsxMDBnZITZ9GWcY3KAbxgA4VvXkxd4qrj1P9BV6cGVliHqIpJnWC9e1z0Yn48",
    featured: false,
    tags: ["IPTV Prime", "Global", "International"],
    icon: Globe
  },
  {
    id: 13,
    title: "Troubleshooting IPTV Prime: Fix Buffering and Loading Issues",
    excerpt: "Enjoy smooth, high-quality streaming with IPTV Prime every time! Follow these troubleshooting steps for optimal performance.",
    author: "Tech Support Team",
    date: "2025-01-03",
    readTime: "4 min read",
    category: "Support",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEhPCIvDBgl1ctmMfhked2jugVTdF_SfdZcvB1qE-BumE6dVO2iH8lgjMO2ZwUGbqwUBD8g7NSkp2IMdE76w7ui6zm3sJSzvcHjALk29u81x4JxQhkH84DSpxKD-YMGIJieViR7YiKJnrqYx4EoQZS01aCJxZlDI3kpDnDAVxJt8yPgHBFLLpZlUaVGbZoc",
    featured: false,
    tags: ["IPTV Prime", "Troubleshooting", "Support"],
    icon: Wrench
  },
  {
    id: 14,
    title: "The Future of IPTV: Why IPTV Prime Leads the Way",
    excerpt: "Embrace the future of TV streaming today with IPTV Prime! Advanced technology, massive content library, and global trust.",
    author: "Innovation Team",
    date: "2025-01-02",
    readTime: "5 min read",
    category: "Future",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEghP-xEUjQD-vTu2_KuZbS7-SfLHyywRm_JRUdPNWQwfKHN8favdpcqywe_Oy6rGyC30mWsGnJ9K4bIchKG0pzjxoasEYdyxwRTyF234ySB7HyMO_0Y3DdpfPZ0mN9RYJcX49Aq1yQzOixg4P5evxo_ML2LQ64K7H7c7IgvYX3PXSAXT0O2Lhbfy-IXsxg",
    featured: false,
    tags: ["IPTV Prime", "Future", "Innovation"],
    icon: Rocket
  },
  {
    id: 15,
    title: "How to Get the Most Out of Your IPTV Prime Subscription",
    excerpt: "Get the most out of your IPTV Prime subscription and experience premium entertainment today with these pro tips and optimization techniques.",
    author: "Expert Team",
    date: "2025-01-01",
    readTime: "6 min read",
    category: "Tips",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEh78TvrgRvvt_cX8pGWsdoAd-MVUgpfZncgpp3wAvwu7BWb2I8q4kK38rSVISSBTIIyGl_JMxV_F2Cwkd9Jc90MquyXKNWGEK0kyq5YAWDqg-z4nV_sQnHY-7mxzH4UCbR-WYfWByPjFglQDzs8acTiwl9fw_O9Ca65lyO4YG90pALuEjtkcIJ5p3Qr9h4",
    featured: false,
    tags: ["IPTV Prime", "Tips", "Optimization"],
    icon: Target
  }
];

const categories = ["All", "General", "Features", "Setup", "Comparison", "Apps", "Tips", "Legal", "Sports", "Family", "Plans", "Global", "Support", "Future"];

export function BlogPage({ onPageChange }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            <span className="text-neon-cyan animate-glow">IPTV Prime Canada</span> Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest IPTV Prime news, guides, tips, and insights. 
            Learn how to get the most out of your streaming experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-neon-cyan text-dark-bg animate-pulse-glow'
                  : 'bg-dark-surface border border-neon-cyan/30 text-white hover:border-neon-cyan hover:bg-neon-cyan/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-dark-surface border-neon-cyan/30 hover:border-neon-cyan overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-neon-cyan text-dark-bg animate-pulse-glow">
                      Featured IPTV Prime Article
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent lg:hidden"></div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="border-neon-purple/50 text-neon-purple">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-white hover:text-neon-cyan transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <Button 
                      className="neon-border bg-transparent text-neon-cyan hover:bg-neon-cyan/10 btn-elegant-hover"
                      onClick={() => {
                        window.open(`#featured-article-${featuredPost.id}`, '_self');
                      }}
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== "All").map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Card className="bg-dark-surface border-neon-cyan/20 hover:border-neon-cyan overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
                <div className="relative aspect-video">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-neon-cyan/10 rounded-full">
                      <post.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="border-neon-purple/50 text-neon-purple text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-neon-cyan transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-neon-cyan/10 text-neon-cyan text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    size="sm"
                    className="neon-border bg-transparent text-neon-cyan hover:bg-neon-cyan/10 w-full btn-elegant-hover"
                    onClick={() => {
                      // هنا يمكن إضافة وظيفة لفتح المقال أو الانتقال لصفحة معينة
                      // يمكن أيضاً استخدام post.id للانتقال لمقال محدد
                      window.open(`#article-${post.id}`, '_self');
                    }}
                  >
                    Read IPTV Prime Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated with <span className="text-neon-cyan animate-glow">IPTV Prime</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest IPTV Prime updates, 
            exclusive content, and streaming tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email for IPTV Prime updates"
              className="flex-1 px-4 py-3 bg-dark-surface border border-neon-cyan/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none"
            />
            <Button className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 animate-pulse-glow">
              Subscribe to IPTV Prime
            </Button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">
            Ready to Experience <span className="text-neon-cyan">IPTV Prime</span>?
          </h3>
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