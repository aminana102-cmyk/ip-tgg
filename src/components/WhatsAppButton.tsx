import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '+212709668859';
  const whatsappUrl = `https://wa.me/212709668859`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1
      }}
    >
      {/* Contact Text */}
      <div className="hidden sm:block bg-green-500 px-3 py-2 rounded-lg shadow-lg">
        <p className="text-white font-medium text-sm whitespace-nowrap">
          Contact Here
        </p>
      </div>

      {/* WhatsApp Button */}
      <motion.button
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp icon */}
        <div className="w-7 h-7 text-white">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
          </svg>
        </div>
      </motion.button>

      {/* Mobile-only text below button */}
      <div className="sm:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 px-2 py-1 rounded text-white text-xs whitespace-nowrap">
        Contact Here
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;