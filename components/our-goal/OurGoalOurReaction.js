import { render } from 'storyblok-rich-text-react-renderer';
import OurGoalOurReactionSlide from './OurGoalOurReactionSlide';
import useWindowSize from "../../hooks/useWindowSize";

import { useSpringCarousel } from 'react-spring-carousel'

const OurGoalOurReaction = ({ blok }) => {

    const windowSize = useWindowSize();

    const itemsToShow = () => {
        if(windowSize.width < (380*1.9)) return 1
        else if (windowSize.width < (380*2.9)) return 2
        else return 3
    }

    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem 
      } = useSpringCarousel({
        itemsPerSlide: itemsToShow(),
        items: blok.slides.map((slide, i) => ({
          id: i.id,
          renderItem: (
            <OurGoalOurReactionSlide slide={slide} key={i}/>
          ),
        })),
      });

    const leftArrow = () => {
        return (
            <button className="relative top-[100%] h-[40px] w-[40px] sm:left-[30vw] md:left-[42vw]" >
            <img src="/arrow_left.svg" />
        </button>
        )
    }
    const rightArrow = () => {
        return (
            <button className="relative top-[100%] h-[40px] w-[40px] sm:right-[30vw] md:right-[42vw]" >
            <img src="/arrow_right.svg" />
        </button>
        )
    }
      
  return (
    <div className="px-8 flex flex-col bg-gray-extra-light md:px-8 md:py-[90px]">
        <div className="my-8 text-5xl font-bold flex justify-center items-center w-full">{render(blok.title)}</div>
        <div style={{overflow: 'hidden'}}>
        {carouselFragment}
        </div>
        <div className="flex justify-center items-center">
        <button className="w-[40px] mr-4" onClick={slideToPrevItem}><img src="/arrow_left.svg" /></button>
        <button className="w-[40px]" onClick={slideToNextItem}><img src="/arrow_right.svg" /></button>
        </div>
    </div>
  );
};

export default OurGoalOurReaction;