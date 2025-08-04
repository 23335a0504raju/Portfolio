import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

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
        className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800 rounded-2xl max-w-md w-full overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
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
        <div className="p-10 text-center relative">
          {/* Animated grid pattern */}
          <motion.div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 0.4 }}
            style={{
              backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
          
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-gray-600" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-gray-600" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-gray-600" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-gray-600" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-3">
              Welcome
            </h2>
            
            <motion.p 
              className="text-gray-400 mb-8 text-lg tracking-wide"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Enter my creative domain
            </motion.p>
            
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            </motion.div>
          </motion.div>
          
          <motion.button
            className="px-8 py-3.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-gray-100 font-medium tracking-wide 
                      transition-all duration-300 flex items-center gap-2 mx-auto group relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px -10px rgba(255,255,255,0.1)'
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
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-gray-700/30 via-gray-600/20 to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity z-0"
              initial={{ x: -100 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </div>
        
        <motion.div 
          className="h-1.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeCard;