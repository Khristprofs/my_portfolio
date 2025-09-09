import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Show if scrolled past 50% of page
      if (scrollTop > (docHeight - winHeight) / 2) {
        setIsVisible(true);
      }

      // Hide if at the top
      if (scrollTop <= 0) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      title="Scroll to top"
      className="fixed bottom-5 right-6 z-50 p-3 rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-900 shadow-lg hover:bg-gray-900 transition-all duration-300"
    >
      <FiArrowUp className="text-xl" />
    </button>
  ) : null;
};

export default ScrollToTop;