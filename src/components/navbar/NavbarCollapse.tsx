import styled from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import ButtonNavbarCollapse from './ButtonNavbarCollapse';
import ThemeChanger from './ThemeChanger';

// TODO translate this transitions to material UI
const Link = styled.a`
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
    root: {
      position: 'absolute',
      right: 0,
    },
    // TODO aaaaaaaaaaa o link nao funciona o hover
    buttonBar: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      margin: '10px',
      paddingLeft: '16px',
      position: 'relative',
      width: '100%',
      background: 'transparent',
    },

    link: {
      color: '#000',
      marginLeft: '2rem',
      fontWeight: 500,

      textTransform: 'uppercase',
      textDecoration: 'none',
      letterSpacing: '0.15rem',

      padding: '0.95rem 1.14rem',
      position: 'relative',

      transition: theme.transitions.create(['width', 'left'], {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.short,
      }),

      '&::after': {
        content: '""',
        bottom: '0.7rem',
        height: '0.12rem',
        left: '50%',
        position: 'absolute',
        background: '#000',
        // transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
        width: 0,
      },

      '&::after:hover': {
        width: '50%',
        left: '23%',
      },
    },
  }),
);

function NavbarCollapse() {
  const classes = useStyles();
  const sections = ['about', 'experience', 'projects', 'contact'];

  return (
    <div className={classes.root}>
      <ButtonNavbarCollapse />
      <div className={classes.buttonBar}>
        {sections.map((section) => (
          <Link key={section} href={`#${section}`}>
            {section}
          </Link>
        ))}
        <ThemeChanger />
      </div>
    </div>
  );
}

export default NavbarCollapse;
