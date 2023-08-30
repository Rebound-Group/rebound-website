import { render } from 'storyblok-rich-text-react-renderer';

const GovernanceTitle = ({ blok }) => {
  return (
    <div className="GoveranceTitle bg-white font-sans text-2xl px-12 mt-6 mb-4 mb-6 max-w-3/4 " >
        {render(blok.title)}
    </div>
  );
};

export default GovernanceTitle;