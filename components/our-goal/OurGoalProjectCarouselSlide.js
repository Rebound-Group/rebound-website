import { render } from "storyblok-rich-text-react-renderer";

const OurGoalProjectCarouselSlide = ({ slide }) => {
  return (
    <div
      className="p-4 py-8 md:p-8 shrink-0 flex-1 bg-white text-center md:min-h-[400px] flex flex-col justify-start items-center shadow-xl border border-slate-300"
      style={{
        boxShadow:
          "0px 45.8042px 62.46026px 0px rgba(49, 49, 49, 0.10), 0px 1.66561px 1.66561px 0px rgba(0, 0, 0, 0.54)",
      }}
    >
      <div className="mb-4">
        <img
          style={{ height: "80px", width: "80px" }}
          src={slide.icon.filename}
        />
      </div>
      <div className="mb-4 text-3xl font-bold">{render(slide.title)}</div>
      <div className="">{render(slide.text)}</div>
    </div>
  );
};

export default OurGoalProjectCarouselSlide;
