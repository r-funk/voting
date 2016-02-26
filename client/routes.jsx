import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'container/App';
import IdeasList from 'container/IdeasList';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IdeasList} />
  </Route>
);

export default routes;
