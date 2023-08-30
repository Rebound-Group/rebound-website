import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalProjectCarouselSlide = ({ slide }) => {
  console.log(slide)
  return (
    <div className="p-8 text-center mr-4 flex flex-col shadow-xl border border-slate-300 shrink-0" width={"380px"} style={{ height: "400px", minWidth: "380px"}} >
        <div><img src={slide.icon.filename} /></div>
        <div>{render(slide.title)}</div>
        <div className=''>{render(slide.text)}</div>
    </div>
  );
};

export default OurGoalProjectCarouselSlide;