import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import darkTheme from './styles/themes';
import Navbar from './components/navbar/Navbar';
import sections from './sections';
import BottomBar from './components/BottomBar';

const useStyles = makeStyles({
  section: {
    minHeight: '100vh',
  },
});

function Portfolio() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar />
        {sections.map((sectionObject) => (
          <section
            key={sectionObject.id}
            className={classes.section}
            id={sectionObject.id}
          >
            <sectionObject.component />
          </section>
        ))}
        <BottomBar />
      </div>
    </ThemeProvider>
  );
}

export default Portfolio;
