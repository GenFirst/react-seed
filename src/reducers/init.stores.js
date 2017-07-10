import { createStore, applyMiddleware } from 'redux';
import app from './all.stores';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export const history = createHistory();
const routingMiddleware = routerMiddleware(history);
const logger = createLogger();

export const store = createStore(app, applyMiddleware(routingMiddleware, thunk, logger));