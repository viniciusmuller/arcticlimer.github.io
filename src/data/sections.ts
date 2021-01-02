import { Section } from '@common/types';
import About from '@sections/About';
import Skills from '@sections/Skills';
import Projects from '@sections/Projects';
import Contact from '@sections/Contact';

const sections: Section[] = [
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
