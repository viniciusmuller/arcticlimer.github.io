import { makeStyles, createStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 4rem;
  min-height: 100vh;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 7rem;
  }
`;

export const ProfilePic = styled.img`
  width: 14rem;
  height: 14rem;

  margin: auto;
  // Placeholder background while the image loads
  background-color: #c4c4c4;
  border-radius: 50%;

  @media (max-width: 600px) {
    width: 11rem;
    height: 11rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 30rem;
`;

const useStyles = makeStyles((theme) =>
  createStyles({
    landingSvg: {
      marginBottom: '6rem',
      width: '50vw',
    },

    title: {
      paddingTop: '1.5rem',
      fontSize: '2.5rem',
    },

    caption: {
      fontSize: '1.3rem',
      marginLeft: 'auto',
      paddingRight: '2rem',
    },

    aboutParagraph: {
      fontSize: '1.05rem',
      padding: '1.2rem 1.5rem 1.3rem 1.5rem',
    },

    socialSvg: {
      fill: '#262626',
      fontSize: '2.5rem',
      margin: '0 7px',
    },

    [theme.breakpoints.down('md')]: {
      landingSvg: {
        display: 'none',
      },
    },

    [theme.breakpoints.down('xs')]: {
      caption: {
        margin: 0,
        padding: 0,
      },
    },
  }),
);

export default useStyles;
