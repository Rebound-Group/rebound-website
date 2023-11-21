import { render } from "storyblok-rich-text-react-renderer";

const OurGoalThreeColumn = ({ blok }) => {
  return (
    <div
      className="three-column flex xs:p-4 md:px-8 md:py-[90px] flex-col bg-gray-extra-light"
      style={{ paddingBottom: "80px" }}
    >
      <div className="py-8 text-4xl font-bold flex justify-start items-center w-full">
        {render(blok.title)}
      </div>
      <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row">
        {blok.items.map((item, i) => (
          <div
            className="flex md:mr-4 mb-4 flex-1 rounded-2xl shadow-xl"
            key={i}
          >
            <div className="three-column-count p-4 rounded-2xl xs:text-5xl md:text-6xl font-bold bg-dark-green text-white flex xs:justify-center items-center shrink-0 xs:w-[100px] md:w-[130px]">
              {render(item.number)}{" "}
            </div>
            <div className="pr-4 pl-4 pt-2 pb-0 m-0 flex flex-col _justify-center items-center">
              {render(item.text)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGoalThreeColumn;
