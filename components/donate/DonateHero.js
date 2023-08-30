import { render } from 'storyblok-rich-text-react-renderer';
import styles from "./DonateHero.module.css";

const DonateHero = ({ blok }) => {
  return (
    <div className={styles.DonateHero} style={{backgroundImage: `url(${blok.background_image.filename})`}} >
        {render(blok.hero_title)}
        <div className='text-4xl mb-4'>
          {blok.hero_text && render(blok.hero_text)}
        </div>
    </div>
  );
};

export default DonateHero;