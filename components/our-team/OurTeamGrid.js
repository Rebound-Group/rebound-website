import { render } from "storyblok-rich-text-react-renderer";
import TeamMember from "./TeamMember";

const OurTeamGrid = ({ blok }) => {
  return (
    <section className="grid shadow-lg shadow-gray-950 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {blok.image_grid_items.map((item, i) => (
        <TeamMember blok={item} />
      ))}
    </section>
  );
};

export default OurTeamGrid;
