import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import ProjectPage from './projects/ProjectPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/project" component={ProjectPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
