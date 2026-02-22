import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

const defaultItems = [
    {
        num: "01",
        name: "Full Stack Development",
        clipId: "clip-original",
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
        num: "02",
        name: "UI UX Design",
        clipId: "clip-hexagons",
        image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
        num: "03",
        name: "Problem Solving",
        clipId: "clip-pixels",
        image:
            "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
];

export const StackInteractor = ({ items = defaultItems, className }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const mainGroupRef = useRef(null);
    const masterTl = useRef(null);

    const createLoop = (index) => {
        const item = items[index];
        const selector = `#${item.clipId} .path`;

        if (masterTl.current) masterTl.current.kill();

        if (imageRef.current) imageRef.current.setAttribute("href", item.image);
        if (mainGroupRef.current)
            mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);

        gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        // 1. IN  (Expo Out)
        tl.to(selector, {
            scale: 1,
            duration: 0.8,
            stagger: { amount: 0.4, from: "random" },
            ease: "expo.out",
        })
            // 2. IDLE (Sine Breath)
            .to(selector, {
                scale: 1.05,
                duration: 1.5,
                yoyo: true,
                repeat: 1,
                ease: "sine.inOut",
                stagger: { amount: 0.2, from: "center" },
            })
            // 3. OUT (Expo In)
            .to(selector, {
                scale: 0,
                duration: 0.6,
                stagger: { amount: 0.3, from: "edges" },
                ease: "expo.in",
            });

        masterTl.current = tl;
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            createLoop(0);
        }, containerRef);
        return () => ctx.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleItemHover = (index) => {
        if (index === activeIndex) return;
        setActiveIndex(index);
        createLoop(index);
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "flex flex-col md:flex-row items-center justify-between w-full h-full overflow-hidden transition-colors duration-500",
                className
            )}
        >
            {/* LEFT: Menu list */}
            <div className="z-20 w-full md:w-1/2 px-6 md:px-12">
                <nav>
                    <ul className="flex flex-col gap-6 md:gap-14">
                        {items.map((item, index) => (
                            <li
                                key={item.num}
                                onMouseEnter={() => handleItemHover(index)}
                                className="group cursor-pointer"
                            >
                                <div className="flex items-start gap-6">
                                    <span
                                        className={cn(
                                            "text-2xl md:text-3xl font-bold transition-all duration-500 mt-2",
                                            activeIndex === index
                                                ? "text-blue-500 scale-110"
                                                : "text-zinc-400 dark:text-zinc-600"
                                        )}
                                    >
                                        {item.num}
                                    </span>

                                    <h2
                                        className={cn(
                                            "text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] transition-all duration-700",
                                            activeIndex === index
                                                ? "text-zinc-950 dark:text-white opacity-100 translate-x-4"
                                                : "opacity-40 translate-x-0 text-zinc-500 dark:text-transparent dark:[text-stroke:1.5px_#52525b] dark:[-webkit-text-stroke:1.5px_#52525b]"
                                        )}
                                    >
                                        {item.name.split(" ")[0]}
                                        <br />
                                        {item.name.split(" ").slice(1).join(" ")}
                                    </h2>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* RIGHT: GSAP SVG canvas */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                <div className="absolute w-[100%] h-[100%] bg-blue-500/10 dark:bg-blue-600/5 blur-[90px] md:blur-[120px] rounded-full transition-opacity duration-1000" />

                <svg
                    viewBox="0 0 500 500"
                    className="w-[60%] md:w-[85%] max-w-[480px] h-auto z-10 drop-shadow-xl dark:drop-shadow-[0_0_60px_rgba(0,0,0,0.8)]"
                    style={{ pointerEvents: "none" }}
                >
                    <defs>
                        {/* ── BRAIN: 9 organic ellipse lobes forming left + right hemispheres ── */}
                        <clipPath id="clip-original">
                            {/* Left top lobe */}
                            <ellipse className="path" cx="158" cy="125" rx="100" ry="78" />
                            {/* Left middle lobe */}
                            <ellipse className="path" cx="105" cy="235" rx="82" ry="82" />
                            {/* Left lower lobe */}
                            <ellipse className="path" cx="148" cy="352" rx="88" ry="72" />
                            {/* Left bottom lobe */}
                            <ellipse className="path" cx="208" cy="410" rx="72" ry="56" />
                            {/* Right top lobe */}
                            <ellipse className="path" cx="342" cy="125" rx="100" ry="78" />
                            {/* Right middle lobe */}
                            <ellipse className="path" cx="395" cy="235" rx="82" ry="82" />
                            {/* Right lower lobe */}
                            <ellipse className="path" cx="352" cy="352" rx="88" ry="72" />
                            {/* Right bottom lobe */}
                            <ellipse className="path" cx="292" cy="410" rx="72" ry="56" />
                            {/* Corpus callosum — centre spine */}
                            <ellipse className="path" cx="250" cy="260" rx="36" ry="138" />
                        </clipPath>

                        {/* ── MONITOR: screen + neck + base ── */}
                        <clipPath id="clip-hexagons">
                            {/* Screen */}
                            <rect className="path" x="18" y="25" width="464" height="318" rx="18" />
                            {/* Neck */}
                            <rect className="path" x="214" y="343" width="72" height="82" rx="6" />
                            {/* Base */}
                            <rect className="path" x="138" y="420" width="224" height="34" rx="10" />
                        </clipPath>

                        {/* ── LIGHTBULB: bulb + filament lines + base rings ── */}
                        <clipPath id="clip-pixels">
                            {/* Bulb */}
                            <ellipse className="path" cx="250" cy="195" rx="148" ry="152" />
                            {/* Filament left */}
                            <rect className="path" x="224" y="158" width="10" height="72" rx="5" />
                            {/* Filament centre */}
                            <rect className="path" x="245" y="142" width="10" height="88" rx="5" />
                            {/* Filament right */}
                            <rect className="path" x="266" y="158" width="10" height="72" rx="5" />
                            {/* Base ring 1 */}
                            <rect className="path" x="194" y="328" width="112" height="28" rx="7" />
                            {/* Base ring 2 */}
                            <rect className="path" x="206" y="360" width="88" height="24" rx="7" />
                            {/* Base ring 3 */}
                            <rect className="path" x="220" y="388" width="60" height="20" rx="7" />
                        </clipPath>
                    </defs>

                    <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
                        <image
                            ref={imageRef}
                            href={items[0].image}
                            width="500"
                            height="500"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </g>
                </svg>
            </div>
        </div >
    );
};

export default StackInteractor;
