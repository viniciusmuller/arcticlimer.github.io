import Typography from '@material-ui/core/Typography';
import { AiFillGithub } from 'react-icons/ai';

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
          src="https://github.com/arcticlimer.png"
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
          I&apos;m currently mainly interested in Elixir, Test Driven
          Development, Golang, Distributed Systems, Deep Learning and functional
          programming.
          {/* Lorem ipsum dolor sit */}
          {/* amet, consectetur adipisicing elit. Dolores numquam itaque eveniet */}
          {/* perferendis blanditiis vero veritatis quas, magni deleniti ea commodi */}
          {/* quod aperiam inventore ipsam! */}
        </Typography>
        <a
          href="https://github.com/arcticlimer"
          target="_blank"
          rel="noreferrer"
          title="GitHub profile"
        >
          <AiFillGithub className={classes.socialSvg} />
        </a>
      </TextWrapper>
    </Section>
  );
}

export default About;
