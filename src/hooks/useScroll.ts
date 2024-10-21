import { useEffect, useState } from "react";

const useScroll = (threshold = 300) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        // Check the scroll position
        if (window.scrollY > threshold) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false); // Optionally reset on scroll back up
        }
      };

      handleScroll();

      // Add the scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [threshold]);

  return hasScrolled;
};

export default useScroll;
