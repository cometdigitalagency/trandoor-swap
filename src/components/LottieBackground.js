// "use client";
// import { useEffect, useRef, useState } from "react";
// import lottie from "lottie-web";

// export default function LottieBackground() {
//     const containerRef = useRef(null);
//     const [animationPath, setAnimationPath] = useState("/images/tablet.json");
//     const animationRef = useRef(null);

//     const updateAnimationPath = () => {
//         if (typeof window !== "undefined") {
//             if (window.innerWidth >= 1200) {
//                 setAnimationPath("/images/backgrounds/background-x-desktop.json");
//             } else if (window.innerWidth >= 860) {
//                 setAnimationPath("/images/backgrounds/background-desktop.json");
//             } else {
//                 setAnimationPath("/images/backgrounds/background-tablet.json");
//             }
//         }
//     };

//     useEffect(() => {
//         updateAnimationPath();

//         animationRef.current = lottie.loadAnimation({
//             container: containerRef.current,
//             renderer: "canvas",
//             loop: true,
//             autoplay: true,
//             path: animationPath,
//             rendererSettings: {
//                 preserveAspectRatio: "none",
//             },
//         });

//         const handleResize = () => {
//             updateAnimationPath();
//         };

//         if (typeof window !== "undefined") {
//             window.addEventListener("resize", handleResize);
//         }

//         return () => {
//             if (typeof window !== "undefined") {
//                 window.removeEventListener("resize", handleResize);
//             }
//             if (animationRef.current) {
//                 animationRef.current.destroy();
//             }
//         };
//     }, [animationPath]);

//     return (
//         <div
//             ref={containerRef}
//             style={{
//                 position: "fixed",
//                 top: "0",
//                 left: "0",
//                 width: "100%",
//                 height: "100%",
//                 overflow: "hidden",
//                 zIndex: -1,
//             }}
//         />
//     );
// }
