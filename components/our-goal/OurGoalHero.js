import { render } from 'storyblok-rich-text-react-renderer';
import styles from "./OurGoalHero.module.css";

const OurGoalHero = ({ blok }) => {
  return (
    <div className={styles.OurGoalHero} style={{backgroundImage: `url(${blok.background_image.filename})`}} >
        <div className='text-4xl mb-0'>{render(blok.hero_title)}</div>
        <div className='text-4xl mb-4'>
          {blok.hero_text && render(blok.hero_text)}
        </div>
    </div>
  );
};

export default OurGoalHero;