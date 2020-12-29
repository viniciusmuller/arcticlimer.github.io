import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 'auto',
      marginTop: 65,
      maxWidth: 320,
    },
    media: {
      height: 160,
    },

    iconsWrapper: {
      paddingTop: '0.7rem',
      textAlign: 'left',
    },

    techIcon: {
      margin: '0.2rem 0.3rem 0 0.3rem',
      fill: '#6b6b6b',
    },
  }),
);

interface ProjectCardProps {
  name: string;
  imagePath: string;
  description: string;
  icons: any[]; // JSX.Element[];
  portfolioUrl: string;
}

function ProjectCard(props: ProjectCardProps) {
  const classes = useStyles();
  const { imagePath, name, description, icons, portfolioUrl } = props;

  return (
    <Card key={name} className={classes.root}>
      <CardActionArea component={Link} to={portfolioUrl}>
        <CardMedia className={classes.media} image={imagePath} title={name} />
        <CardContent>
          <Typography gutterBottom align="left" variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            color="textSecondary"
            align="justify"
            variant="body2"
            component="p"
          >
            {description}
          </Typography>
          <div className={classes.iconsWrapper}>
            {icons.map((iconObject, i) => (
              <iconObject.icon
                key={i.toString()}
                className={classes.techIcon}
                size={20}
              />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
