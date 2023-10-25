import TeamMember from "./TeamMember";

const OurTeamGrid = ({ blok }) => {
  return (
    <section className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {blok.image_grid_items.map((item, i) => (
        <TeamMember blok={item} />
      ))}
    </section>
  );
};

export default OurTeamGrid;
