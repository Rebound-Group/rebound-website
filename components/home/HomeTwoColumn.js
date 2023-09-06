import { render } from 'storyblok-rich-text-react-renderer';
import Expandable from '../Expandable'

const HomeTwoColumn = ({ blok }) => {
    // console.log(blok.expandable)
  return (
    <section className="flex ">
      <img className='xs:hidden lg:block md:w-[75%] md:max-w-[75%] lg:w-[100%] flex-1' src={blok.image.filename} />
      <div className='flex-1 flex flex-col xs:px-8 xs:py-12 lg:py-8'>
        <div className='font-serif text-4xl mb-4'>
            {render(blok.title)}
        </div>
        <div className='mb-4 text-xl'>
            {render(blok.text)}
        </div>
        <div>
            {blok.expandable.map((item, i) => (
                <Expandable data={item} key={i} />
            ))}
        </div>
        </div>
    </section>
  );
};

export default HomeTwoColumn;