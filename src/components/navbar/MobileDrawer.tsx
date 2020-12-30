import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from '@styles/components/navbar/mobileDrawer';
import sections from '../../sections';

// TODO remove any
function MobileDrawer(props: any) {
  const classes = useStyles();

  return (
    <Drawer anchor="top" {...props}>
      <List>
        {sections.map(({ id }) => (
          <ListItem
            key={id}
            className={classes.listItem}
            button
            component="a"
            href={`#${id}`}
          >
            <ListItemText primary={id} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MobileDrawer;
