import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../lib/utils';

export function DottedSurface({ className, ...props }) {
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- 1. SETUP ---
        const SEPARATION = 100;
        const AMOUNTX = 50;
        const AMOUNTY = 50;
        const numParticles = AMOUNTX * AMOUNTY;

        const scene = new THREE.Scene();
        
        // Setup Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000,
        );
        camera.position.set(0, 250, 1000);

        // Setup Renderer
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); 
        
        // Force clean the container to prevent duplicate canvases
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // --- 2. GEOMETRY & THEME LOGIC ---
        const positions = new Float32Array(numParticles * 3);
        const colors = new Float32Array(numParticles * 3);

        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                // Positions
                positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                positions[i + 1] = 0;
                positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

                // High Contrast Colors
                if (theme === 'dark') {
                    // Bright white for dark theme
                    colors[i] = 1.0;     // R
                    colors[i + 1] = 1.0; // G
                    colors[i + 2] = 1.0; // B
                } else {
                    // Pure deep black for light theme
                    colors[i] = 0.0;     // R
                    colors[i + 1] = 0.0; // G
                    colors[i + 2] = 0.0; // B
                }
                i += 3;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // --- 3. MATERIAL ---
        const material = new THREE.PointsMaterial({
            size: 5,               // Slightly larger dots for better visibility
            vertexColors: true,     // Using the colors array we just built
            transparent: true,
            opacity: theme === 'dark' ? 0.8 : 0.9, // High visibility
            sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // --- 4. ANIMATION LOOP ---
        let count = 0;
        let animationId;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const posAttr = geometry.attributes.position;
            const posArray = posAttr.array;

            let k = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    // The wave logic
                    posArray[k * 3 + 1] =
                        Math.sin((ix + count) * 0.3) * 50 +
                        Math.sin((iy + count) * 0.5) * 50;
                    k++;
                }
            }

            posAttr.needsUpdate = true;
            renderer.render(scene, camera);
            count += 0.1;
        };

        // --- 5. UTILS & CLEANUP ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            
            // Proper disposal to prevent memory leaks and "ghost" dots
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [theme]); // The key: re-running this creates the fresh black or white state

    return (
        <div
            ref={containerRef}
            className={cn('pointer-events-none fixed inset-0 -z-10', className)}
            {...props}
        />
    );
}