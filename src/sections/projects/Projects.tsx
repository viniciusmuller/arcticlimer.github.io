import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import projects from './projects';
import ProjectCard from '../../components/ProjectCard';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      paddingTop: '7rem',
      textAlign: 'center',
    },

    title: {
      fontSize: '4rem',
    },

    caption: {
      paddingTop: '1.5rem',
      fontSize: '2rem',
    },

    projectsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    [theme.breakpoints.down('sm')]: {
      wrapper: {
        marginTop: '4rem',
      },
    },
  }),
);

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
