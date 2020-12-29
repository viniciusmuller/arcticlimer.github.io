import Typography from '@material-ui/core/Typography';

import useStyles from '@styles/sections/contact';

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
