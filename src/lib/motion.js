export const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.8
};

export const defaultFadeInUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { ...springTransition, duration: 0.6 }
};

export const defaultStagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
