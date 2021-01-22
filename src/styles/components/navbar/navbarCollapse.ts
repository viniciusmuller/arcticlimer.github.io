import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'absolute',
      right: 0,
    },

    buttonBar: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },

      margin: '10px',
      paddingLeft: '16px',
      position: 'relative',
      width: '100%',
      background: 'transparent',
    },
  }),
);

export default useStyles;
