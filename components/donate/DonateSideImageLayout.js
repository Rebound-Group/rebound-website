import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const DonateSideImageLayout = ({ blok }) => {
  // console.log(blok)
  return (
    <div className="flex mt-12">
      <img className="xs:hidden md:block" src={blok.side_image.filename}/>
      <div className="flex flex-col p-4 md:mt-24 xs:w-full md:max-w-[60%]">
        <section className="p-8">{render(blok.title)}</section>
        <section className="p-8 pt-0">{render(blok.content)}</section>
        <section className="p-8 text-center">{render(blok.account_details)}</section>
      </div>
    </div>
  );
};

export default DonateSideImageLayout;
