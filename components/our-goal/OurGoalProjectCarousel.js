import { render } from 'storyblok-rich-text-react-renderer';
import OurGoalProjectCarouselSlide from './OurGoalProjectCarouselSlide';
import { Icon } from '@iconify/react';

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
        <div className="mt-6 p-4 lg:p-8 text-xl font-bold text-center flex justify-center items-center">
            <button className="p-4 bg-blue text-white xs:w-full md:max-w-[600px] shadow-xl flex items-center justify-center "><span className="flex-1">Support the project<span className="text-melon">.</span></span><Icon className="text-melon right" icon="octicon:chevron-right-12" /></button>
        </div>
    </div>
  );
};

export default OurGoalProjectCarousel;