import { render } from 'storyblok-rich-text-react-renderer';

const HomeImageGrid = ({ blok }) => {
  return (
    <section className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {blok.image_grid_items.map((item, i) => (
                <div key={i} className="flex-1 m-0 flex flex-col justify-end" style={{backgroundImage: `url(${item.image.filename})`, height: '330px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <p className="text-white font-serif md:text-4xl xl:text-6xl p-4">{item.text}</p>
                </div>
            ))}
    </section>
  );
};

export default HomeImageGrid;