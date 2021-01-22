import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    listItem: {
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  }),
);

export default useStyles;
