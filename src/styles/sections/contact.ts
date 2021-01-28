import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 6vw;

  scroll-snap-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 4rem;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 30vw;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const useStyles = makeStyles((theme) =>
  createStyles({
    contactTitle: {
      fontSize: '3.5rem',
    },

    contactCaption: {
      textAlign: 'justify',
      padding: '0.8rem 1.5rem',
      fontSize: '1.3rem',
    },

    mail: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
    },

    mailSvg: {
      marginRight: '0.4rem',
    },

    contactSvg: {
      width: '40vw',
      height: '40vw',
    },

    [theme.breakpoints.down('xs')]: {
      contactSvg: {
        marginTop: '2rem',
        width: '100vw',
      },
    },
  }),
);

export default useStyles;
