import styled from 'styled-components';

import sections from '@data/sections';
import useStyles from '@styles/components/navbar/navbarCollapse';
import NavbarCollapsedButton from './NavbarCollapsedButton';

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

  return (
    <div className={classes.root}>
      <NavbarCollapsedButton />
      <div className={classes.buttonBar}>
        {sections.map(({ id }) => (
          <Link key={id} href={`#${id}`}>
            {id}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavbarCollapse;
