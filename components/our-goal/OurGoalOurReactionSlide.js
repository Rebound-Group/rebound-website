import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurReactionSlide = ({ slide }) => {
  const borderColor = () => {
    if(slide.bottom_border_color === "melon") return "#E58A80"
    if(slide.bottom_border_color === "blue") return "#004AAD"
    if(slide.bottom_border_color === "green") return "#255F36"
    if(slide.bottom_border_color === "yellow") return "#FFDE59"
    return "#fff"
  }
  return (
    <div className="p-8 text-center mb-8 m-4 flex flex-col justify-between items-between border border-gray-light shadow-xl" style={{ height: "380px", borderBottom: `6px solid ${borderColor()}`}} >
        <div className="text-3xl text-center">{render(slide.title)}</div>
          <div className='text-xl'>{render(slide.text)}</div>
          <div className=''>{render(slide.year)}</div>
    </div>
  );
};

export default OurGoalOurReactionSlide;