import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles, { Wrapper } from '@styles/components/navbar/navbar';
import NavbarCollapse from './NavbarCollapse';

function Navbar() {
  const classes = useStyles();

  return (
    <Wrapper>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h5">Vinícius Müller</Typography>
          <NavbarCollapse />
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

export default Navbar;
