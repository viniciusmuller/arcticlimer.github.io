import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      paddingTop: 'calc(2rem + 56px)',
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
      justifyContent: 'space-around',
    },

    projectDetailsText: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '75vh',
    },

    teste: {
      textAlign: 'justify',
      fontSize: '1.1rem',
      padding: '1rem 4rem 3rem 1rem',
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

    gallery: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',

      '& img': {
        margin: '1rem',
        maxWidth: '100%',
      },
    },

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

        '& li': {
          marginLeft: '2.2rem',
        },
      },
    },
  }),
);

export default useStyles;
