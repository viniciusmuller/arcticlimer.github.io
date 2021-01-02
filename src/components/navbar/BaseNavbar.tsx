import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Navbar } from '@common/types';
import useStyles from '@styles/components/navbar/navbar';

function BaseNavbar(props: Navbar) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Vinícius Müller
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BaseNavbar;
