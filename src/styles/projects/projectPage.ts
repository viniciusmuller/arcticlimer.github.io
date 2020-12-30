import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      paddingTop: '3rem',
      marginBottom: '4rem',
    },

    projectTitle: {
      fontSize: '5rem',
      maxWidth: '80vw',

      paddingBottom: '2rem',
    },

    projectCaption: {
      marginBottom: '3rem',
      maxWidth: '70vw',

      fontSize: '2rem',
      textAlign: 'justify',
    },

    projectDetailsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },

    projectDetailsText: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '75vh',
    },

    teste: {
      textAlign: 'justify',
      fontSize: '1.1rem',
      padding: '1rem 1rem 3rem 1rem',
    },

    list: {
      listStyleType: 'square',
      marginLeft: '1.7rem',
      color: '#383838',

      '& li': {
        marginTop: '0.8rem',
        fontSize: '1.5rem',
      },
    },

    // gallery: {
    //   display: 'flex',
    //   flexWrap: 'wrap',

    //   // TODO improve image grid structure
    //   '& img': {
    //     padding: '0.3rem',
    //     maxWidth: '50%',
    //   },
    // },

    [theme.breakpoints.up('md')]: {
      gallery: {
        marginLeft: '1rem',
        width: '50vw',
      },
    },

    [theme.breakpoints.down('sm')]: {
      projectTitle: {
        fontSize: '2.5rem',
      },

      projectChallenges: {
        textAlign: 'center',
      },

      list: {
        margin: '1rem auto',
      },
    },
  }),
);

export default useStyles;
