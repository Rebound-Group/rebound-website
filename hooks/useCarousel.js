import React, { useState } from "react";

const useCarousel = (length, transitionTime) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((activeIndex + 1) % length);
  };

  const prev = () => {
    setActiveIndex((activeIndex - 1 + length) % length);
  };

  const jumpTo = (i) => {
    setActiveIndex(i);
  }

  const style = {
    transform: `translateX(-${100 * activeIndex}%)`,
    transition: `transform ${transitionTime}ms ease`
  };
  return {
    activeIndex,
    prev,
    next,
    style,
    jumpTo
  };
};

export default useCarousel;
