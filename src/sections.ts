import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';

const sections = [
  {
    component: About,
    id: 'about',
  },
  {
    component: Experience,
    id: 'experience',
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
