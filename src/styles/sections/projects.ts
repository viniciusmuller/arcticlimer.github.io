import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 7rem;
  text-align: center;

  @media (max-width: 600px) {
    margin-top: 4rem;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: '4rem',
    },

    caption: {
      paddingTop: '1.5rem',
      fontSize: '2rem',
    },
  }),
);

export default useStyles;
