// import { useEffect, useState } from 'react';
import { render } from 'storyblok-rich-text-react-renderer';
import styles from "./HomeHero.module.css";

const HomeHero = ({ blok }) => {
  // console.log(blok)
  // const [showWelcome, setShowWelcome] = useState(true)
  // useEffect(() => {
  //   if (!sessionStorage.getItem("hasSeenWelcome")) {
  //     setShowWelcome(true)
  //     sessionStorage.setItem("hasSeenWelcome", true);
  //   } else {
  //     setShowWelcome(false)
  //   }
  // },[])

  return (
    // <>
    // {showWelcome && (
    //   <div className={styles.WelcomeScreen}>
    //     <img src={blok.welcome_screen.logo.filename} />
    //       <div>
    //         {render(blok.welcome_screen.title)}
    //       </div>
    //       <button onClick={() => setShowWelcome(false)}>{blok.welcome_screen.cta_text}</button>
    //   </div>
    // )}
    <div className={styles.HomeHero} style={{backgroundImage: `url(${blok.background_image.filename})`}} >
      <div className='flex justify-center items-center text-center'>
        {render(blok.text)}
        </div>
    </div>
    // </>
  );
};

export default HomeHero;