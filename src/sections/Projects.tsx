import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
        <br /> You can have a full updated list of my projects in my&nbsp;
        <Link
          href="https://github.com/viniciusmuller"
          target="_blank"
          rel="noreferrer"
          title="GitHub profile"
        >
          GitHub profile.
        </Link>
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
