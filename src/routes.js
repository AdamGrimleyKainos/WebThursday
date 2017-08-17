/* global __API_DOMAIN__ */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/homePage/homePage';
import NotFoundPage from './components/notFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
