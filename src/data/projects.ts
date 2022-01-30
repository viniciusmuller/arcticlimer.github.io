import { Project } from '@common/types';

// Images
import stackFetchLanding from '@assets/img/stackfetch_landing.png';
import websiteLanding from '@assets/img/website_landing.png';
import minimalPaste from '@assets/img/minimalpaste_landing.png';
import pureTypistApp from '@assets/img/puretypist_app.png';
import djanhoDracula from '@assets/img/djanho_dracula_generated.png';
import isotopeGeneratedTerrain from '@assets/img/isotope_generated_terrain.png';

// Icons
import i from '@data/icons';

const projects: Project[] = [
  {
    name: 'Algorithms-data-structures',
    description:
      'Personal implementation of different algorithms and data structures.',
    landingImage: '',
    challenges: [
      'Understanding and implementing different algorithms and data structures',
    ],
    icons: [i.cIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/algorithms-data-structures',
  },
  {
    name: 'Djanho',
    description:
      'A Rust CLI tool to convert VSCode themes to (Neo)Vim colorschemes.',
    landingImage: djanhoDracula,
    challenges: [
      'Creating a command-line interface using clap',
      'Deserializing JSON data with serde',
    ],
    icons: [i.rustIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/djanho',
  },
  {
    name: 'Isotope',
    description: 'Work with Rust noise functions using Elixir NIFs.',
    landingImage: isotopeGeneratedTerrain,
    challenges: [
      'Writing and building documentation using ExDoc',
      'Publishing a package to hex.pm',
      'Writing native implemented functions (NIFs) with Rust',
      'Integrating Elixir with Rust libraries',
      'Achieving high test coverage and ensuring it using coveralls.io',
    ],
    icons: [i.elixirIcon, i.rustIcon],
    sourceCodeUrl: 'https://github.com/phiriq/isotope',
  },
  {
    name: 'Puretypist',
    description:
      'Simple web typing tutor software written in Javascript and HTML.',
    landingImage: pureTypistApp,
    challenges: [
      'Handling the DOM using events',
      'Creating a simple yet useful interface',
      'Deploying page using GitHub Pages',
    ],
    icons: [i.jsIcon, i.htmlIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/puretypist',
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
  //   sourceCodeUrl: 'https://github.com/arcticlimer/catwiki',
  // },
  {
    name: 'This website',
    description:
      'My personal website built with React and hosted at GitHub pages.',
    landingImage: websiteLanding,
    challenges: [
      'Deploying page using GitHub Pages',
      'Designing a responsive and accessible website',
      'Building a clean and modern user interface using Material UI',
    ],
    icons: [i.tsIcon, i.reactIcon, i.muiIcon, i.styledComponentsIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/arcticlimer.github.io',
  },
  {
    // TODO: Github Oauth
    name: 'StackFetch',
    description:
      'A platform for users share their technology stack and GitHub profiles with the world.',
    landingImage: stackFetchLanding,
    challenges: [
      'Designing a responsive webpage',
      'Modelling data using an ORM',
    ],
    icons: [i.tsIcon, i.pgIcon, i.reactIcon, i.sassIcon, i.muiIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/stackfetch',
  },
  {
    name: 'FlaskQuotes',
    description: 'A Flask web application for sharing personal quotes.',
    landingImage:
      'https://github.com/arcticlimer/flaskquotes/raw/master/img/main.png',
    challenges: [
      'Designing a responsive webpage',
      'Modelling data using an ORM',
      'Using the Jinja template engine',
    ],
    icons: [i.pythonIcon, i.flaskIcon, i.htmlIcon, i.cssIcon, i.bootstrapIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/flaskquotes',
  },
  {
    name: 'Minimalpaste',
    description:
      'A minimalist pastebin service using only Python built-in modules.',
    landingImage: minimalPaste,
    challenges: [
      'Creating a multithreaded server using Python 3',
      'Creating functional web application using only python built-in modules',
      'Managing application data with SQlite',
      'Writing integration tests',
    ],
    icons: [i.pythonIcon, i.htmlIcon],
    sourceCodeUrl: 'https://github.com/arcticlimer/minimalpaste',
  },
];

export default projects;
