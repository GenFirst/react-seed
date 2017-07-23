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
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
// Our translated strings
import localeData from './translation/translation.json';

addLocaleData([...en, ...es]);

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData.en;
const language = 'en';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <ConnectedRouter history={history}>
        <div>
          <Route path="/" exact component={LoginContainer}/>
          <Route path="/dashboard" component={DashboardContainer}/>
        </div>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
