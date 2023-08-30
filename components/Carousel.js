import React from "react";
import useCarousel from "../hooks/useCarousel";
import useWindowSize from "../hooks/useWindowSize";

const Carousel = ({
  children,
  transitionTime = 500,
  controls = true,
  showPerSlide = 3
}) => {
  const length = children.length;
  const n = Math.floor(length / showPerSlide);
  const range = [...Array(n).keys()];

  const { activeIndex, prev, next, style, jumpTo } = useCarousel(
    length,
    transitionTime
  );

  useWindowSize();

//   console.log(range);

  const leftControlClass = `control left ${
    activeIndex === 0 ? "inactive" : ""
  }`;

  const rightControlClass = `control right ${
    activeIndex >= n - 1 ? "inactive" : ""
  }`;

  return (
    <div className="carousel-wrapper">
      <div onClick={prev} className={leftControlClass} />
      <div className="carousel-window">
        <div style={style} className="carousel-viewport">
          {children.map(child => (
            <div className="slide">{child} </div>
          ))}
        </div>
      </div>

      <div onClick={next} className={rightControlClass} />
      {controls && (
        <ol className="carousel-controls">
          {range.map(i => (
            <li
              onClick={() => jumpTo(i)}
              className={`carousel-control ${activeIndex === i && "active"}`}
            />
          ))}
        </ol>
      )}
    </div>
  );
};

export default Carousel;
