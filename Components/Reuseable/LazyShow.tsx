"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LazyShowProps {
    children: React.ReactNode;
    yOffset?: number;
    duration?: number;
}

const LazyShow: React.FC<LazyShowProps> = ({
                                               children,
                                               yOffset = 30,
                                               duration = 0.6,
                                           }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setVisible] = useState(false);
    // this ref lets us ignore the very first intersection (on mount)
    const skipInitial = useRef(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (skipInitial.current) {
                        // first time we see it, just mark that we've skipped
                        skipInitial.current = false;
                        return;
                    }
                    // only on the *second* (or later) intersection do we actually fire
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: yOffset }}
                animate={
                    isVisible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: yOffset }
                }
                transition={{ duration }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default LazyShow;
