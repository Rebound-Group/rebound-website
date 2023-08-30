import { render } from 'storyblok-rich-text-react-renderer';
import OurGoalOurReactionSlide from './OurGoalOurReactionSlide';
import { Carousel } from '@trendyol-js/react-carousel';

const OurGoalOurReaction = ({ blok }) => {
    // const { 
    //     carouselFragment, 
    //     slideToPrevItem, 
    //     slideToNextItem 
    //   } = useSpringCarousel({
  
    //     items: blok.slides.map((slide, i) => ({
    //       id: slide.id,
    //       slideAmount: 380,
    //       freeScroll: true,
    //       renderItem: (
    //             <OurGoalOurReactionSlide slide={slide} key={i}/>
    //       ),
    //     })),
    //   });

    const leftArrow = () => {
        return (
            <button >
            <img src="/arrow_left.svg" />
        </button>
        )
    }
    const rightArrow = () => {
        return (
            <button >
            <img src="/arrow_right.svg" />
        </button>
        )
    }
      
  return (
    <div className="py-8 px-12 my-8 mx-12 flex flex-col" >
        <div className="py-8 px-12 my-8 mx-12 flex justify-center items-center w-full">{render(blok.title)}</div>
        <Carousel show={3.5} slide={2} transition={0.5} leftArrow={leftArrow()} rightArrow={rightArrow()}> 
        {blok.slides.map((slide, i) => (
            <OurGoalOurReactionSlide slide={slide} key={i}/>
        ))}
        </Carousel>
        {/* <button onClick={slideToPrevItem}>
            <img src="/arrow_left.svg" />
        </button>
        <button onClick={slideToNextItem}>
        <img src="/arrow_right.svg" />
        </button> */}
    </div>
  );
};

export default OurGoalOurReaction;