import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurImageRightSection = ({ blok }) => {
    return (
        <div className="p-4 flex" >
            <div className="left-col">
            <div className="">{render(blok.main_text)}</div>
            <div className="">{render(blok.sub_text)}</div>
            {/* <a className="">{render(blok.sub_text)}</div> */}
            </div>
            <div className="right-col">
                <img src={blok.image.filename} />
            </div>
        </div>
      );
};

export default OurGoalOurImageRightSection;