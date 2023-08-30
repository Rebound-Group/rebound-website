import { render } from 'storyblok-rich-text-react-renderer';
import OurGoalProjectCarouselSlide from './OurGoalOurReactionSlide';

const OurGoalProjectCarousel = ({ blok }) => {
  return (
    <div className="py-8 px-12 my-8 mx-12 flex flex-col" >
        <div className="py-8 px-12 my-8 mx-12 flex justify-center items-center w-full">{render(blok.title)}</div>
        <div className='flex overflow-hidden'>
        {blok.slides.map((slide, i) => (
            <OurGoalProjectCarouselSlide slide={slide} key={i}/>
        ))}
        </div>
    </div>
  );
};

export default OurGoalProjectCarousel;