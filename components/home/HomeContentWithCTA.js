import { render } from "storyblok-rich-text-react-renderer";
import { colorMap } from "../../utils/utils.js";
const HomeContentWithCTA = ({ blok }) => {
  const backgroundColor = (color) => {
    return colorMap[color] || "none";
  };

  return (
    <section
      className="p-6 md:p-12 flex flex-col text-center"
      style={{ borderTop: `0 solid rgb(250, 250, 250)` }}
    >
      <div className="flex flex-col">
        <div className="text-3xl mb-4">{render(blok.title)}</div>
        <div className="mb-8" style={{ margin: "0 auto", maxWidth: "1024px" }}>
          {render(blok.content)}
        </div>
        <div className="mb-8 flex xs:flex-col md:flex-row justify-center items-center">
          {blok.ctas.map((item, i) => (
            <a
              className="w-full md:w-auto rounded-full py-4 px-4 md:px-8 m-4 text-white"
              key={i}
              href={item.url.url}
              style={{ background: backgroundColor(item.color) }}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContentWithCTA;
