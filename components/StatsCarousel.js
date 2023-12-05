import { render } from "storyblok-rich-text-react-renderer";
import styles from "./StatsCarousel.module.css";

import { useSpringCarousel } from "react-spring-carousel";

const StatsCarousel = ({ blok }) => {
  const Slide = ({ slide }) => {
    return (
      <div className="wrapper mx-4 md:mx-12 w-full flex flex-col justify-center items-center">
        <div
          className="flex text-2xl font-bold text-white p-4 md:p-9 mb-6 justify-center items-center grow-1 w-full border border-white rounded-xl"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1024px",
          }}
        >
          &ldquo;{render(slide.content)}&rdquo;
        </div>
        <p className="flex text-white justify-center items-center w-full mb-0">
          - {slide.author}
        </p>
      </div>
    );
  };
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: blok.stats_list.map((slide) => ({
        id: slide.id,
        renderItem: <Slide slide={slide} />,
      })),
    });

  const leftArrow = () => {
    return (
      <button>
        <img src="/arrow_left.svg" />
      </button>
    );
  };
  const rightArrow = () => {
    return (
      <button>
        <img src="/arrow_right.svg" />
      </button>
    );
  };
  const itemsToShow = () => {
    if (windowSize.width < 380 * 1.9) return 1;
    else if (windowSize.width < 380 * 2.9) return 2;
    else return 3;
  };

  return (
    <div
      className={styles.StatsCarousel}
      style={{
        backgroundImage: `url(${blok.background_image.filename})`,
        minHeight: "560px",
      }}
    >
      <div className="xs:py-8 xs:px-4 md:px-8 md:py-[110px] max-w-[100%] flex justify-center items-center">
        {blok.stats_list.length > 1 && (
          <button
            className="text-2xl xs:hidden md:block w-[100px]"
            onClick={slideToPrevItem}
          >
            <img src="/arrow_left.svg" />
          </button>
        )}
        <div style={{ overflow: "hidden" }}>{carouselFragment}</div>
        {blok.stats_list.length > 1 && (
          <button
            className="text-2xl xs:hidden md:block w-[100px]"
            onClick={slideToNextItem}
          >
            <img src="/arrow_right.svg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default StatsCarousel;
