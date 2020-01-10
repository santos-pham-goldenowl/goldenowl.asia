import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './pages/App/index';
import About from './pages/About/index';
import WebDevelopment from './pages/WebDevelopment/index';
import MobileDevelopment from './pages/MobileDevelopment/index';
import UiUxService from './pages/UiUx/index';
import ProjectManagementService from './pages/ProjectManagement/index';
import DevelopmentTeam from './pages/DevelopmentTeam/index';
import Services from './pages/Services/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services/web-development" component={WebDevelopment} />
      <Route exact path="/services/mobile-development" component={MobileDevelopment} />
      <Route exact path="/services/ux-ui" component={UiUxService} />
      <Route exact path="/services/project-management" component={ProjectManagementService} />
      <Route exact path="/services/development-team" component={DevelopmentTeam} />
      <Route exact path="/services" component={Services} />
    </Fragment>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
