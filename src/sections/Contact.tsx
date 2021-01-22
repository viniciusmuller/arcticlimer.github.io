import Typography from '@material-ui/core/Typography';

import { FiMail } from 'react-icons/fi';
import useStyles, { Wrapper } from '@styles/sections/contact';

function Contact() {
  const classes = useStyles();
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Contact;
