import { render } from 'storyblok-rich-text-react-renderer';
import HomeExpandableGridItem from './HomeExpandableGridItem';
const HomeExpandableGrid = ({ blok }) => {
  return (
    <div className="flex flex-col bg-gray-light">
        <div className="flex align-center text-2xl m-4">
            {render(blok.title)}
        </div>
        <div className="flex"> 
        {blok.home_expandable_grid_items.map((item, i) => (
            <HomeExpandableGridItem key={i} data={item} />
        ))}
        </div>
    </div>
  );
};

export default HomeExpandableGrid;