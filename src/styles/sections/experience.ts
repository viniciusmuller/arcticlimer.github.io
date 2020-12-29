import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: '7rem',
    },

    textWrapper: {
      margin: 'auto',
      textAlign: 'center',
    },

    title: {
      fontSize: '3.5rem',
    },

    techsParagraph: {
      maxWidth: '35rem',
      padding: '1.5rem 2rem',
    },

    technologiesWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 'auto',
    },

    category: {
      margin: '0 auto',
      padding: '3rem',
    },

    [theme.breakpoints.down('sm')]: {
      category: {
        padding: '1.5rem',
      },

      wrapper: {
        flexDirection: 'column',
      },
    },
  }),
);

export default useStyles;
