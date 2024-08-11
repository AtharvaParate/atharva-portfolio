import styles from "./ProjectStyle.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsterGlasses from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/AtharvaParate/Travel-Tastic"
          h3="Travel Tastic"
          p="Travel Planning Platform"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/AtharvaParate/runningflame226-ME_QKART_FRONTEND_V2"
          h3="QKart"
          p="Ecommerce App"
        />
        <ProjectCard
          src={hipsterGlasses}
          link="https://github.com/AtharvaParate/runningflame226-ME_BUILDOUT_XFLIX_NODE"
          h3="XFlix"
          p="Video Streaming Platform"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/AtharvaParate/todo_list"
          h3="Todo"
          p="Notes Planner"
        />
      </div>
    </section>
  );
}

export default Projects;
