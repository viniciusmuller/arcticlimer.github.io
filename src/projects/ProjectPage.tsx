import Typography from '@material-ui/core/Typography';

import useStyles from '@styles/projects/projectPage';

function ProjectPage() {
  const classes = useStyles();

  window.scrollTo(0, 0);

  return (
    <div className={classes.wrapper}>
      <Typography variant="h1" className={classes.projectTitle}>
        Project: Lorem, ipsum.
      </Typography>
      <Typography variant="h2" className={classes.projectCaption}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
        doloribus!
      </Typography>
      <div className={classes.projectDetailsWrapper}>
        <div className={classes.projectDetailsText}>
          <Typography variant="subtitle1" className={classes.teste}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            laboriosam consequatur adipisci illo nihil sint provident sequi
            nesciunt quos quis, reprehenderit quisquam accusantium rerum laborum
            sapiente assumenda possimus illum. Voluptate.
          </Typography>
          <Typography variant="h4" className={classes.projectChallenges}>
            Challenges accomplished
          </Typography>
          <ul className={classes.list}>
            <li>Feature and challenge</li>
            <li>Feature and challenge</li>
            <li>Feature and challenge</li>
            <li>Feature and challenge</li>
            <li>Feature and challenge</li>
            <li>Feature and challenge</li>
            <li>Feature and challenge</li>
            <li>Feature and challenge</li>
            <li>Feature and challenge</li>
          </ul>
        </div>
        <div className={classes.gallery}>
          {/* <img alt="" src="https://via.placeholder.com/1600x900" />
          <img alt="" src="https://via.placeholder.com/1600x900" />
          <img alt="" src="https://via.placeholder.com/1600x900" />
          <img alt="" src="https://via.placeholder.com/1600x900" /> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
