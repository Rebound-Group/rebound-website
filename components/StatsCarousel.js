import { render } from 'storyblok-rich-text-react-renderer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StatsCarousel = ({ blok }) => {
    // const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const { width } = useWindowSize();
    // const isMobile = width <= 450;

    // const { 
    //     carouselFragment, 
    //     slideToPrevItem, 
    //     slideToNextItem 
    //   } = useSpringCarousel({
  
    //     items: blok.stats_list.map((item) => ({
    //       id: item.id,
    //       withLoop: true,
    //       renderItem: (
    //         <div className="wrapper">
    //             <div className="flex text-2xl font-bold text-white p-8 mb-4 justify-center items-center w-full border border-white rounded-xl">
    //                     "{render(item.content)}"
    //             </div>
    //             <p className="flex text-white justify-center items-center w-full ">
    //                 - {item.author}
    //             </p>
    //         </div>
    //       ),
    //     })),
    //   });

  return (
    <div className="StatsCarousel flex justify-center items-center bg-black font-sans p-12 " style={{backgroundImage: `url(${blok.background_image.filename})`}}>
        {/* <button onClick={slideToPrevItem}>
            <img src="/arrow_left.svg" />
        </button> */}
        <div className="overflow-hidden flex">
        <Carousel showThumbs={false}>
        {blok.stats_list.map(slide => (
          <div className="wrapper">
          <div className="flex text-2xl font-bold text-white p-8 mb-4 justify-center items-center w-full border border-white rounded-xl">
                  "{render(slide.content)}"
          </div>
          <p className="flex text-white justify-center items-center w-full ">
              - {slide.author}
          </p>
      </div>
        ))}
      </Carousel>
        </div>
        {/* <button onClick={slideToNextItem}>
        <img src="/arrow_right.svg" />
        </button> */}
    </div>
  );
};

export default StatsCarousel;