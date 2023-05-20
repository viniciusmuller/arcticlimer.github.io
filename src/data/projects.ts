import { Project } from '@common/types';

// Icons
import i from '@data/icons';

const projects: Project[] = [
  {
    name: 'Algorithms-data-structures',
    description:
      'Personal implementation of different algorithms and data structures.',
    icons: [i.cIcon],
    sourceCodeUrl:
      'https://github.com/viniciusmuller/algorithms-data-structures',
  },
  {
    name: 'Djanho',
    description:
      'A Rust CLI tool to convert VSCode themes to (Neo)Vim colorschemes.',
    icons: [i.rustIcon],
    sourceCodeUrl: 'https://github.com/viniciusmuller/djanho',
  },
  {
    name: 'Isotope',
    description: 'Work with Rust noise functions using Elixir NIFs.',
    icons: [i.elixirIcon, i.rustIcon],
    sourceCodeUrl: 'https://github.com/phiriq/isotope',
  },
  {
    name: 'Puretypist',
    description:
      'Simple web typing tutor software written in Javascript and HTML.',
    icons: [i.jsIcon, i.htmlIcon],
    sourceCodeUrl: 'https://github.com/viniciusmuller/puretypist',
  },
  // {
  //   // TODO
  //   name: 'CatWiki',
  //   description:
  //     'A site that displays information and images of different cat breeds.',
  //   about: 'lorem '.repeat(15),
  //   landingImage: websiteLanding,
  //   challenges: ['', '', ''],
  //   icons: [
  //     i.elixirIcon,
  //     i.tsIcon,
  //     i.reactIcon,
  //     i.muiIcon,
  //     i.styledComponentsIcon,
  //   ],
  //   sourceCodeUrl: 'https://github.com/viniciusmuller/catwiki',
  // },
  {
    name: 'This website',
    description:
      'My personal website built with React and hosted at GitHub pages.',
    icons: [i.tsIcon, i.reactIcon, i.muiIcon, i.styledComponentsIcon],
    sourceCodeUrl: 'https://github.com/viniciusmuller/viniciusmuller.github.io',
  },
  {
    // TODO: Github Oauth
    name: 'StackFetch',
    description:
      'A platform for users share their technology stack and GitHub profiles' +
      'with the world.',
    icons: [i.tsIcon, i.pgIcon, i.reactIcon, i.sassIcon, i.muiIcon],
    sourceCodeUrl: 'https://github.com/viniciusmuller/stackfetch',
  },
  {
    name: 'FlaskQuotes',
    description: 'A Flask web application for sharing personal quotes.',
    icons: [i.pythonIcon, i.flaskIcon, i.htmlIcon, i.cssIcon, i.bootstrapIcon],
    sourceCodeUrl: 'https://github.com/viniciusmuller/flaskquotes',
  },
  {
    name: 'Minimalpaste',
    description:
      'A minimalist pastebin service using only Python built-in modules.',
    icons: [i.pythonIcon, i.htmlIcon],
    sourceCodeUrl: 'https://github.com/viniciusmuller/minimalpaste',
  },
];

export default projects;
