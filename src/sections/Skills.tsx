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
  function renderTechnologyObject(tech: Technology) {
    return (
      <ListItem key={tech.name}>
        <ListItemIcon>
          <tech.icon />
        </ListItemIcon>
        <ListItemText primary={tech.name} />
      </ListItem>
    );
  }

  function renderTechnologies() {
    return Object.entries(technologies).map(([category, stack]) => (
      <Category key={category}>
        <List subheader={<ListSubheader>{category}</ListSubheader>}>
          {stack.map(renderTechnologyObject)}
        </List>
      </Category>
    ));
  }

  return (
    <Section id="skills">
      <TextWrapper>
        <Typography variant="h1" className={classes.title}>
          Technical skills
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.techsParagraph}
          align="justify"
        >
          I really like to use the right tool for the problem that I&apos;m
          facing. That&apos;s why I usually take a look for better alternatives
          whenever doing something. Currently, the ones that I&apos;m most used
          to are Elixir and Phoenix, Rust, Python and Typescript. I really like
          to learn about new technologies by using them in practical projects.
          The following lists are not exhaustive and reflects the technologies
          that I prefer to use on a daily basis.
        </Typography>
      </TextWrapper>
      <TechnologiesWrapper>{renderTechnologies()}</TechnologiesWrapper>
    </Section>
  );
}

export default Skills;
