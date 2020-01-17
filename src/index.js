import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './pages/App/index';
import About from './pages/About/index';
import TechnologyContainer from './pages/Technology/index';
import WebDevelopment from './pages/WebDevelopment/index';
import MobileDevelopment from './pages/MobileDevelopment/index';
import UiUxService from './pages/UiUx/index';
import ProjectManagementService from './pages/ProjectManagement/index';
import DevelopmentTeam from './pages/DevelopmentTeam/index';
import Services from './pages/Services/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/technology" component={TechnologyContainer} />
    <Route exact path="/about" component={About} />
    <Route exact path="/services/web-development" component={WebDevelopment} />
    <Route exact path="/services/mobile-development" component={MobileDevelopment} />
    <Route exact path="/services/ux-ui-design" component={UiUxService} />
    <Route exact path="/services/project-management" component={ProjectManagementService} />
    <Route exact path="/services/development-team" component={DevelopmentTeam} />
    <Route exact path="/services" component={Services} />
  </BrowserRouter>, document.getElementById('root'))

serviceWorker.unregister();
