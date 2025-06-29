import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
     <section
      id="profile"
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
     
      <div className="container">
        <div className="hero-wrapper">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>
              Hi, I'm <span>Your Name</span>
            </motion.h1>
            <motion.p variants={itemVariants}>
              Frontend Developer | UI/UX Desiner |
            </motion.p>
            <motion.div className="cta-buttons" variants={itemVariants}>
              <motion.a 
                href="#contact" 
                className="btn primary"
                whileHover={{ y: -3 }}
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="/resume.pdf" 
                download 
                className="btn secondary"
                whileHover={{ y: -3 }}
              >
                <HiDocumentText /> Download CV
              </motion.a>
            </motion.div>
            <motion.div className="social-links" variants={itemVariants}>
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <div className="circle-border">
              <img src={profilePhoto} alt="Profile" />
            </div>
            <div className="dots">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="dot" style={{ '--i': i }}></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#skills" 
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
};

export default Hero;