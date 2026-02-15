import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const RobotWrapper = ({ robotActive }) => {
    const [robotLoaded, setRobotLoaded] = useState(false);
    const [robotError, setRobotError] = useState(false);
    const [positions, setPositions] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const robotRef = useRef(null);

    // Check if screen is mobile size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleIframeLoad = () => {
        setRobotLoaded(true);
        updateRobotPosition();
    };

    const handleIframeError = () => {
        setRobotError(true);
        setRobotLoaded(true);
    };

    // Function to update robot position
    const updateRobotPosition = useCallback(() => {
        if (!robotActive || !robotLoaded || robotError || isMobile) return;

        const robotWidth = robotRef.current?.offsetWidth || 320;
        const robotHeight = robotRef.current?.offsetHeight || 320;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const maxX = viewportWidth - robotWidth;
        const maxY = viewportHeight - robotHeight;
        const safeMaxX = Math.max(0, maxX);
        const safeMaxY = Math.max(0, maxY);

        const newX = Math.random() * safeMaxX;
        const newY = Math.random() * safeMaxY;

        setPositions({ x: newX, y: newY });
    }, [robotActive, robotLoaded, robotError, isMobile]);

    // Update robot position periodically
    useEffect(() => {
        if (robotActive && robotLoaded && !robotError && !isMobile) {
            const interval = setInterval(updateRobotPosition, 5000);
            return () => clearInterval(interval);
        }
    }, [robotActive, robotLoaded, robotError, updateRobotPosition, isMobile]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (robotActive && robotLoaded && !robotError && !isMobile) {
                updateRobotPosition();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [robotActive, robotLoaded, robotError, updateRobotPosition, isMobile]);


    const RobotFallback = useCallback(() => (
        robotActive && !isMobile && (
            <motion.div
                className="fixed w-64 h-64 flex items-center justify-center bg-white/80 dark:bg-black/20 rounded-2xl border border-blue-500/20 backdrop-blur-md shadow-lg z-20 pointer-events-none"
                animate={{ x: positions.x, y: positions.y }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                style={{ left: 0, top: 0 }}
            >
                <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <FaRobot className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-blue-600 dark:text-blue-300">3D Robot Preview</p>
                </div>
            </motion.div>
        )
    ), [robotActive, positions.x, positions.y, isMobile]);

    if (!robotActive || isMobile) return null;

    return (
        <>
            {!robotError ? (
                <motion.div
                    ref={robotRef}
                    className="fixed w-80 h-80 z-20 pointer-events-none"
                    animate={{ x: positions.x, y: positions.y }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    style={{ left: 0, top: 0 }}
                >
                    {/* Pointer events auto on iframe to allow interaction if needed, though mostly visual */}
                    <div className="w-full h-full pointer-events-auto">
                        <iframe
                            src="https://my.spline.design/r4xbot-nPsJWDkJ93714OJ61yISQUZa/"
                            frameBorder="0"
                            className="w-full h-full bg-transparent"
                            onLoad={handleIframeLoad}
                            onError={handleIframeError}
                            title="3D Robot Animation"
                            allowFullScreen
                            allowTransparency="true"
                            style={{ background: 'transparent', colorScheme: 'normal' }}
                        />
                    </div>
                    {!robotLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-2xl backdrop-blur-sm">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                            </div>
                        </div>
                    )}
                </motion.div>
            ) : (
                <RobotFallback />
            )}
        </>
    );
};

export default RobotWrapper;
