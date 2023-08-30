import { Icon } from '@iconify/react';

const GovernanceList = ({ blok }) => {
  return (
    <div className="GoveranceList bg-white font-sans p-12 pt-4 w-3/4" >
        {blok.governance_link_item.map((item, i) => (
                <a className="my-6 p-4 shadow-lg shadow-gray-950 rounded flex flex-col" key={i} href={item?.link.filename}>
                    <h3 className="text-2xl text-black font-bold mb-2">{item.title}</h3>
                    <div className="flex justify-between">
                    <p className="text-melon font-semibold uppercase text-sm">{item.link_text}</p>
                    <Icon icon="dashicons:arrow-right-alt2" />
                    </div>
                </a>
            ))}
    </div>
  );
};

export default GovernanceList;