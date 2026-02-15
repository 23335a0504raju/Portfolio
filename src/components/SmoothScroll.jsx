import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScroll = () => {
    const location = useLocation();
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links with delegation
        const onClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId && targetId !== '#' && document.querySelector(targetId)) {
                    lenis.scrollTo(targetId);
                }
                // If target doesn't exist on this page (e.g. cross-route link), 
                // we don't preventDefault here if it was a real link, but usually 
                // those are handled by router or useNavigate.
            }
        };

        document.addEventListener('click', onClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', onClick);
            lenisRef.current = null;
        };
    }, []);

    // Handle hash scrolling on route change
    useEffect(() => {
        if (location.hash && lenisRef.current) {
            // Small timeout to ensure DOM is ready
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
