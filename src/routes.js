/* global __API_DOMAIN__ */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/homePage/homePage';
import NotFoundPage from './components/notFoundPage';
import Reports from './components/reportPage/reportPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="reports" component={Reports} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
