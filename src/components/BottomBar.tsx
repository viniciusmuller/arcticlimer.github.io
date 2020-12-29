import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '50px',
      backgroundColor: '#ffffff',
      boxShadow: '0 -2px 5px #919191',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      color: '#000',
    },
  }),
);

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
