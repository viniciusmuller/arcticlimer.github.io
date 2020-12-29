import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: '6rem',
      display: 'flex',
      justifyContent: 'center',
    },

    contactTitle: {
      fontSize: '4.5rem',
    },
  }),
);

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.contactTitle}>
        Contact
      </Typography>
    </div>
  );
}

export default Contact;
