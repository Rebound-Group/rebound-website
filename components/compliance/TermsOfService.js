import { render } from 'storyblok-rich-text-react-renderer';

const TermsOfService = ({ blok }) => {
    // console.log(blok)
  return (
    <div className="GoveranceTitle bg-white font-sans text-2xl px-12 my-4 mb-6" >
        {render(blok.PolicyContent)}
    </div>
  );
};

export default TermsOfService;