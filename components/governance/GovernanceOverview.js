import { render } from 'storyblok-rich-text-react-renderer';

const GovernanceOverview = ({ blok }) => {
  return (
    <div className="GoveranceOverview bg-white font-sans lg:my-4 xs:p-4 lg:px-12 w-full md:w-3/4" >
        {render(blok.overview)}
    </div>
  );
};

export default GovernanceOverview;