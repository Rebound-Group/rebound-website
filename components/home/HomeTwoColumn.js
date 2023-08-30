import { render } from 'storyblok-rich-text-react-renderer';
import Expandable from '../Expandable'

const HomeTwoColumn = ({ blok }) => {
    console.log(blok.expandable)
  return (
    <section className="flex">
        <img src={blok.image.filename} />
      <div className='flex flex-col'>
        <div>
            {render(blok.title)}
        </div>
        <div>
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