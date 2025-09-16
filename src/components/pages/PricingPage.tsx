import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Check, Monitor, Smartphone, Tablet, Tv, Laptop } from 'lucide-react';

interface PricingPageProps {
  onPageChange: (page: string) => void;
}

const deviceOptions = [
  { id: 1, label: "1 Device", value: 1 },
  { id: 2, label: "2 Devices", value: 2 },
  { id: 3, label: "3 Devices", value: 3 },
  { id: 4, label: "4 Devices", value: 4 },
  { id: 5, label: "5 Devices", value: 5 }
];

const plans = [
  {
    id: 1,
    title: "1 Month",
    description: "Perfect for a trial drive.",
    monthlyPrice: 10,
    yearlyPrice: 8,
    isBestValue: false,
    features: [
      "2 Connections",
      "More +50,000 Channels",
      "+80,000 VOD & series",
      "No Freezing Fast & Stable",
      "Premium Quality Service",
      "4K FHD HD Channels",
      "Compatible all Devices",
      "Available Worldwide",
      "EPG & Catch-up",
      "Adult Content",
      "24/7 Support"
    ]
  },
  {
    id: 2,
    title: "6 Months",
    description: "Great value for a season.",
    monthlyPrice: 38,
    yearlyPrice: 30,
    isBestValue: true,
    features: [
      "2 Connections",
      "More +50,000 Channels",
      "+80,000 VOD & series",
      "No Freezing Fast & Stable",
      "Premium Quality Service",
      "4K FHD HD Channels",
      "Compatible all Devices",
      "Available Worldwide",
      "EPG & Catch-up",
      "Adult Content",
      "24/7 Support"
    ]
  },
  {
    id: 3,
    title: "12 Months",
    description: "Maximum value, ultimate entertainment.",
    monthlyPrice: 55,
    yearlyPrice: 45,
    isBestValue: false,
    features: [
      "2 Connections",
      "More +50,000 Channels",
      "+80,000 VOD & series",
      "No Freezing Fast & Stable",
      "Premium Quality Service",
      "4K FHD HD Channels",
      "Compatible all Devices",
      "Available Worldwide",
      "EPG & Catch-up",
      "Adult Content",
      "24/7 Support"
    ]
  }
];

export function PricingPage({ onPageChange }: PricingPageProps) {
  const [selectedDevice, setSelectedDevice] = useState(1);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Calculate price based on device count
  const calculatePrice = (basePrice: number, deviceCount: number) => {
    if (deviceCount === 1) return basePrice;
    
    // For 2+ devices: base price × device count - 10% discount
    const totalPrice = basePrice * deviceCount;
    const discount = totalPrice * 0.1;
    return Math.round(totalPrice - discount);
  };

  const getCurrentPrice = (plan: any) => {
    const basePrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    return calculatePrice(basePrice, selectedDevice);
  };

  const getOriginalPrice = (plan: any) => {
    const basePrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    return basePrice * selectedDevice;
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-16 md:pb-20">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mobile-text-scale">
            Find the <span className="text-neon-cyan">Perfect Plan</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mobile-text-scale">
            Simple, transparent pricing. All plans include every feature. No hidden fees.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-dark-surface rounded-full p-1 border border-gray-600">
            <div className="flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-neon-cyan text-dark-bg shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-neon-cyan text-dark-bg shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </motion.div>

        {/* Device Selection */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6 mobile-text-scale">
            How many devices?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {deviceOptions.map((option) => (
              <motion.button
                key={option.id}
                className={`px-4 md:px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedDevice === option.value
                    ? 'bg-neon-cyan text-dark-bg border-neon-cyan shadow-lg shadow-neon-cyan/30'
                    : 'bg-dark-surface text-gray-300 border-gray-600 hover:border-neon-cyan/50 hover:text-white'
                }`}
                onClick={() => setSelectedDevice(option.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm md:text-base font-medium">{option.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const currentPrice = getCurrentPrice(plan);
            const originalPrice = getOriginalPrice(plan);
            const hasDeviceDiscount = selectedDevice > 1;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`relative ${plan.isBestValue ? 'md:scale-105 z-10' : ''}`}
              >
                {plan.isBestValue && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-neon-cyan text-dark-bg font-bold px-4 py-1 text-sm animate-pulse-glow">
                      BEST VALUE
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.isBestValue 
                    ? 'border-neon-cyan bg-dark-surface shadow-lg shadow-neon-cyan/20' 
                    : 'border-gray-600 bg-dark-surface hover:border-neon-cyan/50'
                }`}>
                  
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-3xl md:text-4xl font-bold text-white">
                          ${currentPrice}
                        </span>
                        {hasDeviceDiscount && (
                          <span className="text-lg text-gray-400 line-through ml-2">
                            ${originalPrice}
                          </span>
                        )}
                      </div>
                      
                      {hasDeviceDiscount && (
                        <div className="text-sm text-green-400 font-medium mb-2">
                          Save 10% on multiple devices
                        </div>
                      )}
                      
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-neon-cyan font-medium">
                          Save ${(plan.monthlyPrice - plan.yearlyPrice) * selectedDevice} vs Monthly
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Choose Plan Button */}
                  <motion.div
                    className="mb-8"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full py-3 md:py-4 font-bold text-base rounded-lg transition-all duration-300 ${
                        plan.isBestValue
                          ? 'bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 shadow-lg shadow-neon-cyan/30 animate-pulse-glow'
                          : 'bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 border-2 border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/20'
                      }`}
                      onClick={() => {
                        // Save plan details to localStorage
                        const planData = {
                          name: `${plan.title} Plan`,
                          price: currentPrice,
                          originalPrice: hasDeviceDiscount ? originalPrice : undefined,
                          devices: selectedDevice,
                          duration: plan.title,
                          features: plan.features,
                          isPopular: plan.isBestValue,
                          discount: hasDeviceDiscount ? 10 : undefined,
                          billingCycle: billingCycle
                        };
                        localStorage.setItem('selectedPlan', JSON.stringify(planData));
                        onPageChange('checkout');
                      }}
                    >
                      Choose Plan
                    </Button>
                  </motion.div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.03 }}
                      >
                        <div className="flex-shrink-0 mr-3 mt-0.5">
                          <div className="w-5 h-5 bg-neon-cyan rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-dark-bg" />
                          </div>
                        </div>
                        <span className="text-sm text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-dark-surface border border-neon-cyan/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 mobile-text-scale">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 mobile-text-scale">
              Try IPTV Prime Canada risk-free for 30 days. If you're not completely satisfied with our service, 
              we'll refund your subscription - no questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 border-2 border-neon-cyan shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50 transition-all duration-300 mobile-btn-full"
                onClick={() => window.open('https://wa.me/212709668859', '_blank')}
              >
                Get Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 mobile-btn-full"
                onClick={() => onPageChange('contact')}
              >
                Contact Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}