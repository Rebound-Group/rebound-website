import { render } from 'storyblok-rich-text-react-renderer';

const GovernanceOverview = ({ blok }) => {
  return (
    <div className="GoveranceOverview bg-white font-sans my-4 px-12 w-full md:w-3/4" >
        {render(blok.overview)}
    </div>
  );
};

export default GovernanceOverview;