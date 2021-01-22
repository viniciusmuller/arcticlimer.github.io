import Section from '@styles/sections/section';
import sections from '@data/sections';
import Navbar from '@components/navbar/Navbar';

function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="App">
        {sections.map((sectionObject) => (
          <Section key={sectionObject.id} id={sectionObject.id}>
            {/* TODO use JSX.Element */}
            <sectionObject.component />
          </Section>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
