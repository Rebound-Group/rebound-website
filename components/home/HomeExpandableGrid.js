import { render } from 'storyblok-rich-text-react-renderer';
import HomeExpandableGridItem from './HomeExpandableGridItem';
const HomeExpandableGrid = ({ blok }) => {
  return (
    <div className="xs:px-8 xs:py-12 md:py-[60px] flex flex-col bg-gray-light">
        <div className="flex align-center text-6xl mb-8">
            {render(blok.title)}
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> 
        {blok.home_expandable_grid_items.map((item, i) => (
            <HomeExpandableGridItem key={i} data={item} />
        ))}
        </div>
    </div>
  );
};

export default HomeExpandableGrid;