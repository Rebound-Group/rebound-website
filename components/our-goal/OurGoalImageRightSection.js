import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurImageRightSection = ({ blok }) => {
    return (
        <div className="flex xs:flex-col md:flex-row bg-gray-light" >
            <div className="left-col p-8">
                <div className="align-center text-4xl mb-6 mt-12 font-serif xl:w-[75%]">{render(blok.main_text)}</div>
                <div className="text-2xl xl:w-[75%]">{render(blok.sub_text)}</div>
                {/* <a className="">{render(blok.sub_text)}</div> */}
            </div>
            <div className="right-col shrink-0">
                <img className="" src={blok.image.filename} />
            </div>
        </div>
      );
};

export default OurGoalOurImageRightSection;