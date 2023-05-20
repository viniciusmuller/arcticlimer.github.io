import { makeStyles, createStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

export const IconsWrapper = styled.div`
  padding-top: 0.7rem;
  text-align: left;
`;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 340,
    },

    actionArea: {
      height: '100%',
    },

    iconsWrapper: {
      paddingTop: '0.7rem',
      textAlign: 'left',
    },

    techIcon: {
      margin: '0.2rem 0.3rem 0 0.3rem',
      fill: '#6b6b6b',
    },

    [theme.breakpoints.down('sm')]: {
      root: {
        maxWidth: 290,
      },
    },

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paper: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 30,
      minWidth: '50%',
    },
  }),
);

export default useStyles;
