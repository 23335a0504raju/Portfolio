import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function CardStack() {
    const initialCards = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            alt: "CodeAlpha Internship",
            title: "CodeAlpha Internship",
            description: "Full Stack Developer Internship"
        },

        {
            id: 3,
            src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            alt: "AIML Internship",
            title: "AIML Internship",
            description: "Machine Learning, Data Analysis, and AI"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            alt: "Python Essentials",
            title: "Python Essentials 1 & 2",
            description: "Completed Python Essentials from Cisco"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=60",
            alt: "CCNA-3 & Cybersecurity",
            title: "CCNA-3 & Cybersecurity",
            description: "Completed all modules of CCNA 3"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            alt: "Cloud Computing",
            title: "Cloud Computing",
            description: "Completed Cloud Computing Course (NPTEL)"
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            alt: "Deloitte Australia Tech",
            title: "Deloitte Australia Tech",
            description: "Job simulation involving development"
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            alt: "GitHub Copilot",
            title: "GitHub Copilot",
            description: "Introduction to GitHub Copilot course"
        }
    ];

    const [cards, setCards] = useState(initialCards);
    const [isDark] = useState(true);
    const [dragDirection, setDragDirection] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const dragY = useMotionValue(0);
    const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

    // Configuration
    const offset = 10;
    const scaleStep = 0.06;
    const dimStep = 0.15;
    const stiff = 170;
    const damp = 26;
    const borderRadius = 12;
    const swipeThreshold = 50;

    const spring = {
        type: 'spring',
        stiffness: stiff,
        damping: damp
    };

    const moveToEnd = () => {
        setCards(prev => [...prev.slice(1), prev[0]]);
        setCurrentIndex((prev) => (prev + 1) % initialCards.length);
    };

    const moveToStart = () => {
        setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
        setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
    };

    const handleDragEnd = (_, info) => {
        const velocity = info.velocity.y;
        const dragOffset = info.offset.y;

        if (Math.abs(dragOffset) > swipeThreshold || Math.abs(velocity) > 500) {
            if (dragOffset < 0 || velocity < 0) {
                setDragDirection('up');
                setTimeout(() => {
                    moveToEnd();
                    setDragDirection(null);
                }, 150);
            } else {
                setDragDirection('down');
                setTimeout(() => {
                    moveToStart();
                    setDragDirection(null);
                }, 150);
            }
        }
        dragY.set(0);
    };

    // Theme configuration
    const theme = {
        dark: {
            bg: 'bg-transparent',
            text: 'text-white',
            textSecondary: 'text-gray-400',
            toggleBg: 'bg-gray-800/80 hover:bg-gray-700/80',
            toggleBorder: 'border-white/10',
            infoBox: 'bg-[#09090b]/90 border-white/10',
            shadowCard: '0 25px 50px rgba(0, 0, 0, 0.7)',
            shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.4)',
            cardBorder: 'border border-white/10',
            controlBg: 'bg-[#09090b]/80 hover:bg-[#09090b]',
            cardInfoBg: 'bg-gradient-to-t from-black/90 to-transparent'
        },
        light: {
            bg: 'bg-transparent',
            text: 'text-gray-900',
            textSecondary: 'text-gray-600',
            toggleBg: 'bg-white/80 hover:bg-gray-100/80',
            toggleBorder: 'border-gray-200',
            infoBox: 'bg-white/90 border-gray-200',
            shadowCard: '0 25px 50px rgba(0, 0, 0, 0.15)',
            shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.08)',
            cardBorder: 'border border-gray-200',
            controlBg: 'bg-white/80 hover:bg-gray-100/80',
            cardInfoBg: 'bg-gradient-to-t from-white/90 to-transparent'
        }
    };

    const currentTheme = isDark ? theme.dark : theme.light;

    return (
        <div className={`w-full h-[650px] flex items-start pt-24 justify-center transition-all duration-500 relative overflow-visible`}>

            {/* Card Stack Container */}
            <div className="relative w-[85vw] sm:w-[24rem] h-[14rem] sm:h-[16rem] md:w-[36rem] md:h-[20rem] lg:w-[54rem] lg:h-[32rem] xl:w-[60rem] xl:h-[36rem] overflow-visible z-10">
                <ul className="relative w-full h-full m-0 p-0">
                    <AnimatePresence>
                        {cards.map(({ id, src, alt, title, description }, i) => {
                            const isFront = i === 0;
                            const brightness = Math.max(0.3, 1 - i * dimStep);
                            const baseZ = cards.length - i;

                            return (
                                <motion.li
                                    key={id}
                                    className={`absolute w-full h-full list-none overflow-hidden ${currentTheme.cardBorder}`}
                                    style={{
                                        transformOrigin: "top center",
                                        borderRadius: `${borderRadius}px`,
                                        cursor: isFront ? 'grab' : 'auto',
                                        touchAction: 'none',
                                        boxShadow: isFront
                                            ? currentTheme.shadowCard
                                            : currentTheme.shadowCardBack,
                                        rotateX: isFront ? rotateX : 0,
                                        transformPerspective: 1000
                                    }}
                                    initial={{
                                        top: `${i * -offset}px`,
                                        scale: 1 - i * scaleStep,
                                        filter: `brightness(${brightness})`,
                                        zIndex: baseZ,
                                        opacity: 1
                                    }}
                                    animate={{
                                        top: `${i * -offset}px`,
                                        scale: 1 - i * scaleStep,
                                        filter: `brightness(${brightness})`,
                                        zIndex: baseZ,
                                        opacity: dragDirection && isFront ? 0 : 1
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.8,
                                        transition: { duration: 0.2 }
                                    }}
                                    transition={spring}
                                    drag={isFront ? 'y' : false}
                                    dragConstraints={{ top: 0, bottom: 0 }}
                                    dragElastic={0.7}
                                    onDrag={(_, info) => {
                                        if (isFront) {
                                            dragY.set(info.offset.y);
                                        }
                                    }}
                                    onDragEnd={handleDragEnd}
                                    whileDrag={
                                        isFront
                                            ? {
                                                zIndex: cards.length + 1,
                                                cursor: 'grabbing',
                                                scale: 1.05,
                                            }
                                            : {}
                                    }
                                >
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="w-full h-full object-cover pointer-events-none select-none"
                                        draggable={false}
                                    />

                                    {/* Card Info Overlay */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 right-0 p-4 ${currentTheme.cardInfoBg}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isFront ? 1 : 0,
                                            y: isFront ? 0 : 20
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-white font-bold text-lg tracking-tight">{title}</h3>
                                        <p className="text-white/80 text-xs mt-1 font-medium">{description}</p>
                                    </motion.div>
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </ul>
            </div>

            {/* Progress Indicator */}
            <div className="absolute top-[5rem] md:top-[6rem] left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {initialCards.map((_, i) => (
                    <motion.div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex % initialCards.length
                            ? `${isDark ? 'bg-white' : 'bg-gray-900'} w-6`
                            : `${isDark ? 'bg-gray-700' : 'bg-gray-300'} w-1.5`
                            }`}
                    />
                ))}
            </div>


        </div>
    );
}
