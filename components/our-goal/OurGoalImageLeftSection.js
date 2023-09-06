import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurImageLeftSection = ({ blok }) => {
  return (
    <div className="p-8 flex" >
        <div className="xs:hidden md:block left-col shrink-0">
            <img src={blok.image.filename} />
        </div>
        <div className="right-col p-8 xl:w-[75%]">
        <div className="text-3xl">{render(blok.main_text)}</div>
        <div className=" text-xl">{render(blok.sub_text)}</div>
        {/* <a className="">{render(blok.sub_text)}</div> */}
        </div>
    </div>
  );
};

export default OurGoalOurImageLeftSection;