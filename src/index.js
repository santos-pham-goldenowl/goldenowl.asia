import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './pages/App/index';
import About from './pages/About/index';
import TechnologyContainer from './pages/Technology/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/technology" component={TechnologyContainer} />
    </Fragment>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
