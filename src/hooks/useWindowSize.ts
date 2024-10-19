import { useEffect, useState } from "react";

const useWindowSize = () => {
  // State to hold the window size
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Handler to update the state with new window size
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to update window size on resize
    window.addEventListener("resize", handleResize);

    // Cleanup: remove the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect only runs once

  return windowSize; // Return the current window size
};

export default useWindowSize;
