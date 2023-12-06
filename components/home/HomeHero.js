import { render } from "storyblok-rich-text-react-renderer";
import styles from "./HomeHero.module.css";

const HomeHero = ({ blok }) => {
  return (
    <div
      className={styles.HomeHero}
      style={{ backgroundImage: `url(${blok.background_image.filename})` }}
    >
      <div className="flex justify-center items-center text-center">
        {render(blok.text)}
      </div>{" "}
      <div className="flex justify-center items-center text-center">
        {render(blok.subtext)}
      </div>
    </div>
  );
};

export default HomeHero;
