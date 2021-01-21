import Typography from '@material-ui/core/Typography';

import { Project } from '@common/types';
// import ProjectNavbar from '@components/navbar/ProjectNavbar';
import useStyles from '@styles/projects/projectPage';

function ProjectPage(props: Project) {
  const classes = useStyles();
  const {
    landingImage,
    name,
    description,
    about,
    challenges,
    sourceCodeUrl,
  } = props;

  window.scrollTo(0, 0);

  return (
    <div className={classes.wrapper}>
      {/* <ProjectNavbar /> */}
      <Typography variant="h1" className={classes.projectTitle}>
        Project: {name}
      </Typography>
      <Typography variant="h2" className={classes.projectCaption}>
        {description}
      </Typography>
      <div className={classes.projectDetailsWrapper}>
        <div className={classes.projectDetailsText}>
          <Typography variant="subtitle1" className={classes.teste}>
            {about}
            {sourceCodeUrl && (
              <p>
                <br />
                The project source code can be found{' '}
                <a href={sourceCodeUrl} target="_blank" rel="noreferrer">
                  here
                </a>
                .
              </p>
            )}
          </Typography>
          {/* If the project is open source, display the
              source code reference */}
          <Typography variant="h4" className={classes.projectChallenges}>
            Challenges accomplished:
          </Typography>
          <ul className={classes.list}>
            {challenges.map((content, idx) => (
              <li key={idx.toString()}>{content}</li>
            ))}
          </ul>
        </div>
        <div className={classes.gallery}>
          <img alt={name} src={landingImage} />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
