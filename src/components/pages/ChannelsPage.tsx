import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Search, Tv, Film, Music, Globe, Users, Gamepad2, BookOpen, Zap } from 'lucide-react';

interface ChannelsPageProps {
  onPageChange: (page: string) => void;
}

const channelCategories = [
  { name: 'All Channels', icon: Tv, count: 20000 },
  { name: 'Sports', icon: Zap, count: 2500 },
  { name: 'Movies', icon: Film, count: 3000 },
  { name: 'Music', icon: Music, count: 1200 },
  { name: 'International', icon: Globe, count: 5000 },
  { name: 'Kids', icon: Users, count: 800 },
  { name: 'Gaming', icon: Gamepad2, count: 300 },
  { name: 'Education', icon: BookOpen, count: 400 }
];

// Sample channel data - in a real app, this would come from an API
const sampleChannels = [
  // Sports
  { name: 'ESPN', category: 'Sports', country: 'USA', quality: '4K' },
  { name: 'Fox Sports', category: 'Sports', country: 'USA', quality: 'HD' },
  { name: 'Sky Sports', category: 'Sports', country: 'UK', quality: '4K' },
  { name: 'beIN Sports', category: 'Sports', country: 'Global', quality: 'HD' },
  { name: 'Eurosport', category: 'Sports', country: 'Europe', quality: 'HD' },
  
  // Movies
  { name: 'HBO Max', category: 'Movies', country: 'USA', quality: '4K' },
  { name: 'Netflix Movies', category: 'Movies', country: 'Global', quality: '4K' },
  { name: 'Cinemax', category: 'Movies', country: 'USA', quality: 'HD' },
  { name: 'Starz', category: 'Movies', country: 'USA', quality: '4K' },
  { name: 'Movie Central', category: 'Movies', country: 'Canada', quality: 'HD' },
  
  // Music
  { name: 'MTV', category: 'Music', country: 'USA', quality: 'HD' },
  { name: 'VH1', category: 'Music', country: 'USA', quality: 'HD' },
  { name: 'BET', category: 'Music', country: 'USA', quality: 'HD' },
  { name: 'Music Choice', category: 'Music', country: 'USA', quality: 'HD' },
  
  // International
  { name: 'BBC One', category: 'International', country: 'UK', quality: 'HD' },
  { name: 'Canal+', category: 'International', country: 'France', quality: '4K' },
  { name: 'RAI', category: 'International', country: 'Italy', quality: 'HD' },
  { name: 'ARD', category: 'International', country: 'Germany', quality: 'HD' },
  { name: 'NHK', category: 'International', country: 'Japan', quality: '4K' },
  
  // Kids
  { name: 'Disney Channel', category: 'Kids', country: 'USA', quality: 'HD' },
  { name: 'Nickelodeon', category: 'Kids', country: 'USA', quality: 'HD' },
  { name: 'Cartoon Network', category: 'Kids', country: 'USA', quality: 'HD' },
  { name: 'Disney Jr', category: 'Kids', country: 'USA', quality: 'HD' },
  
  // Gaming
  { name: 'Twitch Gaming', category: 'Gaming', country: 'Global', quality: '4K' },
  { name: 'ESL Gaming', category: 'Gaming', country: 'Global', quality: 'HD' },
  
  // Education
  { name: 'Discovery', category: 'Education', country: 'USA', quality: '4K' },
  { name: 'National Geographic', category: 'Education', country: 'USA', quality: '4K' },
  { name: 'History Channel', category: 'Education', country: 'USA', quality: 'HD' },
  { name: 'Science Channel', category: 'Education', country: 'USA', quality: 'HD' }
];

export function ChannelsPage({ onPageChange }: ChannelsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Channels');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleChannels, setVisibleChannels] = useState(20);

  const filteredChannels = useMemo(() => {
    let filtered = sampleChannels;
    
    if (selectedCategory !== 'All Channels') {
      filtered = filtered.filter(channel => channel.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(channel =>
        channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        channel.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        channel.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleLoadMore = () => {
    setVisibleChannels(prev => prev + 20);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Channels Available on <span className="text-neon-cyan animate-glow">IPTV Prime</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover thousands of premium channels available through IPTV Prime. 
            From sports and movies to international content, IPTV Prime has everything you need.
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
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-cyan w-5 h-5" />
            <Input
              type="text"
              placeholder="Search IPTV Prime channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-4 bg-dark-surface border-neon-cyan/30 focus:border-neon-cyan text-white placeholder-gray-400 neon-border"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {channelCategories.map((category, index) => (
              <motion.button
                key={category.name}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-neon-cyan text-dark-bg animate-pulse-glow'
                    : 'bg-dark-surface border border-neon-cyan/30 text-white hover:border-neon-cyan hover:bg-neon-cyan/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2 bg-neon-purple/20 text-neon-purple">
                  {category.count.toLocaleString()}
                </Badge>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-300">
            Showing {Math.min(visibleChannels, filteredChannels.length)} of {filteredChannels.length} channels
            {selectedCategory !== 'All Channels' && (
              <span> in <span className="text-neon-cyan">{selectedCategory}</span></span>
            )}
            {searchQuery && (
              <span> matching "<span className="text-neon-purple">{searchQuery}</span>"</span>
            )}
          </p>
        </motion.div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredChannels.slice(0, visibleChannels).map((channel, index) => (
            <motion.div
              key={`${channel.name}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-dark-surface border-neon-cyan/20 hover:border-neon-cyan p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full flex items-center justify-center border border-neon-cyan/30">
                    <Tv className="w-8 h-8 text-neon-cyan" />
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-2 text-white">{channel.name}</h3>
                
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  <Badge variant="outline" className="border-neon-purple/50 text-neon-purple">
                    {channel.category}
                  </Badge>
                  <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                    {channel.country}
                  </Badge>
                </div>
                
                <div className="flex justify-center">
                  <Badge className={`${
                    channel.quality === '4K' 
                      ? 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan animate-pulse-glow' 
                      : 'bg-neon-purple/20 text-neon-purple border-neon-purple'
                  }`}>
                    {channel.quality}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleChannels < filteredChannels.length && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              size="lg"
              className="neon-border bg-transparent hover:bg-neon-cyan/10 text-neon-cyan"
              onClick={handleLoadMore}
            >
              Load More IPTV Prime Channels
            </Button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredChannels.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-neon-cyan" />
            </div>
            <h3 className="text-2xl font-bold mb-4">No IPTV Prime Channels Found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or selecting a different category to explore more IPTV Prime channels.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Channels');
              }}
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90"
            >
              Show All IPTV Prime Channels
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 bg-dark-surface/50 rounded-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Access All <span className="text-neon-cyan animate-glow">IPTV Prime</span> Channels?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get instant access to thousands of premium channels with your IPTV Prime subscription. 
            Choose from our flexible plans and start streaming today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="neon-border bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 animate-pulse-glow"
              onClick={() => onPageChange('pricing')}
            >
              Get IPTV Prime Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border bg-transparent text-neon-purple hover:bg-neon-purple/10"
              onClick={() => onPageChange('contact')}
            >
              Request Channel List
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}