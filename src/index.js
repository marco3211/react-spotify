import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import Albums from './components/albums';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/artist/:name/:id" component={Albums} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
