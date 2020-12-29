import styled from 'styled-components';

import useStyles from '@styles/components/navbar/navbarCollapse';
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
