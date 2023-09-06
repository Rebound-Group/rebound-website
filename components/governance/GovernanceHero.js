import { render } from 'storyblok-rich-text-react-renderer';
import styles from "./GovernanceHero.module.css";

const GovernanceHero = ({ blok }) => {
  return (
    <div className={styles.GovernanceHero} style={{backgroundImage: `url(${blok.background_image.filename})`}} >
        <div className="text-3xl md:text-4xl">{render(blok.title)}</div>
    </div>
  );
};

export default GovernanceHero;