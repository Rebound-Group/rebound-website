import { render } from 'storyblok-rich-text-react-renderer';

const HomeContentWithCTA = ({ blok }) => {
  return (
    <section className=" p-12 flex flex-col text-center">
        <div className='flex flex-col'>
            <div className='text-3xl mb-4'>
                {render(blok.title)}
            </div>
            <div className='mb-8'>
                {render(blok.content)}
            </div>
            <div className='mb-8'>
                {blok.ctas.map((item, i) => (
                    <a className='rounded-full bg-black py-4 px-8 m-4 text-white' key={i} href={item.url}>{item.text}</a>
                ))}
            </div>
        </div>
    </section>
  );
};

export default HomeContentWithCTA;