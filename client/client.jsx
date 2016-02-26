import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import configureStore from './redux/configureStore';
import initialState from './redux/initialState';

const store = configureStore(initialState);
const history = hashHistory;

// Can go away with react 1.0 release
// see https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
  (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  ),
  document.getElementById('voting')
);
