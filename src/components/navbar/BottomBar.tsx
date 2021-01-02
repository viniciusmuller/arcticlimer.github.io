import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import useStyles from '@styles/components/bottomBar';

function BottomBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Typography variant="h5" className={classes.text}>
        Thanks for reading!
      </Typography>
    </AppBar>
  );
}

export default BottomBar;
