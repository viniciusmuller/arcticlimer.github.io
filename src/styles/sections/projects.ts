import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      paddingTop: '7rem',
      textAlign: 'center',
    },

    title: {
      fontSize: '4rem',
    },

    caption: {
      paddingTop: '1.5rem',
      fontSize: '2rem',
    },

    projectsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    [theme.breakpoints.down('sm')]: {
      wrapper: {
        marginTop: '4rem',
      },
    },
  }),
);

export default useStyles;
