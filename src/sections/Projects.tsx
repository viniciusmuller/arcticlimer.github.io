import Typography from '@material-ui/core/Typography';

import ProjectCard from '@components/ProjectCard';
import useStyles from '@styles/sections/projects';
import projects from '@data/projects';

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h1" className={classes.title}>
        Main projects
      </Typography>
      <Typography variant="h2" className={classes.caption}>
        Click on any project card to see the details.
      </Typography>
      <div className={classes.projectsWrapper}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
