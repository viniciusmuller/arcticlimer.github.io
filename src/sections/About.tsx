import Typography from '@material-ui/core/Typography';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { ReactComponent as UndrawProgramming } from '@assets/svg/undraw_programming.svg';
import useStyles, {
  Section,
  ProfilePic,
  TextWrapper,
} from '@styles/sections/about';

function About() {
  const classes = useStyles();

  return (
    <Section id="about">
      <UndrawProgramming className={classes.landingSvg} />
      <TextWrapper>
        <ProfilePic
          src="https://github.com/viniciusmuller.png"
          alt="Vinícius Müller"
        />
        <Typography variant="h1" className={classes.title}>
          Hello, I&apos;m Vinícius Müller!
        </Typography>
        <Typography variant="body1" className={classes.caption}>
          Software developer
        </Typography>
        <Typography
          align="justify"
          variant="subtitle1"
          className={classes.aboutParagraph}
        >
          I&apos;m a self-taught Brazilian Software Developer who&apos;s always
          looking forward to learn new technologies and its practical usages.
          I&apos;m currently mainly interested in Elixir, distributed systems,
          React, F# and functional programming.
        </Typography>
        <div>
          <a
            href="https://github.com/viniciusmuller"
            target="_blank"
            rel="noreferrer"
            title="GitHub profile"
          >
            <AiFillGithub className={classes.socialSvg} />
          </a>
          <a
            href="https://www.linkedin.com/in/vini-g-muller-829a36228/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn profile"
          >
            <AiFillLinkedin className={classes.socialSvg} />
          </a>
        </div>
      </TextWrapper>
    </Section>
  );
}

export default About;
