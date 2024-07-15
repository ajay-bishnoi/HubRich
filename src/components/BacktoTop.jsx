import React, { useEffect, useState } from "react";
import { UpArrow } from "../assets/Icon";

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed z-30 bottom-5 right-3 sm:right-5"
      >
        <button className="rounded-full hover:shadow-custom2 group z-50 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-gradient-to-custom flex flex-col items-center justify-center duration-300 shadow-custom3 overflow-hidden">
          <UpArrow />
          <UpArrow />
        </button>
      </div>
    )
  );
};

export default BacktoTop;
