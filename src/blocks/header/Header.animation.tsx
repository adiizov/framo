"use client"
import { AnimatePresence, motion, stagger } from "framer-motion";
import { useState } from "react";

const HeaderAnimation = () => {
    const [showAnimation, setShowAnimation] = useState(true);
    const animationText = "Framo"
    const startTime = Date.now()

    if(!showAnimation) {
        return null;
    }

    return (
        <div className="absolute w-full h-full inset-0 bg-primary-foreground z-[100] flex justify-center items-center">
            <AnimatePresence>
                {showAnimation
                    && <motion.ul className={"flex overflow-hidden"} animate={{transition: {
                            delayChildren: stagger(0.3),
                        }} }>
                        {animationText.split("").map((item, index) => {
                            const delay = index * 0.1
                            return <motion.li
                                layoutRoot
                                initial={{y: 160}}
                                key={`${item}-${index}`}
                                exit={{ opacity: 0 }}
                                animate={{ y: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 30,
                                    },
                                }}
                                onAnimationComplete={() => setShowAnimation(false)}
                                className={"font-helveticaNowDisplay font-bold text-[160px] text-primary uppercase leading-[100%]"}
                            >
                                {item}
                            </motion.li>
                        })}
                    </motion.ul>}
            </AnimatePresence>
        </div>
    );
};

export default HeaderAnimation;