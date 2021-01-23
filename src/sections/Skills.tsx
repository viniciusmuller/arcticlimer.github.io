import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';

import { Technology } from '@common/types';
import useStyles, {
  Section,
  TextWrapper,
  TechnologiesWrapper,
  Category,
} from '@styles/sections/skills';
import technologies from '@data/technologies';

function Skills() {
  const classes = useStyles();

  // Helper function for rendering a technology inside a MUI List
  function renderTechnology(tech: Technology) {
    return (
      <ListItem key={tech.name}>
        <ListItemIcon>
          <tech.icon />
        </ListItemIcon>
        <ListItemText primary={tech.name} />
      </ListItem>
    );
  }

  return (
    <Section id="skills">
      <TextWrapper>
        <Typography variant="h1" className={classes.title}>
          Technology skills
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.techsParagraph}
          align="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          voluptatem excepturi, sequi delectus aspernatur perferendis quia harum
          illo est doloremque? Modi accusamus quas itaque officia quidem
          voluptates deleniti nesciunt, fugit sequi expedita provident tempora
          nam dicta, quisquam error saepe praesentium!
        </Typography>
      </TextWrapper>
      <TechnologiesWrapper>
        {Object.entries(technologies).map(([category, stack]) => (
          <Category key={category}>
            <List subheader={<ListSubheader>{category}</ListSubheader>}>
              {stack.map(renderTechnology)}
            </List>
          </Category>
        ))}
      </TechnologiesWrapper>
    </Section>
  );
}

export default Skills;
