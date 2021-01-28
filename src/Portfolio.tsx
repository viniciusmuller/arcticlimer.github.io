import SectionsWrapper from '@styles/sections/section';
import Navbar from '@components/navbar/Navbar';

import About from '@sections/About';
import Skills from '@sections/Skills';
import Projects from '@sections/Projects';
import Contact from '@sections/Contact';

function Portfolio() {
  return (
    <SectionsWrapper>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </SectionsWrapper>
  );
}

export default Portfolio;
