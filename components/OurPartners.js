import { render } from 'storyblok-rich-text-react-renderer';

const OurPartners = ({ blok }) => {
  return (
    <div className="OurPartners bg-dark-green font-sans p-12 " >
        <div className="flex justify-center items-center w-full text-50px color-white font-bold mb-6">
            {render(blok.title)}
        </div>
        <div className="flex xs:flex-col md:flex-row justify-evenly md:items-baseline xs:items-center ">
            {blok.images && blok.images.map((image) => (
                <img src={image?.filename} key={image?.id} className="h-fit w-fit mb-6" />
            ))}
        </div>
    </div>
  );
};

export default OurPartners;