import document from 'global/document';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { HistoryContainer } from './history/History';
import LoginContainer from './login/Login';
import { LoginReducer } from './login/LoginReducer';
import ProfileContainer from './profile/Profile';
import RecommendationsContainer from './recommendations/Recommendations';
import { SearchContainer } from './search/Search';

const reducer = combineReducers({
  user: LoginReducer
});

const store = createStore(reducer);

const appContainer = document.getElementById('app');

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LoginContainer}/>
      <Route path="/history" component={HistoryContainer}/>
      <Route path="/profile" component={ProfileContainer}/>
      <Route path="/recommendations" component={RecommendationsContainer}/>
      <Route path="/search" component={SearchContainer}/>
    </Router>
  </Provider>
), appContainer);
