import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    AppBar: {
      backgroundColor: '#fcfcfc',
      color: '#000000',
    },

    title: {
      flexGrow: 1,
    },
  }),
);

export default useStyles;
