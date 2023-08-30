import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurImageLeftSection = ({ blok }) => {
  return (
    <div className="p-4 flex" >
        <div className="left-col">
        <img src={blok.image.filename} />

        </div>
        <div className="right-col">
        <div className="">{render(blok.main_text)}</div>
        <div className="">{render(blok.sub_text)}</div>
        {/* <a className="">{render(blok.sub_text)}</div> */}
        </div>
    </div>
  );
};

export default OurGoalOurImageLeftSection;