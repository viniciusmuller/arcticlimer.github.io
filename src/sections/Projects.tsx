import Typography from '@material-ui/core/Typography';

import ProjectCard from '@components/ProjectCard';
import useStyles, { Wrapper, ProjectsWrapper } from '@styles/sections/projects';
import projects from '@data/projects';

function Projects() {
  const classes = useStyles();

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Projects;
