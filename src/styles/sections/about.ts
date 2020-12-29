import { makeStyles, createStyles } from '@material-ui/core/styles';

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

export default useStyles;
