import { motion } from 'motion/react';
import { 
  Tv, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Gamepad2, 
  Laptop,
  Watch,
  Radio
} from 'lucide-react';

export function DeviceIcons() {
  const devices = [
    { icon: Tv, name: 'Smart TV', description: 'Any Smart TV' },
    { icon: Smartphone, name: 'Mobile', description: 'iOS & Android' },
    { icon: Monitor, name: 'PC/Desktop', description: 'Windows & Mac' },
    { icon: Tablet, name: 'Tablet', description: 'iPad & Android' },
    { icon: Laptop, name: 'Laptop', description: 'Any Browser' },
    { icon: Gamepad2, name: 'Gaming', description: 'Xbox & PlayStation' },
    { icon: Watch, name: 'Apple Watch', description: 'WatchOS' },
    { icon: Radio, name: 'Streaming', description: 'Chromecast & Firestick' }
  ];

  return (
    <div className="w-full py-8 bg-dark-surface/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Watch On Any <span className="text-neon-cyan">Device</span>
          </h3>
          <p className="text-gray-300">
            Stream on all your favorite devices with just one subscription
          </p>
        </motion.div>

        {/* Moving Device Icons */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* First Set */}
            <div className="flex flex-shrink-0 gap-8">
              {devices.map((device, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex flex-col items-center justify-center bg-dark-surface/80 rounded-lg p-6 min-w-[160px] h-32 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <device.icon className="w-8 h-8 text-neon-cyan mb-2" />
                  <h4 className="text-white font-semibold text-sm mb-1">{device.name}</h4>
                  <p className="text-gray-400 text-xs text-center">{device.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Duplicate Set for seamless loop */}
            <div className="flex flex-shrink-0 gap-8 ml-8">
              {devices.map((device, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex flex-col items-center justify-center bg-dark-surface/80 rounded-lg p-6 min-w-[160px] h-32 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <device.icon className="w-8 h-8 text-neon-cyan mb-2" />
                  <h4 className="text-white font-semibold text-sm mb-1">{device.name}</h4>
                  <p className="text-gray-400 text-xs text-center">{device.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gradient fade edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-dark-surface/50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-dark-surface/50 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
}