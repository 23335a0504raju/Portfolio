import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

const Home = () => {
  const [robotLoaded, setRobotLoaded] = useState(false);
  const [robotError, setRobotError] = useState(false);
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const robotRef = useRef(null);

  const handleIframeLoad = () => {
    setRobotLoaded(true);
    // Start moving the robot after it loads
    updateRobotPosition();
  };

  const handleIframeError = () => {
    setRobotError(true);
    setRobotLoaded(true);
  };

  // Function to update robot position randomly within screen boundaries
  const updateRobotPosition = useCallback(() => {
    if (!robotLoaded || robotError) return;
    
    // Get the actual dimensions of the robot element
    const robotWidth = robotRef.current?.offsetWidth || 320;
    const robotHeight = robotRef.current?.offsetHeight || 320;
    
    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate safe boundaries (accounting for the robot's size)
    const maxX = viewportWidth - robotWidth;
    const maxY = viewportHeight - robotHeight;
    
    // Ensure we don't go negative (mobile devices)
    const safeMaxX = Math.max(0, maxX);
    const safeMaxY = Math.max(0, maxY);
    
    // Generate random position within safe boundaries
    const newX = Math.random() * safeMaxX;
    const newY = Math.random() * safeMaxY;
    
    setPositions({ x: newX, y: newY });
  }, [robotLoaded, robotError]);

  // Update robot position periodically
  useEffect(() => {
    if (robotLoaded && !robotError) {
      const interval = setInterval(updateRobotPosition, 5000); // Move every 5 seconds
      return () => clearInterval(interval);
    }
  }, [robotLoaded, robotError, updateRobotPosition]);

  // Handle window resize to keep robot within bounds
  useEffect(() => {
    const handleResize = () => {
      if (robotLoaded && !robotError) {
        // Adjust position if needed when window is resized
        updateRobotPosition();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [robotLoaded, robotError, updateRobotPosition]);

  // Fallback component if iframe fails to load
  const RobotFallback = useCallback(() => (
    <motion.div 
      className="fixed w-64 h-64 flex items-center justify-center bg-black/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm z-20"
      animate={{
        x: positions.x,
        y: positions.y,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      style={{
        left: 0,
        top: 0,
      }}
    >
      <div className="text-center p-8">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <p className="text-purple-300">3D Robot Preview</p>
        <p className="text-sm text-gray-400 mt-2">Interactive 3D model would appear here</p>
        <a 
          href="https://my.spline.design/r4xbot-nPsJWDkJ93714OJ61yISQUZa/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-purple-700/80 hover:bg-purple-600/80 rounded-lg text-white transition-colors backdrop-blur-sm"
        >
          View Robot
        </a>
      </div>
    </motion.div>
  ), [positions.x, positions.y]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-1/4 -left-1/4 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-1/4 -right-1/4 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Robot - Positioned absolutely to travel the whole page */}
      {!robotError ? (
        <motion.div 
          ref={robotRef}
          className="fixed w-80 h-80 z-20"
          animate={{
            x: positions.x,
            y: positions.y,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          style={{
            left: 0,
            top: 0,
          }}
        >
          <iframe 
            src="https://my.spline.design/r4xbot-nPsJWDkJ93714OJ61yISQUZa/" 
            frameBorder="0"
            className="w-full h-full bg-transparent"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            title="3D Robot Animation"
            allowFullScreen
            style={{ background: 'transparent' }}
          />
          {!robotLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl backdrop-blur-sm">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
                <p className="text-purple-300">Loading 3D Robot...</p>
              </div>
            </div>
          )}
        </motion.div>
      ) : (
        <RobotFallback />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
                Raju Ch
              </span>
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-1xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Full-Stack Software Engineer skilled in React.js, Django REST, Java, Python, SQL/NoSQL, and cloud deployment (AWS, Vercel, Render). Engineered scalable web applications and REST APIs, implementing authentication and performance optimization that improved efficiency by 25%. Strong background in Data Structures & Algorithms with 450+ coding problems solved, delivering solutions that enhance system reliability and business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6 items-center"
          >
            <a
              href="#portfolio"
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 rounded-full text-white font-medium border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Contact Me
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-16"
          >
            <motion.div
              className="w-16 h-16 mx-auto"
              animate={{
                rotateY: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotateY: {
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M12 2L4 7L12 12L20 7L12 2Z" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M4 12L12 17L20 12" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M4 17L12 22L20 17" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;