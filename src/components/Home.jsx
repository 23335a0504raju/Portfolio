import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaRobot } from 'react-icons/fa'; // Import icon for consistency

// import { useRobot } from '../context/RobotContext';

const Home = ({ robotActive, onRobotToggle }) => {
  const [robotLoaded, setRobotLoaded] = useState(false);
  const [robotError, setRobotError] = useState(false);
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const robotRef = useRef(null);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for tablets
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
    if (!robotActive || !robotLoaded || robotError || isMobile) return;

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
  }, [robotActive, robotLoaded, robotError, isMobile]);

  // Update robot position periodically
  useEffect(() => {
    if (robotActive && robotLoaded && !robotError && !isMobile) {
      const interval = setInterval(updateRobotPosition, 5000); // Move every 5 seconds
      return () => clearInterval(interval);
    }
  }, [robotActive, robotLoaded, robotError, updateRobotPosition, isMobile]);

  // Handle window resize to keep robot within bounds
  useEffect(() => {
    const handleResize = () => {
      if (robotActive && robotLoaded && !robotError && !isMobile) {
        // Adjust position if needed when window is resized
        updateRobotPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [robotActive, robotLoaded, robotError, updateRobotPosition, isMobile]);

  // Fallback component if iframe fails to load
  const RobotFallback = useCallback(() => (
    robotActive && !isMobile && (
      <motion.div
        className="fixed w-64 h-64 flex items-center justify-center bg-white/80 dark:bg-black/20 rounded-2xl border border-blue-500/20 backdrop-blur-md shadow-lg z-20"
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
          <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <FaRobot className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-blue-600 dark:text-blue-300">3D Robot Preview</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Interactive 3D model would appear here</p>
          <a
            href="https://my.spline.design/r4xbot-nPsJWDkJ93714OJ61yISQUZa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
          >
            View Robot
          </a>
        </div>
      </motion.div>
    )
  ), [robotActive, positions.x, positions.y, isMobile]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 relative"
    >
      {/* Animated background elements - Keeping exact animation logic but updating colors to be subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-1/4 -left-1/4 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-1/4 -right-1/4 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Robot - Only show when robotActive is true and on non-mobile screens */}
      {robotActive && !isMobile && !robotError ? (
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
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-2xl backdrop-blur-sm">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-blue-500">Loading 3D Robot...</p>
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
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-500">
                Raju Ch
              </span>
            </h1>
            <div className="h-1 w-24 mx-auto bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-1xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-8"
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
              className="group relative overflow-hidden px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 rounded-full text-blue-600 dark:text-blue-400 font-medium border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Contact Me
            </a>

            {/* Robot Toggle Button */}
            <button
              onClick={onRobotToggle}
              className="group px-8 py-4 rounded-full text-blue-600 dark:text-blue-400 font-medium border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <span className="">
                {robotActive ? 'Hide Robot' : 'Show Robot'}
              </span>
              <FaRobot className="w-5 h-5" />
            </button>
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
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L12 17L20 12"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 17L12 22L20 17"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;