import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Portfolio from './Portfolio';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
