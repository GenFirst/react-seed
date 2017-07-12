import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import {store, history} from './reducers/init.stores';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import LoginContainer from './containers/login.container';
import DashboardContainer from './containers/dashboard.container';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" exact component={LoginContainer}/>
        <Route path="/dashboard" component={DashboardContainer}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
