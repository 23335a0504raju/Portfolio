import { motion } from 'framer-motion';

const WelcomeCard = ({ onClose }) => {
  return (
    <motion.div
      className="welcome-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="welcome-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ 
          type: 'spring', 
          stiffness: 100,
          damping: 10
        }}
      >
        <div className="welcome-content">
          <h2>Welcome to My Portfolio</h2>
          <p>Discover my work and skills</p>
          <motion.button
            className="enter-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
          >
            Enter
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeCard;