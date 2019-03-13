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
  }); // Dispatch an action with payload (earthquakes)
}

export function* filterEarthquakesSaga({ bounds }) {
  const { earthquakes } = yield select(); //get the application state

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
    filteredEarthquakes: filteredEarthquakes, // Dispatch an action with payload (earthquakes)
  });
}
