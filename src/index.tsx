import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/globalStyles';

import Portfolio from './Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root'),
);
