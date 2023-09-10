import { render } from 'storyblok-rich-text-react-renderer';
import OurGoalProjectCarouselSlide from './OurGoalProjectCarouselSlide';

const OurGoalProjectCarousel = ({ blok }) => {
  return (
    <div className="xs:p-4 lg:py-8 lg:px-12 flex flex-col bg-gray-extra-light" >
        <div className="p-4 lg:p-8 text-5xl font-bold flex justify-center items-center w-full">{render(blok.title)}</div>
        <div className="p-4 lg:p-8 text-xl font-bold text-center flex justify-center items-center">
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