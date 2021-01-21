import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;
`;

export const TextWrapper = styled.div`
  margin: auto;
  text-align: center;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Category = styled.div`
  margin: 0 auto;
  padding: 3rem;

  @media (min-width: 600px) {
    padding: 1.5rem;
  }
`;

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: '3.5rem',
    },

    techsParagraph: {
      maxWidth: '35rem',
      padding: '1.5rem 2rem',
    },
  }),
);

export default useStyles;
