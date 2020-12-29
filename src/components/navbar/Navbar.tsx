import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from '@styles/components/navbar/navbar';
import NavbarCollapse from './NavbarCollapse';

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
