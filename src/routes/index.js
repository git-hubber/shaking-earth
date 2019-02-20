/**
 * Setup App Routes
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import AboutPage from './AboutPage/AboutPage';
import Header from '../components/Header/Header';

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </>
    </Router>
  );
};
