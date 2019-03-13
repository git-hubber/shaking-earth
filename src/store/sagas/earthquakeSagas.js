/**
 * Side-effects (async code) goes here
 */

import { select, put } from 'redux-saga/effects';

import * as types from '../types.js';
import api from '../../helpers/axios-earthquakes';
import { earthquakeFilter } from '../../helpers/earthquakeFilter';

export function* fetchEarthquakesSaga() {
  // Javascript ES6 Generator function / Saga
  const results = yield api(); //Yield and await the api response (async)
  const earthquakes = results.data.features;

  yield put({
    type: types.FETCH_EARTHQUAKES,
    earthquakes,
  }); // Dispatch a regular redux action with payload (earthquakes)
}

export function* filterEarthquakesSaga({ bounds }) {
  const { earthquakes } = yield select(); //get the application state

  /**
   * Do some magical earthquake filtering of allEarthquakes state,
   * based upon the bounds that are passed in
   */

  const filteredEarthquakes = yield earthquakes.allEarthquakes.filter(
    earthquake => {
      const point = {
        lat: earthquake.geometry.coordinates[1],
        long: earthquake.geometry.coordinates[0],
      };
      return earthquakeFilter(point, bounds);
    }
  );

  yield put({
    type: types.FILTER_EARTHQUAKES,
    filteredEarthquakes,
  }); // Dispatch a regular redux action with payload (filteredEarthquakes)
}
