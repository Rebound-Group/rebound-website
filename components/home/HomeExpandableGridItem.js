import { render } from 'storyblok-rich-text-react-renderer';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const HomeExpandableGridItem = ({ data }) => {
    // console.log(data)
    const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="flex-1 bg-white h-fit p-4 shadow-lg shadow-gray-950 rounded flex flex-col justify-between min-h-[435px]" style={{ borderTopRightRadius: '3.75rem', borderBottomLeftRadius: '3.75rem'}}> 
        <div className="flex flex-col">
        <div className="" style={{backgroundImage: `url(${data.image.filename})`, height: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h3 className="font-bold p-2 mb-2" style={{ fontSize:"55px" ,color: "#fff", textShadow:" 0px 3.3821539878845215px 3.3821539878845215px rgba(0, 0, 0, 0.50)"}}>{data.number}</h3>
        </div>
        <div className="font-serif font-bold text-4xl py-4">{render(data.title)}</div>
        <div className="font-bold min-h-[65px]">{render(data.overview_text)}</div>
        {isExpanded && (
            render(data.content)
        )}
        </div>
        <div className="hover: cursor-pointer flex justify-end m-2 p-2 mb-0 pb-0"style={{borderTop: "1px solid #939393"}} onClick={() => setIsExpanded(!isExpanded)}>
            <p className="mr-4 mb-0 font-semibold uppercase text-sm" style={{color: "#939393"}}>{isExpanded ? 'Read Less' : 'Read More'}</p>
            <Icon icon={isExpanded ? "dashicons:arrow-up-alt2" : "dashicons:arrow-down-alt2"} className="border rounded-full border-melon text-melon" />
        </div>
    </div>
  );
};

export default HomeExpandableGridItem;