import { render } from 'storyblok-rich-text-react-renderer';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Expandable = ({ data }) => {

    const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="my-6 p-8 shadow-lg shadow-gray-950 rounded flex flex-col hover:cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="text-2xl text-black font-bold mb-4">{data.heading}</h3>
        {isExpanded && (
            render(data.content)
        )}
        <div className="flex justify-between">
            <p className="text-melon font-semibold uppercase text-sm">{isExpanded ? 'Read Less' : 'Read More'}</p>
            <Icon icon={isExpanded ? "dashicons:arrow-up-alt2" : "dashicons:arrow-down-alt2"} />
        </div>
    </div>
  );
};

export default Expandable;