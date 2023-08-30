import { render } from 'storyblok-rich-text-react-renderer';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const HomeExpandableGridItem = ({ data }) => {
    console.log(data)
    const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="flex-1 h-fit m-6 p-4 shadow-lg shadow-gray-950 rounded flex flex-col justify-between min-h-[435px]" style={{ borderTopRightRadius: '3.75rem'}}> 
        <div className="flex flex-col">
        <div className="" style={{backgroundImage: `url(${data.image.filename})`, height: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h3 className="text-2xl text-black font-bold mb-2">{data.number}</h3>
        </div>
        <div>{render(data.title)}</div>
        <div>{render(data.overview_text)}</div>
        {isExpanded && (
            render(data.content)
        )}
        </div>
        <div className="flex justify-between" onClick={() => setIsExpanded(!isExpanded)}>
            <p className="m-0 text-melon font-semibold uppercase text-sm">{isExpanded ? 'Read Less' : 'Read More'}</p>
            <Icon icon={isExpanded ? "dashicons:arrow-up-alt2" : "dashicons:arrow-down-alt2"} className="border rounded-full border-melon text-melon" />
        </div>
    </div>
  );
};

export default HomeExpandableGridItem;