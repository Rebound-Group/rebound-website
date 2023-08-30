import { render } from 'storyblok-rich-text-react-renderer';

const OurPartners = ({ blok }) => {
  return (
    <div className="OurPartners bg-black font-sans p-12 " >
        <div className="flex justify-center items-center w-full text-50px color-white font-bold">
            {render(blok.title)}
        </div>
        <div className="flex justify-between items-baseline">
            {blok.images && blok.images.map((image) => (
                <img src={image.filename} key={image.id} className="h-fit w-fit" />
            ))}
        </div>
    </div>
  );
};

export default OurPartners;