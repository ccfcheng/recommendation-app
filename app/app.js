import document from 'global/document';
import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import HistoryContainer from './history/History';
import HomeContainer from './home/Home';
import LoginContainer from './login/Login';
import LoginReducer from './login/LoginReducer';
import ProfileContainer from './profile/Profile';
import RecommendationsContainer from './recommendations/Recommendations';
import SearchContainer from './search/Search';
import SearchReducer from './search/SearchReducer';
import YelpReducer from './yelp/YelpReducer';
import createLogger from 'redux-logger';

injectTapEventPlugin();

const reducer = combineReducers({
  user: LoginReducer,
  yelp: YelpReducer,
  search: SearchReducer,
});

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger));

const appContainer = document.getElementById('app');

render((
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>
        <Route path="/" component={LoginContainer}/>
        <Route path="/home" component={HomeContainer}>
          <IndexRoute component={SearchContainer}/>
          <Route path="/history" component={HistoryContainer}/>
          <Route path="/profile" component={ProfileContainer}/>
          <Route path="/recommendations" component={RecommendationsContainer}/>
          <Route path="/search" component={SearchContainer}/>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
), appContainer);
