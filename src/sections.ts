import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';

const sections = [
  {
    component: About,
    id: 'about',
  },
  {
    component: Skills,
    id: 'skills',
  },
  {
    component: Projects,
    id: 'projects',
  },
  {
    component: Contact,
    id: 'contact',
  },
];

export default sections;
