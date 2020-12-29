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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
    imagePath: portfolioLanding,
    icons: [{ icon: SiTypescript }, { icon: SiReact }, { icon: SiMaterialUi }],
    portfolioUrl: '/project/portfolio',
  },
  {
    name: 'StackFetch',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
    imagePath: stackFetchLanding,
    icons: [
      { icon: SiTypescript },
      { icon: SiPostgresql },
      { icon: SiReact },
      { icon: SiSass },
      { icon: SiMaterialUi },
    ],
    portfolioUrl: '/project/stackfetch',
  },
  {
    name: 'FlaskQuotes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
    imagePath:
      'https://github.com/arcticlimer/flaskquotes/raw/master/img/main.png',
    icons: [
      { icon: SiPython },
      { icon: SiFlask },
      { icon: SiHtml5 },
      { icon: SiCss3 },
      { icon: SiBootstrap },
    ],
    portfolioUrl: '/project/flaskquotes',
  },
  {
    name: 'Minimalpaste',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
    imagePath: minimalPaste,
    icons: [{ icon: SiPython }, { icon: SiHtml5 }],
    portfolioUrl: '/project/minimalpaste',
  },
];

export default projects;
