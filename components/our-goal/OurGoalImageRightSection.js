import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurImageRightSection = ({ blok }) => {
    return (
        <div className="flex xs:flex-col md:flex-row bg-dark-green" >
            <div className="left-col xs:p-4 lg:p-8">
                <div className="align-center text-white text-4xl mb-6 mt-12 font-serif xl:w-[75%]">{render(blok.main_text)}</div>
                <div className="text-2xl text-white xl:w-[75%]">{render(blok.sub_text)}</div>
                {/* <a className="">{render(blok.sub_text)}</div> */}
            </div>
            <div className="right-col shrink-0 xs:hidden md:block md:max-w-[50%]">
                <img className="" src={blok.image.filename} />
            </div>
        </div>
      );
};

export default OurGoalOurImageRightSection;