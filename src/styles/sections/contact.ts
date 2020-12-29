import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: '6rem',
      display: 'flex',
      justifyContent: 'center',
    },

    contactTitle: {
      fontSize: '4.5rem',
    },
  }),
);

export default useStyles;
