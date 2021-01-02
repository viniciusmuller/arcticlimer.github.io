import Typography from '@material-ui/core/Typography';
import { AiFillGithub } from 'react-icons/ai';

import { ReactComponent as UndrawProgramming } from '@assets/svg/undraw_programming.svg';
import useStyles from '@styles/sections/about';

function About() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <UndrawProgramming className={classes.landingSvg} />
      <div className={classes.textWrapper}>
        <img
          className={classes.picture}
          src="https://github.com/arcticlimer.png"
          alt="Vinícius Müller"
        />
        <Typography variant="h1" className={classes.title}>
          Hello, i&apos;m Vinícius Müller!{' '}
        </Typography>
        <Typography variant="body1" className={classes.caption}>
          Web developer
        </Typography>
        <Typography
          align="justify"
          variant="subtitle1"
          className={classes.aboutParagraph}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          numquam itaque eveniet perferendis blanditiis vero veritatis quas,
          magni deleniti ea commodi quod aperiam inventore ipsam!
        </Typography>
        <a
          href="https://github.com/arcticlimer"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className={classes.socialSvg} size="2.5rem" />
        </a>
      </div>
    </div>
  );
}

export default About;
