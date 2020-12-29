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

// TODO take new projects images and store on this repository
const projects = [
  {
    name: 'This Portfolio',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
    imagePath: 'https://github.com/arcticlimer.png',
    icons: [{ icon: SiTypescript }, { icon: SiReact }, { icon: SiMaterialUi }],
    portfolioUrl: '/project/portfolio',
  },
  {
    name: 'Stackfetch',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
    imagePath: 'https://github.com/arcticlimer.png',
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
    name: 'Minimalpaste',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
    imagePath:
      'https://github.com/arcticlimer/minimalpaste/raw/master/img/minimalpaste.png',
    icons: [{ icon: SiPython }, { icon: SiHtml5 }],
    portfolioUrl: '/project/minimalpaste',
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
  // {
  //   name: 'Project 4',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
  //   imagePath: 'https://github.com/arcticlimer.png',
  //   icons: [{ icon: SiElixir }, { icon: SiGit }],
  //   portfolioUrl: '/project/project1',
  // },
  // {
  //   name: 'Project 5',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam nisi debitis odit optio consequuntur alias molestiae cum fugit nesciunt!',
  //   imagePath: 'https://github.com/arcticlimer.png',
  //   icons: [{ icon: SiElixir }, { icon: SiGit }],
  //   portfolioUrl: '/project/project1',
  // },
];

export default projects;
