import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { AiFillGithub } from 'react-icons/ai';

import { ReactComponent as UndrawProgramming } from '../../assets/svg/undraw_programming.svg';

// TODO theme.spacing?
const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      minHeight: 'calc(100vh + 56px)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },

    landingSvg: {
      marginBottom: '6rem',
      width: '50vw',
    },

    textWrapper: {
      position: 'relative',
      textAlign: 'center',
      maxWidth: '30rem',
    },

    picture: {
      width: '14rem',
      height: '14rem',
      // Placeholder background while the image don't load
      backgroundColor: '#e2e2e2',
      borderRadius: '50%',
    },

    title: {
      paddingTop: '1.5rem',
      fontSize: '2.5rem',
    },

    caption: {
      fontSize: '1.3rem',
      marginLeft: '57%',
    },

    aboutParagraph: {
      fontSize: '1.05rem',
      padding: '1.2rem 1.5rem 1.3rem 1.5rem',
    },

    socialSvg: {
      fill: 'inherit',
    },

    [theme.breakpoints.up('md')]: {
      wrapper: {
        paddingRight: '5%',
      },
    },

    [theme.breakpoints.down('md')]: {
      landingSvg: {
        display: 'none',
      },
    },

    [theme.breakpoints.down('sm')]: {
      picture: {
        width: '11rem',
        height: '11rem',
      },
    },

    [theme.breakpoints.down('xs')]: {
      caption: {
        marginLeft: '40%',
      },
    },
  }),
);

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
