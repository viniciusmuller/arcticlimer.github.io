import {
  SiTypescript,
  SiReact,
  SiSass,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPython,
  SiFlask,
  SiMaterialUi,
  SiPostgresql,
} from 'react-icons/si';

import { Project } from '@common/types';
import stackFetchLanding from '@assets/img/stackfetch_landing.png';
import portfolioLanding from '@assets/img/portfolio_landing.png';
import minimalPaste from '@assets/img/minimalpaste_landing.png';

const projects: Project[] = [
  {
    name: 'This Portfolio',
    description:
      'My personal portfolio built with React and hosted at GitHub pages.',
    about: 'lorem '.repeat(15),
    landingImage: portfolioLanding,
    challenges: ['List item', 'List item', 'List item'],
    icons: [{ icon: SiTypescript }, { icon: SiReact }, { icon: SiMaterialUi }],
    portfolioUrl: '/project/portfolio',
    sourceCodeUrl: 'https://github.com/arcticlimer/portfolio',
  },
  {
    name: 'StackFetch',
    description:
      'A platform for users share their technology stack and GitHub profiles with the world.',
    about: 'lorem '.repeat(15),
    landingImage: stackFetchLanding,
    challenges: ['List item', 'List item', 'List item', 'List item'],
    icons: [
      { icon: SiTypescript },
      { icon: SiPostgresql },
      { icon: SiReact },
      { icon: SiSass },
      { icon: SiMaterialUi },
    ],
    portfolioUrl: '/project/stackfetch',
    sourceCodeUrl: 'https://github.com/arcticlimer/stackfetch',
  },
  {
    name: 'FlaskQuotes',
    description: 'A Flask web application for sharing personal quotes.',
    about: 'lorem '.repeat(15),
    landingImage:
      'https://github.com/arcticlimer/flaskquotes/raw/master/img/main.png',
    challenges: ['List item', 'List item', 'List item', 'List item'],
    icons: [
      { icon: SiPython },
      { icon: SiFlask },
      { icon: SiHtml5 },
      { icon: SiCss3 },
      { icon: SiBootstrap },
    ],
    portfolioUrl: '/project/flaskquotes',
    sourceCodeUrl: 'https://github.com/arcticlimer/flaskquotes',
  },
  {
    name: 'Minimalpaste',
    description:
      'A minimalist pastebin service using only Python built-in modules.',
    about: 'lorem '.repeat(15),
    landingImage: minimalPaste,
    challenges: ['List item', 'List item', 'List item', 'List item'],
    icons: [{ icon: SiPython }, { icon: SiHtml5 }],
    portfolioUrl: '/project/minimalpaste',
    sourceCodeUrl: 'https://github.com/arcticlimer/minimalpaste',
  },
];

export default projects;
