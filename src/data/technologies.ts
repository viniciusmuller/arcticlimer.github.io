import { IoLogoNodejs } from 'react-icons/io';
import {
  SiElixir,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiFlask,
  SiCss3,
  SiHtml5,
  SiSass,
  SiReact,
  SiBootstrap,
  SiMaterialUi,
  SiLinux,
  SiPostgresql,
  SiGit,
} from 'react-icons/si';

const technologies = {
  Backend: [
    {
      name: 'Python',
      icon: SiPython,
    },
    {
      name: 'Flask',
      icon: SiFlask,
    },
    {
      name: 'Javascript',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Elixir',
      icon: SiElixir,
    },
  ],
  Frontend: [
    {
      name: 'HTML5',
      icon: SiHtml5,
    },
    {
      name: 'CSS3',
      icon: SiCss3,
    },
    {
      name: 'Bootstrap',
      icon: SiBootstrap,
    },
    {
      name: 'Sass',
      icon: SiSass,
    },
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'Material UI',
      icon: SiMaterialUi,
    },
  ],
  Misc: [
    {
      name: 'Linux',
      icon: SiLinux,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'Node.js',
      icon: IoLogoNodejs,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
  ],
};

export default technologies;
