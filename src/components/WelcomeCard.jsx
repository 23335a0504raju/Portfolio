import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { cn } from '../lib/utils';

const WelcomeCard = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-900/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={cn(
          "relative rounded-xl overflow-hidden shadow-2xl max-w-md w-full",
          "flex items-center justify-center" // Centering content
        )}
        style={{
          backgroundColor: 'rgba(15, 15, 15, 1)',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.96 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 12,
          delay: 0.15
        }}
      >
        {/* Animated Border Elements */}
        <div
          className="w-3 h-3 rounded-full absolute shadow-[0_0_15px] shadow-current z-10 bg-current pointer-events-none"
          style={{
            animation: `
              border-follow 6s linear infinite,
              color-change 6s linear infinite
            `
          }}
        />
        <div
          className="absolute inset-0 border-2 rounded-xl pointer-events-none"
          style={{
            animation: 'border-color-change 6s linear infinite'
          }}
        />

        <div className="p-10 text-center relative z-20 w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-3">
              Welcome
            </h2>

            <motion.p
              className="text-gray-300 mb-8 text-lg tracking-wide"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Enter my creative domain
            </motion.p>
          </motion.div>

          <motion.button
            className="px-8 py-3.5 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-200 dark:text-black rounded-xl text-white font-medium tracking-wide 
                      transition-all duration-300 flex items-center gap-2 mx-auto group relative overflow-hidden shadow-md hover:shadow-lg"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Continue
              <motion.span
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeCard;