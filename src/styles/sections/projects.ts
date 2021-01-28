import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 6rem;
  min-height: 100vh;

  text-align: center;

  scroll-snap-align: start;

  @media (max-width: 600px) {
    margin-top: 4rem;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 2vw;
`;

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: '3.5rem',
    },

    caption: {
      paddingTop: '1.5rem',
      fontSize: '2rem',
    },
  }),
);

export default useStyles;
