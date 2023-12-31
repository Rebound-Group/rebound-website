import { render } from "storyblok-rich-text-react-renderer";
import { colorMap } from "../../utils/utils";

const OurGoalOurReactionSlide = ({ slide }) => {
  const borderColor = () => {
    return colorMap[slide.bottom_border_color] || "#fff";
  };
  return (
    <div
      className="p-4 md:p-8 text-center mb-8 m-2 md:m-4 flex flex-col justify-between items-between border border-gray-light shadow-xl reaction-slide"
      style={{
        flex: "1",
        borderBottom: `6px solid ${borderColor()}`,
      }}
    >
      <div className="text-3xl text-center">{render(slide.title)}</div>
      <div className="text-xl absolute top-1/2 px-6 -mt-16 left-0 w-full full-p-width-inner">
        {render(slide.text)}
      </div>
      <div className="">{render(slide.year)}</div>
    </div>
  );
};

export default OurGoalOurReactionSlide;
