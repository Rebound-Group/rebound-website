import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalOurImageLeftSection = ({ blok }) => {
    console.log(blok)
  return (
    <div className="xs:p-4 md:p-8 flex" >
        <div className="xs:hidden md:block left-col shrink-0">
            <img src={blok.image.filename} />
        </div>
        <div className="right-col md:p-8 xl:w-[75%]">
        <div className="text-3xl">{render(blok.main_text)}</div>
        <div className=" text-xl">{render(blok.sub_text)}</div>
        <div className="flex flex-col justify-end items-end mt-12 pt-12" style={{ borderTop: "1px solid black"}}>
            <div className="text-2xl">{render(blok.cta_text)}</div>
            <a className="text-2xl ml-4 mt-4" href={blok.cta_link.url}><img style={{height: "50px", width: "50px"}} src="/arrow_right.svg" /></a>
        </div>
        {/* <a className="">{render(blok.sub_text)}</div> */}
        </div>
    </div>
  );
};

export default OurGoalOurImageLeftSection;