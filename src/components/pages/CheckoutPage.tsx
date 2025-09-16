import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  CreditCard, 
  Wallet, 
  Banknote, 
  Bitcoin, 
  Shield, 
  ArrowLeft,
  Check,
  Monitor,
  Tv,
  Globe,
  Star
} from 'lucide-react';

interface CheckoutPageProps {
  onPageChange: (page: string) => void;
}

interface PlanDetails {
  name: string;
  price: number;
  originalPrice?: number;
  devices: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  discount?: number;
}

const AVAILABLE_COUNTRIES = [
  'Sweden', 'Denmark', 'Norway', 'Finland', 'Iceland',
  'France', 'Spain', 'Italy', 'Belgium', 'Netherlands', 
  'Germany', 'Austria', 'Portugal', 'Switzerland', 'Poland', 
  'Greece', 'Czech', 'Cyprus', 'Albania', 'Romania', 
  'Hungary', 'Russia', 'Bulgaria', 'Lithuania', 'Latvia', 
  'Ukraine', 'Georgia', 'Malta', 'UK', 'USA', 'Canada', 
  'Australia', 'New Zealand', 'Brazil', 'India', 'Turkey', 
  'Israel', 'Iran', 'Pakistan', 'Afghanistan', 'Vietnam', 
  'Hong Kong', 'Philippines', 'South Korea', 'Malaysia', 
  'Suriname', 'Thailand', 'Azerbaijan', 'Japan', 'Indonesia', 'Egypt'
];

const PAYMENT_METHODS = [
  { id: 'paypal', name: 'PayPal', icon: Wallet, description: 'Pay securely with PayPal' },
  { id: 'western-union', name: 'Western Union', icon: Banknote, description: 'Money transfer service' },
  { id: 'xoom', name: 'Xoom', icon: CreditCard, description: 'Digital money transfer' },
  { id: 'crypto', name: 'Cryptocurrency', icon: Bitcoin, description: 'Bitcoin, Ethereum, USDT' },
  { id: 'card-crypto', name: 'Card via Crypto', icon: Shield, description: 'Credit/Debit card through crypto gateway' }
];

export function CheckoutPage({ onPageChange }: CheckoutPageProps) {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['USA']);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    country: ''
  });

  // Get plan details from URL params or localStorage
  const [planDetails, setPlanDetails] = useState<PlanDetails>({
    name: 'Premium Plan',
    price: 25,
    devices: 3,
    duration: '12 months',
    features: ['50,000+ Channels', 'HD & 4K Quality', '24/7 Support', 'All Devices'],
    isPopular: true
  });

  useEffect(() => {
    // Try to get plan details from localStorage or URL params
    const savedPlan = localStorage.getItem('selectedPlan');
    if (savedPlan) {
      setPlanDetails(JSON.parse(savedPlan));
    }
  }, []);

  const handleCountryToggle = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckout = () => {
    const orderDetails = {
      plan: planDetails,
      countries: selectedCountries,
      payment: selectedPayment,
      customer: customerInfo,
      total: planDetails.price
    };

    // Create WhatsApp message
    const message = `🔥 IPTV Prime Order Details:

📦 Plan: ${planDetails.name}
💰 Price: ${planDetails.price}
📱 Devices: ${planDetails.devices}
⏱️ Duration: ${planDetails.duration}

🌍 Selected Channel Countries:
${selectedCountries.join(', ')}

💳 Payment Method: ${PAYMENT_METHODS.find(p => p.id === selectedPayment)?.name || 'Not selected'}

👤 Customer Information:
Name: ${customerInfo.fullName}
Email: ${customerInfo.email}
Country: ${customerInfo.country}

Total Amount: ${planDetails.price}

Please process my IPTV Prime subscription. Thank you!`;

    const whatsappUrl = `https://wa.me/212709668859?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = () => {
    return (
      customerInfo.fullName.trim() !== '' &&
      customerInfo.email.trim() !== '' &&
      customerInfo.country.trim() !== '' &&
      selectedPayment !== '' &&
      selectedCountries.length > 0
    );
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => onPageChange('pricing')}
            className="mb-4 text-neon-cyan hover:text-neon-cyan/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pricing
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mobile-text-scale">
              <span className="text-neon-cyan">Complete</span>{' '}
              <span className="text-white">Your Order</span>
            </h1>
            <p className="text-light-gray text-base md:text-lg mobile-text-scale">
              Secure checkout for your IPTV Prime subscription
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 order-2 lg:order-1"
          >
            <Card className="bg-dark-surface border-neon-cyan/20 lg:sticky lg:top-24">
              <CardHeader>
                <CardTitle className="text-neon-cyan flex items-center gap-2 text-lg md:text-xl">
                  <Tv className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Plan Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm md:text-base">{planDetails.name}</h3>
                      {planDetails.isPopular && (
                        <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30 mt-1 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white text-lg">${planDetails.price}</p>
                      {planDetails.originalPrice && (
                        <p className="text-sm text-gray-400 line-through">
                          ${planDetails.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Monitor className="w-4 h-4 text-neon-cyan" />
                    <span>{planDetails.devices} Device{planDetails.devices > 1 ? 's' : ''}</span>
                    <span>•</span>
                    <span>{planDetails.duration}</span>
                  </div>

                  <div className="space-y-2">
                    {planDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                        <Check className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gray-600" />

                {/* Selected Countries */}
                <div>
                  <h4 className="font-medium text-white mb-2 text-sm">Selected Channel Regions:</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedCountries.map(country => (
                      <Badge 
                        key={country}
                        variant="outline" 
                        className="text-xs border-neon-cyan/30 text-neon-cyan"
                      >
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gray-600" />

                {/* Total */}
                <div className="space-y-2">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-white">Total Amount:</span>
                    <span className="text-neon-cyan">${planDetails.price}</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Price includes all features and 24/7 support
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6 order-1 lg:order-2"
          >
            {/* Customer Information */}
            <Card className="bg-dark-surface border-neon-cyan/20">
              <CardHeader>
                <CardTitle className="text-white text-lg md:text-xl">Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-300 text-sm">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={customerInfo.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="bg-dark-surface-hover border-gray-600 text-white mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 text-sm">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-dark-surface-hover border-gray-600 text-white mt-2"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="text-gray-300 text-sm">Country *</Label>
                  <Select value={customerInfo.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger className="bg-dark-surface-hover border-gray-600 text-white mt-2">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-surface border-gray-600 max-h-60">
                      {AVAILABLE_COUNTRIES.map(country => (
                        <SelectItem 
                          key={country} 
                          value={country}
                          className="text-white hover:bg-dark-surface-hover"
                        >
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Channel Countries Selection */}
            <Card className="bg-dark-surface border-neon-cyan/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
                  <Globe className="w-5 h-5 text-neon-cyan" />
                  Select Channel Regions
                </CardTitle>
                <p className="text-gray-400 text-sm">
                  Choose the countries whose TV channels you want to access
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-60 overflow-y-auto">
                  {AVAILABLE_COUNTRIES.map(country => (
                    <div key={country} className="flex items-center space-x-2">
                      <Checkbox
                        id={country}
                        checked={selectedCountries.includes(country)}
                        onCheckedChange={() => handleCountryToggle(country)}
                        className="border-gray-600 data-[state=checked]:bg-neon-cyan data-[state=checked]:border-neon-cyan"
                      />
                      <Label 
                        htmlFor={country} 
                        className="text-sm text-gray-300 cursor-pointer hover:text-white"
                      >
                        {country}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Selected {selectedCountries.length} regions. You can select multiple countries.
                </p>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-dark-surface border-neon-cyan/20">
              <CardHeader>
                <CardTitle className="text-white text-lg md:text-xl">Payment Method</CardTitle>
                <p className="text-gray-400 text-sm">
                  Choose your preferred payment option
                </p>
              </CardHeader>
              <CardContent>
                <Select value={selectedPayment} onValueChange={setSelectedPayment}>
                  <SelectTrigger className="bg-dark-surface-hover border-gray-600 text-white">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-surface border-gray-600">
                    {PAYMENT_METHODS.map(method => (
                      <SelectItem 
                        key={method.id} 
                        value={method.id}
                        className="text-white hover:bg-dark-surface-hover"
                      >
                        <div className="flex items-center gap-3">
                          <method.icon className="w-4 h-4 text-neon-cyan" />
                          <div>
                            <p className="font-medium">{method.name}</p>
                            <p className="text-xs text-gray-400">{method.description}</p>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Complete Order Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleCheckout}
                disabled={!isFormValid()}
                size="lg"
                className="w-full complete-order-glow text-dark-bg font-bold py-4 text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none disabled:animation-none mobile-btn-full"
              >
                <Shield className="w-5 h-5 mr-2" />
                Complete Order - ${planDetails.price}
              </Button>
            </motion.div>

            <div className="text-center text-sm text-gray-400 mobile-text-scale">
              <p>🔒 Secure checkout • 24/7 customer support • Instant activation</p>
              <p className="mt-2">
                By completing this order, you agree to our terms of service and privacy policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}