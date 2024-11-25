"use client";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export default function LottieBackground() {
    const containerRef = useRef(null);
    const [animationPath, setAnimationPath] = useState("/images/tablet.json");
    const animationRef = useRef(null);
    const getAnimationPath = () => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth;

            if (width >= 1200) {
                return "/images/backgrounds/background-x-desktop.json";
            } else if (width >= 860) {
                return "/images/backgrounds/background-desktop.json";
            } else {
                return "/images/backgrounds/background-tablet.json";
            }
        }
        return animationPath; // Fallback
    };

    const updateAnimationPath = () => {
        const newPath = getAnimationPath();
        if (newPath !== animationPath) {
            setAnimationPath(newPath);
        }
    };

    useEffect(() => {
        updateAnimationPath();

        animationRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "canvas",
            loop: true,
            autoplay: true,
            path: animationPath,
            rendererSettings: {
                preserveAspectRatio: "none",
            },
        });

        const handleResize = () => {
            updateAnimationPath();
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
            if (animationRef.current) {
                animationRef.current.destroy();
            }
        };
    }, [animationPath]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                zIndex: -1,
            }}
        />
    );
}
