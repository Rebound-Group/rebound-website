import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurReactionSlide = ({ slide }) => {
  return (
    <div className="p-8 text-center mb-8 m-4 flex flex-col justify-between items-between border border-gray-light shadow-xl" style={{ height: "380px"}} >
        <div className="text-3xl text-center">{render(slide.title)}</div>
          <div className='text-xl'>{render(slide.text)}</div>
          <div className=''>{render(slide.year)}</div>
    </div>
  );
};

export default OurGoalOurReactionSlide;