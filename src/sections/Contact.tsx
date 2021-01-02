import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MdSend } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import useStyles from '@styles/sections/contact';

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.contactTitle}>
        Contact
      </Typography>
      <Typography variant="h2" className={classes.contactCaption}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        molestias!
      </Typography>
      <Typography variant="caption" className={classes.mail}>
        <FiMail className={classes.mailSvg} /> vinigm.nho@pm.me
      </Typography>
      <form
        className={classes.mailForm}
        action="mailto:vinigm.nho@pm.me"
        method="post"
        encType="text/plain"
      >
        <div className={classes.mailerInfo}>
          <TextField type="email" label="From" />
          <TextField label="Subject" />
        </div>
        <TextField
          className={classes.mailContentInput}
          variant="outlined"
          multiline
          rows={12}
          label="Content"
        />
        <div className={classes.submitButton}>
          <Button startIcon={<MdSend />} type="submit" variant="outlined">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
