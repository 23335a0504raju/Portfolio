import { memo, useEffect, useMemo, useState } from 'react';

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ angle, orbitRadius, size, icon, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;

    return (
        <div
            className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                zIndex: isHovered ? 20 : 10,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
                style={{
                    boxShadow: isHovered
                        ? `0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)`
                        : undefined
                }}
            >
                <div className="text-2xl flex items-center justify-center w-full h-full">
                    {icon}
                </div>
                {isHovered && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none z-30">
                        {label}
                    </div>
                )}
            </div>
        </div>
    );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }) => {
    const glowColors = {
        cyan: {
            primary: 'rgba(255, 255, 255, 0.3)',
            secondary: 'rgba(255, 255, 255, 0.1)',
            border: 'rgba(255, 255, 255, 0.2)'
        },
        purple: {
            primary: 'rgba(200, 200, 200, 0.3)',
            secondary: 'rgba(200, 200, 200, 0.1)',
            border: 'rgba(200, 200, 200, 0.2)'
        }
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                animationDelay: `${animationDelay}s`,
            }}
        >
            {/* Glowing background */}
            <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                    background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
                    boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
                    animation: 'pulse 4s ease-in-out infinite',
                    animationDelay: `${animationDelay}s`,
                }}
            />

            {/* Static ring for depth */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    border: `1px solid ${colors.border}`,
                    boxShadow: `inset 0 0 20px ${colors.secondary}`,
                }}
            />
        </div>
    );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
const OrbitingSkills = ({ skills, categoryName }) => {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        let animationFrameId;
        let lastTime = performance.now();

        const animate = (currentTime) => {
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            setTime(prevTime => prevTime + deltaTime);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    // Dynamic configuration based on skills count
    const { orbitConfigs, distributedSkills } = useMemo(() => {
        const configs = [];
        const distSkills = [];

        if (skills.length === 0) return { orbitConfigs: [], distributedSkills: [] };

        // Determine number of orbits needed
        const hasOuter = skills.length > 4;

        // Configs
        configs.push({ radius: 80, glowColor: 'cyan', delay: 0 }); // Inner
        if (hasOuter) {
            configs.push({ radius: 140, glowColor: 'purple', delay: 1.5 }); // Outer
        }

        // Distribute skills
        if (!hasOuter) {
            // All on inner
            skills.forEach((skill, i) => {
                distSkills.push({
                    ...skill,
                    orbitRadius: 80,
                    size: 45,
                    speed: 1,
                    phaseShift: (i * 2 * Math.PI) / skills.length
                });
            });
        } else {
            // split roughly half-half or fill inner then outer
            // Let's do alternating or simple split
            const innerCount = Math.ceil(skills.length / 2);
            const outerCount = skills.length - innerCount;

            skills.forEach((skill, i) => {
                if (i < innerCount) {
                    distSkills.push({
                        ...skill,
                        orbitRadius: 80,
                        size: 40,
                        speed: 1,
                        phaseShift: (i * 2 * Math.PI) / innerCount
                    });
                } else {
                    distSkills.push({
                        ...skill,
                        orbitRadius: 140,
                        size: 50,
                        speed: -0.6,
                        phaseShift: ((i - innerCount) * 2 * Math.PI) / outerCount
                    });
                }
            });
        }

        return { orbitConfigs: configs, distributedSkills: distSkills };
    }, [skills]);


    return (
        <div className="w-full flex-col flex items-center justify-center overflow-hidden py-10 relative">
            <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white z-20 relative">
                {categoryName}
            </h3>

            <div
                className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] flex items-center justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >

                {/* Render glowing orbit paths */}
                {orbitConfigs.map((config) => (
                    <GlowingOrbitPath
                        key={`path-${config.radius}`}
                        radius={config.radius}
                        glowColor={config.glowColor}
                        animationDelay={config.delay}
                    />
                ))}

                {/* Render orbiting skill icons */}
                {distributedSkills.map((skill, index) => {
                    const angle = time * skill.speed + (skill.phaseShift || 0);
                    return (
                        <OrbitingSkill
                            key={index}
                            label={skill.name}
                            icon={skill.icon}
                            angle={angle}
                            orbitRadius={skill.orbitRadius}
                            size={skill.size}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default OrbitingSkills;
