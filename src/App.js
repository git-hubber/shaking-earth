/**
 * Main App Component
 */

import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from './store/reducers';
import Routes from './routes';
import classes from './App.module.scss';
import { watchEarthquakes } from './store/sagas';

const App = () => {
  /**
   * Setup redux and apply async middleware (redux saga)
   */

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(watchEarthquakes); // Start watching

  return (
    <Provider store={store}>
      <div className={[classes.App, 'ui container'].join(' ')}>
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
