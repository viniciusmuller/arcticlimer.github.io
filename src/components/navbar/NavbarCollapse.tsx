import sections from '@data/sections';
import useStyles, {
  Wrapper,
  Link,
} from '@styles/components/navbar/navbarCollapse';
import NavbarCollapsedButton from './NavbarCollapsedButton';

function NavbarCollapse() {
  const classes = useStyles();

  return (
    <Wrapper>
      <NavbarCollapsedButton />
      <div className={classes.buttonBar}>
        {sections.map((section) => (
          <Link key={section} href={`#${section}`}>
            {section}
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}

export default NavbarCollapse;
