import { render } from 'storyblok-rich-text-react-renderer';

const OurGoalThreeColumn = ({ blok }) => {
  return (
    <div className="py-8 px-12 m-4 flex flex-col" >
        <div className="py-8 px-12 my-8 mx-12 flex justify-center items-center w-full">{render(blok.title)}</div>
        <div className='flex w-full'>
        {blok.items.map((item, i) => (
            <div className="flex m-4 flex-1 rounded-2xl shadow-xl border border-slate-300" key={i}> 
                <div className=" p-4 rounded-2xl bg-black text-white flex justify-center items-center">{render(item.number)} </div>
                <div className="p-4">{render(item.text)} </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default OurGoalThreeColumn;