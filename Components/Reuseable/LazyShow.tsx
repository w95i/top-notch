"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const LazyShow = ({
                      children,
                      yOffset = 30,
                      duration = 0.6,
                  }: {
    children: React.ReactNode;
    yOffset?: number;
    duration?: number;
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null, // viewport
                rootMargin: "0px",
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: yOffset }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
                transition={{ duration }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default LazyShow;
