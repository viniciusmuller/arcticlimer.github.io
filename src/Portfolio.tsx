import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import sections from '@data/sections';
import darkTheme from '@styles/themes';
import PortfolioNavbar from '@components/navbar/PortfolioNavbar';

const useStyles = makeStyles({
  section: {
    minHeight: '100vh',
  },
});

function Portfolio() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <PortfolioNavbar />
      <div className="App">
        {sections.map((sectionObject) => (
          <section
            key={sectionObject.id}
            className={classes.section}
            id={sectionObject.id}
          >
            {/* TODO use JSX.Element */}
            <sectionObject.component />
          </section>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default Portfolio;
