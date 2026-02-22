import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ContainerScroll = ({ titleComponent, children }) => {
    const containerRef = useRef(null);
    const scrollProgress = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        // Use getBoundingClientRect on every scroll tick.
        // This works reliably with Lenis because Lenis calls window.scrollTo()
        // which fires native scroll events (dispatched by SmoothScroll.jsx).
        const updateProgress = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // scrolled = how many px of the container have passed above the viewport top
            const scrolled = -rect.top;
            // total = how far the container travels before its bottom hits viewport bottom
            const total = rect.height - windowHeight;

            const progress = total > 0
                ? Math.max(0, Math.min(1, scrolled / total))
                : 0;

            scrollProgress.set(progress);
        };

        window.addEventListener("scroll", updateProgress, { passive: true });
        updateProgress(); // Run once on mount in case page reloads mid-scroll
        return () => window.removeEventListener("scroll", updateProgress);
    }, [scrollProgress]);

    const scaleDimensions = isMobile ? [0.7, 0.9] : [1.05, 1];

    const rotate = useTransform(scrollProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollProgress, [0, 1], scaleDimensions);
    const translate = useTransform(scrollProgress, [0, 1], [0, -100]);

    return (
        <div
            className="h-[60rem] md:h-[90rem] flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div
                className="py-10 md:py-40 w-full relative"
                style={{ perspective: "1000px" }}
            >
                <Header translate={translate} titleComponent={titleComponent} />
                <Card rotate={rotate} translate={translate} scale={scale}>
                    {children}
                </Card>
            </div>
        </div>
    );
};

export const Header = ({ translate, titleComponent }) => {
    return (
        <motion.div
            style={{ translateY: translate }}
            className="max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({ rotate, scale, children }) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-7xl -mt-12 mx-auto h-[46rem] md:h-[52rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
                {children}
            </div>
        </motion.div>
    );
};
