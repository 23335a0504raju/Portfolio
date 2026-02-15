import React, { useState } from 'react';
import { cn } from '../../lib/utils'; // Adjust path based on project structure

// --- Data for the image accordion ---
const accordionItems = [
    {
        id: 1,
        title: 'Full Stack Development',
        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop', // Code/Screen
    },
    {
        id: 2,
        title: 'AI & Machine Learning',
        imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop', // Data/AI
    },
    {
        id: 3,
        title: 'Backend Engineering',
        imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop', // Server/Cloud
    },
    {
        id: 4,
        title: 'DSA & Algorithms',
        imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop', // Algo/Matrix
    },
    {
        id: 5,
        title: 'UI/UX Design',
        imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop', // Design/Creative
    },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
    item: {
        id: number;
        title: string;
        imageUrl: string;
    };
    isActive: boolean;
    onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
    return (
        <div
            className={cn(
                "relative h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out",
                isActive ? "w-[400px]" : "w-[60px]"
            )}
            onMouseEnter={onMouseEnter}
        >
            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error';
                }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Caption Text */}
            <span
                className={cn(
                    "absolute text-white text-lg font-semibold whitespace-nowrap transition-all duration-300 ease-in-out",
                    isActive
                        ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0" // Active state: horizontal, bottom-center
                        : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90" // Inactive state: vertical
                )}
            >
                {item.title}
            </span>
        </div>
    );
};

// --- Main App Component ---
export function LandingAccordionItem() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleItemHover = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full font-sans">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4 max-w-5xl mx-auto">
                {accordionItems.map((item, index) => (
                    <AccordionItem
                        key={item.id}
                        item={item}
                        isActive={index === activeIndex}
                        onMouseEnter={() => handleItemHover(index)}
                    />
                ))}
            </div>
        </div>
    );
}

// For demo purposes in About.jsx
export default LandingAccordionItem;
