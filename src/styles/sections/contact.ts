import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25vh;
`;

const useStyles = makeStyles(() =>
  createStyles({
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
  }),
);

export default useStyles;
