import { render } from "storyblok-rich-text-react-renderer";
import styles from "./TeamMember.module.css";

const TeamMember = ({ blok }) => {
  return (
    <div className={styles.TeamMember}>
      <img src={blok.Image.filename} />
      <div className="text-4xl mb-0">{render(blok.Name)}</div>
      <div className="text-4xl mb-0">{render(blok.Title)}</div>
      <div className="text-4xl mb-4">
        {blok.Description & render(blok.Description)}
      </div>
    </div>
  );
};

export default TeamMember;
