import { render } from "storyblok-rich-text-react-renderer";
import styles from "./TeamMember.module.css";

const TeamMember = ({ blok }) => {
  return (
    <div className={styles.TeamMember}>
      <img src={blok.Image.filename} />
      <div className="text-xl mb-4">{render(blok.Name)}</div>
      <div className="text-xl mb-4">
        <strong>{render(blok.Title)}</strong>
      </div>
      <div className="text-md mb-4">{render(blok.Description)}</div>
    </div>
  );
};

export default TeamMember;
