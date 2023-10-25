import { render } from "storyblok-rich-text-react-renderer";

const HomeImageGrid = ({ blok }) => {
  return (
    <section className="grid shadow-lg shadow-gray-950 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {blok.image_grid_items.map((item, i) => (
        <div
          key={i}
          className="flex-1 m-0 flex flex-col justify-end shadow-lg shadow-gray-950"
          style={{
            backgroundImage: `url(${item.image.filename})`,
            height: "400px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="text-white font-serif xs:text-[3.5rem] sm:text-6xl md:text-6xl lg:text-4xl xl:text-6xl p-4">
            {render(item.text)}
          </p>
        </div>
      ))}
    </section>
  );
};

export default HomeImageGrid;
