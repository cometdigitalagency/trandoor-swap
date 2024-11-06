"use client";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export default function LottieBackground() {
    const containerRef = useRef(null);
    const [animationPath, setAnimationPath] = useState("/images/tablet.json"); // Default path
    const animationRef = useRef(null); // Ref to store the animation instance
    // Function to update the animation path based on screen size
    const updateAnimationPath = () => {
        if (window.innerWidth >= 1200) {
            setAnimationPath("/images/backgrounds/background-x-desktop.json"); // Large screen (Desktop)
        } else if (window.innerWidth >= 860) {
            setAnimationPath("/images/backgrounds/background-desktop.json"); // Large screen (Desktop)
        } else {
            setAnimationPath("/images/backgrounds/background-tablet.json"); // Small and medium screens (Tablet)
        }
    };

    // Set up the Lottie animation on component mount and window resize
    useEffect(() => {
        updateAnimationPath(); // Set the initial path based on screen size

        // Initialize the Lottie animation
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

        // Handle screen resize to adjust the animation path
        const handleResize = () => {
            updateAnimationPath();
            // animation.setPath(animationPath); // Update animation path after resize
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationRef.current) {
                animationRef.current.destroy(); // Cleanup the animation on unmount
            }
        };
    }, [animationPath]); // Dependency on animationPath to trigger reloading animation

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                // transform: "translate(-50%, -50%)", // Centers the animation
                width: "100%", // Full width of the viewport
                height: "100%", // Full height of the viewport
                overflow: "hidden", // Ensures no overflow
                zIndex: -1, // Behind other elements
            }}
        />
    );
}
