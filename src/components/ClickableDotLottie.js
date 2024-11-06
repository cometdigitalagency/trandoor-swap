"use client";
import { useCallback, useEffect, useRef, useState } from 'react';

const ClickableDotLottie = ({ lottieFilePath, speed, style, responsiveSizes = { xsmall: {}, small: {}, medium: {}, large: {}, extraLarge: {} } }) => {
  const playerRef = useRef(null);
  const [styleState, setStyleState] = useState({});

  // Memoize getResponsiveStyle to avoid unnecessary rerenders
  const getResponsiveStyle = useCallback(() => {
    let newStyle = {};
    if (window.innerWidth >= 1600) {
      newStyle = responsiveSizes.extraLarge;
    }else if (window.innerWidth >= 1200) {
      newStyle = responsiveSizes.large;
    } else if (window.innerWidth >= 860) {
      newStyle = responsiveSizes.medium;
    }else if (window.innerWidth >= 560) {
      newStyle = responsiveSizes.small;
    } else {
      newStyle = responsiveSizes.xsmall;
    }
    // Only update state if it actually changes
    if (JSON.stringify(newStyle) !== JSON.stringify(styleState)) {
      setStyleState(newStyle);
    }
  }, [responsiveSizes, styleState]); // Add styleState as a dependency to avoid infinite loop

  useEffect(() => {
    import('@dotlottie/player-component');
    getResponsiveStyle(); // Initial style setting
  }, [getResponsiveStyle]); // Dependency array with getResponsiveStyle

  useEffect(() => {
    window.addEventListener("resize", getResponsiveStyle);
    return () => {
      window.removeEventListener("resize", getResponsiveStyle);
    };
  }, [getResponsiveStyle]);

  const handleClick = () => {
    if (playerRef.current) {
      // Restart the animation from the beginning on each click
      playerRef.current.stop();
      playerRef.current.setSpeed(speed);
      playerRef.current.play();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{ ...style, ...styleState }}
    >
      <dotlottie-player
        ref={playerRef}
        src={lottieFilePath}
        autoplay={false}
        loop={false}
      ></dotlottie-player>
    </div>
  );
};

export default ClickableDotLottie;