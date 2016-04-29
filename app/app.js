import document from 'global/document';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import History from './history/History';
import Login from './login/Login';
import Profile from './profile/Profile';
import Recommendations from './recommendations/Recommendations';
import Search from './search/Search';

const appContainer = document.getElementById('app');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Login}/>
    <Route path="/history" component={History}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/recommendations" component={Recommendations}/>
    <Route path="/search" component={Search}/>
  </Router>
), appContainer);
