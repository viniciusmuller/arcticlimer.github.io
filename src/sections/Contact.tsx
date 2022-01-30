import Typography from '@material-ui/core/Typography';

import { FiMail } from 'react-icons/fi';
import useStyles, { Section, TextWrapper } from '@styles/sections/contact';
import { ReactComponent as UndrawContact } from '@assets/svg/undraw_contact.svg';

function Contact() {
  const classes = useStyles();

  return (
    <Section id="contact">
      <TextWrapper>
        <Typography variant="h1" className={classes.contactTitle}>
          Contact
        </Typography>
        <Typography variant="h2" className={classes.contactCaption}>
          If you got interested by any of my projects or technical skills,
          let&apos;s get in touch!
        </Typography>
        <Typography variant="caption" className={classes.mail}>
          <FiMail className={classes.mailSvg} /> vinigm.nho@gmail.com
        </Typography>
      </TextWrapper>
      <UndrawContact className={classes.contactSvg} />
    </Section>
  );
}

export default Contact;
