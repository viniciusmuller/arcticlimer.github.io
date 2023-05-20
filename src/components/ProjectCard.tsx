import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Project, Icon } from '@common/types';
import useStyles, { IconsWrapper } from '@styles/components/projectCard';

function ProjectCard(props: Project) {
  const classes = useStyles();

  function renderIcons(icons: Icon[]) {
    return icons.map((icon) => (
      <icon.icon
        key={icon.name}
        className={classes.techIcon}
        title={icon.name}
        size={24}
      />
    ));
  }

  const { sourceCodeUrl, name, description, icons } = props;

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      key={name}
      className={classes.root}
      onClick={() => openInNewTab(sourceCodeUrl)}
    >
      <CardActionArea className={classes.actionArea}>
        <CardContent>
          <Typography gutterBottom align="left" variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary" align="justify" variant="body2">
            {description}
          </Typography>
          <IconsWrapper>{renderIcons(icons)}</IconsWrapper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
