import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 'auto',
      marginTop: 65,
      maxWidth: 340,
    },
    media: {
      height: 160,
    },

    iconsWrapper: {
      paddingTop: '0.7rem',
      textAlign: 'left',
    },

    techIcon: {
      margin: '0.2rem 0.3rem 0 0.3rem',
      fill: '#6b6b6b',
    },
  }),
);

export default useStyles;
