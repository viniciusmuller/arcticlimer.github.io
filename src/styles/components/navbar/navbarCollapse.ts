import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 1.5rem;
`;

export const Link = styled.a`
  color: #000;
  margin-left: 2rem;

  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  font-weight: 500;

  padding: 0.95rem 1.14rem;
  position: relative;

  &::after {
    content: '';
    bottom: 0.7rem;
    height: 0.12rem;
    left: 50%;
    position: absolute;
    background: #000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover::after {
    width: 50%;
    left: 23%;
  }
`;

const useStyles = makeStyles((theme) =>
  createStyles({
    [theme.breakpoints.down('sm')]: {
      buttonBar: {
        display: 'none',
      },
    },
  }),
);

export default useStyles;
