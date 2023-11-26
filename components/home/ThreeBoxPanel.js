import { render } from "storyblok-rich-text-react-renderer";

const ThreeBoxPanel = ({ blok }) => {
  return (
    <section>
      <div
        className="flex justify-center items-start text-center pt-4"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${blok.Background.filename})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="flex flex-col mx-6"
          style={{ maxWidth: "1024px", margin: "0 auto" }}
        >
          <div className="text-4xl my-8">{render(blok.Title)}</div>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="col-span-1 py-6 px-12 bg-three-box-panel flex flex-col">
              <div className=" text-grey font-bold text-4xl my-6">
                {render(blok.BoxTitle1)}
                <span className="text-melon">.</span>
              </div>
              <div className="text-md text-black font-bold">
                {render(blok.BoxCaption1)}
              </div>
            </div>
            <div className="col-span-1 py-6 px-12 bg-three-box-panel flex flex-col">
              <div className="text-grey font-bold text-4xl my-6">
                {render(blok.BoxTitle2)}
                <span className="text-melon">.</span>
              </div>
              <div className="text-md text-black font-bold">
                {render(blok.BoxCaption2)}
              </div>
            </div>
            <div className="col-span-1 py-6 px-8 bg-three-box-panel flex flex-col">
              <div className="text-grey font-bold text-4xl my-6">
                {render(blok.BoxTitle3)}
                <span className="text-melon">.</span>
              </div>
              <div className="text-md text-black font-bold">
                {render(blok.BoxCaption3)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeBoxPanel;
