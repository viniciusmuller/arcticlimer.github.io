import { BrowserRouter, Switch, Route } from 'react-router-dom';

import projects from '@data/projects';
import ProjectPage from '@projects/ProjectPage';
import Portfolio from './Portfolio';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        {projects.map((project) => (
          <Route key={project.name} path={project.portfolioUrl}>
            <ProjectPage {...project} />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
