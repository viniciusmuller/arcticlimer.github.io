import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import NavbarCollapse from './NavbarCollapse';

// theme
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    AppBar: {
      backgroundColor: '#fcfcfc',
      color: '#000000',
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function NewNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Vinícius Müller
          </Typography>
          <NavbarCollapse />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NewNavbar;
