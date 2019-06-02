import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './Main/Main';
import Navigation from './Navigation/Navigation';
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route component={Navigation} />
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path="/about" component={App} /> */}
      {/* <Route path="/contact" component={App} /> */}
      {/* when none of the above match, <NoMatch> will be rendered */}
      {/* <Route component={App} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
