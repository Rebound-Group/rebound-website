import { render } from 'storyblok-rich-text-react-renderer';

const BecomeARebounder = ({ blok }) => {
  return (
    <div className="p-4 md:p-8 bg-gray-extra-light" >
      <div className="wrapper my-8 py-8 px-8 md:px-12 bg-black flex flex-col bg-dark-green rounded-2xl text-white">
        <div className="mb-4" style={{ fontSize: "55px"}}>{render(blok.title)}</div>
        <div className='flex xs:flex-col md:flex-row md:justify-between items-start md:items-basline'>
          <div className='mb-4 xs:w-full md:max-w-[60%]'>{render(blok.text)}</div>
          <a className="bg-melon right text-white text-size max-w-content py-4 px-8 md:ml-8 rounded-full" href={blok.cta_link.url}>{render(blok.cta_text)}</a>
        </div>
        </div>
    </div>
  );
};

export default BecomeARebounder;