import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '50px',
      backgroundColor: '#ffffff',
      boxShadow: '0 -2px 5px #919191',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      color: '#000',
    },
  }),
);

export default useStyles;
