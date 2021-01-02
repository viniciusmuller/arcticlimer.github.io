import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Project } from '@common/types';
import useStyles from '@styles/components/projectCard';

function ProjectCard(props: Project) {
  const classes = useStyles();
  const { landingImage, name, description, icons, portfolioUrl } = props;

  return (
    <Card key={name} className={classes.root}>
      <CardActionArea component={Link} to={portfolioUrl}>
        <CardMedia
          className={classes.media}
          image={landingImage}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom align="left" variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary" align="justify" variant="body2">
            {description}
          </Typography>
          <div className={classes.iconsWrapper}>
            {icons.map((iconObject, i) => (
              <iconObject.icon
                key={i.toString()}
                className={classes.techIcon}
                size={24}
              />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
