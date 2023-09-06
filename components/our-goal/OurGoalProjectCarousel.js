import { render } from 'storyblok-rich-text-react-renderer';
import OurGoalProjectCarouselSlide from './OurGoalProjectCarouselSlide';

const OurGoalProjectCarousel = ({ blok }) => {
  return (
    <div className="py-8 px-12 flex flex-col bg-gray-extra-light" >
        <div className="py-8 px-12 mt-8 mx-12 text-5xl font-bold flex justify-center items-center w-full">{render(blok.title)}</div>
        <div className="pb-8 px-12 mb-8 mx-12 text-xl font-bold text-center flex justify-center items-center">
            <div className="xs:w-full md:w-3/4">{render(blok.sub_text)}</div>
        </div>
        <div className='flex xs:flex-col md:flex-row justify-between gap-3'>
            {blok.slides.map((slide, i) => (
                <OurGoalProjectCarouselSlide slide={slide} key={i}/>
            ))}
        </div>
    </div>
  );
};

export default OurGoalProjectCarousel;