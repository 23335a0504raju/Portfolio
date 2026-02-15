import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/utils";

export const LayoutGrid = ({ cards }) => {
    const [selected, setSelected] = useState(null);
    const [lastSelected, setLastSelected] = useState(null);

    const handleClick = (card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="w-full h-full p-2 md:p-10 grid grid-cols-2 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[500px] max-w-7xl mx-auto gap-4 relative">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "row-span-1")}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative overflow-hidden",
                            selected?.id === card.id
                                ? "rounded-xl cursor-default fixed inset-0 h-[85vh] w-[90vw] md:w-[80vw] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-white dark:bg-gray-900 rounded-xl h-full w-full cursor-pointer"
                                    : "bg-white dark:bg-gray-900 rounded-xl h-full w-full cursor-pointer"
                        )}
                        layoutId={`card-${card.id}`}
                    >
                        {selected?.id === card.id && <SelectedCard selected={selected} />}
                        <ImageComponent card={card} />
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "fixed inset-0 h-full w-full bg-black/60 z-40",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 1 : 0 }}
            />
        </div>
    );
};

const ImageComponent = ({ card }) => {
    return (
        <motion.img
            layoutId={`image-${card.id}-image`}
            src={card.thumbnail}
            height="500"
            width="500"
            className={cn(
                "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
            )}
            alt="thumbnail"
        />
    );
};

const SelectedCard = ({ selected }) => {
    return (
        <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
            />
            <motion.div
                layoutId={`content-${selected?.id}`}
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 100,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="relative px-8 pb-4 z-[70]"
            >
                {selected?.content}
            </motion.div>
        </div>
    );
};
