import Typography from '@material-ui/core/Typography';

import projects from '@data/projects';
import ProjectCard from '@components/ProjectCard';
import useStyles, { Section, ProjectsWrapper } from '@styles/sections/projects';

function Projects() {
  const classes = useStyles();

  return (
    <Section id="projects">
      <Typography variant="h1" className={classes.title}>
        Projects
      </Typography>
      <Typography variant="h2" className={classes.caption}>
        Click on any card to see the details.
      </Typography>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </ProjectsWrapper>
    </Section>
  );
}

export default Projects;
