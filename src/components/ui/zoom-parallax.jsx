'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function ZoomParallax({ images }) {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.8 : 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 2 : 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 2.2 : 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 2.5 : 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 2.8 : 9]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    return (
        <div ref={container} className={`relative ${isMobile ? 'h-[120vh]' : 'h-[180vh]'}`}>
            <div className={`sticky ${isMobile ? 'top-16 h-[82vh]' : 'top-0 h-screen'} overflow-hidden`}>
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];

                    const mobilePositionClasses = [
                        '[&>div]:!h-[34vh] [&>div]:!w-[88vw]',
                        '[&>div]:!top-[8vh] [&>div]:!left-[8vw] [&>div]:!h-[20vh] [&>div]:!w-[54vw]',
                        '[&>div]:!top-[18vh] [&>div]:!left-[-2vw] [&>div]:!h-[22vh] [&>div]:!w-[48vw]',
                        '[&>div]:!top-[36vh] [&>div]:!left-[6vw] [&>div]:!h-[18vh] [&>div]:!w-[44vw]',
                        '[&>div]:!top-[41vh] [&>div]:!left-[50vw] [&>div]:!h-[17vh] [&>div]:!w-[40vw]',
                        '[&>div]:!top-[54vh] [&>div]:!left-[12vw] [&>div]:!h-[16vh] [&>div]:!w-[40vw]',
                        '[&>div]:!top-[57vh] [&>div]:!left-[58vw] [&>div]:!h-[14vh] [&>div]:!w-[28vw]'
                    ];

                    const desktopPositionClasses = [
                        '',
                        'md:[&>div]:!-top-[30vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[30vh] md:[&>div]:!w-[35vw]',
                        'md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[25vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[20vw]',
                        'md:[&>div]:!left-[27.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[25vw]',
                        'md:[&>div]:!top-[27.5vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[20vw]',
                        'md:[&>div]:!top-[27.5vh] md:[&>div]:!-left-[22.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[30vw]',
                        'md:[&>div]:!top-[22.5vh] md:[&>div]:!left-[25vw] md:[&>div]:!h-[15vh] md:[&>div]:!w-[15vw]'
                    ];

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center ${mobilePositionClasses[index] || ''} ${desktopPositionClasses[index] || ''}`}
                        >
                            <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-xl md:rounded-2xl shadow-xl border border-white/10 group">
                                <img
                                    src={src || '/placeholder.svg'}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Card Text Content */}
                                <div className="absolute bottom-0 left-0 p-3 md:p-4 w-full">
                                    <h3 className="text-white text-xs sm:text-sm md:text-base font-bold tracking-tight drop-shadow-md line-clamp-2 md:line-clamp-none">
                                        {alt}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
