import TeamMember from "./TeamMember";
import styles from "./OurTeamGrid.module.css";

const OurTeamGrid = ({ blok }) => {
  return (
    <div className={styles.OurTeamGrid}>
      <section className="grid grid-cols-1 md:grid-cols-3 mt-8">
        {blok.image_grid_items.map((item, i) => (
          <TeamMember blok={item} />
        ))}
      </section>
    </div>
  );
};

export default OurTeamGrid;
