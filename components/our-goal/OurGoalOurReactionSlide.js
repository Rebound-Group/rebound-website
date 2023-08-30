import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurReactionSlide = ({ slide }) => {
  return (
    <div className="p-8 text-center mr-4 flex flex-col shadow-xl border border-slate-300 shrink-0" style={{ height: "400px", maxWidth: "380px"}} >
        <div>{render(slide.title)}</div>
          <div className=''>{render(slide.text)}</div>
          <div className=''>{render(slide.year)}</div>
    </div>
  );
};

export default OurGoalOurReactionSlide;