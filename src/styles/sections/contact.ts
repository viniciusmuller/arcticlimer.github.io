import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '6rem',
      marginBottom: '3rem',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    contactTitle: {
      fontSize: '4.5rem',
    },

    contactCaption: {
      textAlign: 'justify',
      padding: '0.8rem 1.5rem',
      fontSize: '1.3rem',
    },

    mail: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2rem',
    },

    mailSvg: {
      marginRight: '0.3rem',
    },

    mailForm: {
      paddingTop: 70,
    },

    mailerInfo: {
      display: 'inline-block',
      marginRight: 50,
      '& div': {
        paddingTop: 3,
        marginBottom: 20,
        display: 'block',
      },
    },

    mailContentInput: {
      width: 250,
    },

    submitButton: {
      display: 'block',
    },

    [theme.breakpoints.down('xs')]: {
      mailForm: {
        textAlign: 'center',
      },

      submitButton: {
        marginTop: '1rem',
      },
    },
  }),
);

export default useStyles;
