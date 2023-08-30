import { render } from 'storyblok-rich-text-react-renderer';
import styles from "./GovernanceHero.module.css";

const GovernanceHero = ({ blok }) => {
  return (
    <div className={styles.GovernanceHero} style={{backgroundImage: `url(${blok.background_image.filename})`}} >
        {render(blok.title)}
        {blok.sub_title && render(blok.sub_title)}
    </div>
  );
};

export default GovernanceHero;