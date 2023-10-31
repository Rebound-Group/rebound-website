import { render } from "storyblok-rich-text-react-renderer";
import Expandable from "../Expandable";

const HomeTwoColumn = ({ blok }) => {
  return (
    <section className="lg:p-8 flex">
      {/* {render(blok._editable)} */}
      <div
        className="xs:hidden lg:block md:w-[75%] max-w-[400px] lg:w-[100%] flex-1"
        style={{
          backgroundImage: `url(${blok.image.filename})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          minHeight: "680px",
        }}
      ></div>
      <div className="flex-1 flex flex-col xs:px-4 xs:py-4 lg:py-8">
        <div className="xs:pl-2 lg:pl-8 font-serif text-4xl mb-4">
          {render(blok.title)}
        </div>
        <div className="xs:pl-2 lg:pl-8 lg:mb-0 text-xl">
          {render(blok.text)}
        </div>
        <div style={{ transition: "all 1s ease" }}>
          {blok.expandable.map((item, i) => (
            <Expandable data={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTwoColumn;
