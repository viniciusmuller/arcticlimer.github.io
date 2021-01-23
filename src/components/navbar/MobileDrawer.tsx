import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from '@styles/components/navbar/mobileDrawer';
import sections from '@data/sections';

interface MobileDrawerProps {
  open: boolean;
  onClick: () => void;
}

function MobileDrawer(props: MobileDrawerProps) {
  const classes = useStyles();

  return (
    <Drawer anchor="top" {...props}>
      <List>
        {sections.map((section) => (
          <ListItem
            key={section}
            className={classes.listItem}
            button
            component="a"
            href={`#${section}`}
          >
            <ListItemText primary={section} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MobileDrawer;
