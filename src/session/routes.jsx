import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Session from './components/Session';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Session} />
  </Router>
), document.getElementById('app'));
