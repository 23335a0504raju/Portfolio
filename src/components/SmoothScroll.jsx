import gsap from 'gsap';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScroll = () => {
    const location = useLocation();
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        // ── Sync Lenis with GSAP's ticker so both share ONE RAF loop ──
        // This prevents competing requestAnimationFrame callbacks that
        // break Framer Motion's useScroll on desktop.
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // Force a native scroll event on every Lenis tick so
        // Framer Motion's useScroll always reads the latest position.
        lenis.on('scroll', () => {
            window.dispatchEvent(new Event('scroll'));
        });

        // Handle anchor links with delegation
        const onClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId && targetId !== '#' && document.querySelector(targetId)) {
                    lenis.scrollTo(targetId);
                }
            }
        };

        document.addEventListener('click', onClick);

        return () => {
            // Remove GSAP ticker callback and destroy lenis
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
            lenis.destroy();
            document.removeEventListener('click', onClick);
            lenisRef.current = null;
        };
    }, []);

    // Handle hash scrolling on route change
    useEffect(() => {
        if (location.hash && lenisRef.current) {
            setTimeout(() => {
                const target = document.querySelector(location.hash);
                if (target) {
                    lenisRef.current.scrollTo(location.hash, { offset: 0 });
                }
            }, 100);
        }
    }, [location]);

    return null;
};

export default SmoothScroll;
