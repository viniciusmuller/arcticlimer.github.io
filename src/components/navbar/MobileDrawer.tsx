import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from '@styles/components/navbar/mobileDrawer';

// TODO remove any
function MobileDrawer(props: any) {
  const classes = useStyles();
  const options = ['about', 'experience', 'projects', 'contact'];

  return (
    <Drawer anchor="top" {...props}>
      <List>
        {options.map((opt) => (
          <ListItem
            key={opt}
            className={classes.listItem}
            button
            component="a"
            href={`#${opt}`}
          >
            <ListItemText primary={opt} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MobileDrawer;
