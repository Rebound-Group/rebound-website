import { render } from 'storyblok-rich-text-react-renderer';

const BecomeARebounder = ({ blok }) => {
  return (
    <div className="py-8 px-12 my-8 mx-12 flex flex-col bg-black rounded-2xl text-white " >
        {render(blok.title)}
        <div className='flex items-top'>
          <div className='max-w-3/4'>{render(blok.text)}</div>
          <a className="bg-melon text-white text-size py-4 px-8 mx-8 rounded-full" href={blok.cta_link.url}>{blok.cta_text}</a>
        </div>
    </div>
  );
};

export default BecomeARebounder;