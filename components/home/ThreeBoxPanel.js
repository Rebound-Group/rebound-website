import { render } from "storyblok-rich-text-react-renderer";

const ThreeBoxPanel = ({ blok }) => {
  return (
    <section>
      <div
        className="flex justify-center items-start text-center pt-4"
        style={{
          minHeight: "282px",
          backgroundImage: `url(${blok.Background.filename})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col">
          <div className="xs:pl-2 lg:pl-8text-4xl mt-4 mb-8">
            {render(blok.Title)}
          </div>
          <div className="flex justify-center items-center text-center">
            <div className="p-6 mx-4 bg-three-box-panel flex flex-col">
              <div className="lg:mb-0 text-grey font-bold text-3xl mb-4">
                {render(blok.BoxTitle1)}
                <span className="text-melon">.</span>
              </div>
              <div className="lg:mb-0 text-md">{render(blok.BoxCaption1)}</div>
            </div>
            <div className="p-6 mx-4 bg-three-box-panel flex flex-col">
              <div className="lg:mb-0 text-grey font-bold text-3xl mb-4">
                {render(blok.BoxTitle2)}
                <span className="text-melon">.</span>
              </div>
              <div className="lg:mb-0 text-md">{render(blok.BoxCaption2)}</div>
            </div>
            <div className="p-6 mx-4 bg-three-box-panel flex flex-col">
              <div className="lg:mb-0 text-grey font-bold text-3xl mb-4">
                {render(blok.BoxTitle3)}
                <span className="text-melon">.</span>
              </div>
              <div className="lg:mb-0 text-md">{render(blok.BoxCaption3)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeBoxPanel;
