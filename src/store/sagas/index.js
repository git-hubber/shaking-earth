import { takeEvery, all } from 'redux-saga/effects';

import * as types from '../types.js';
import { fetchEarthquakesSaga, filterEarthquakesSaga } from './earthquakeSagas';

export function* watchEarthquakes() {
  /**
   * takeEvery - listen for certain action types -> and execute certain sagas when they occur:
   *
   * INITIATE_FETCH_EARTHQUAKES -> fetchEarthquakesSaga
   * OR
   * INITIATE_FILTER_EARTHQUAKES -> filterEarthquakesSaga
   *  */

  yield all([
    takeEvery(types.INITIATE_FETCH_EARTHQUAKES, fetchEarthquakesSaga),
    takeEvery(types.INITIATE_FILTER_EARTHQUAKES, filterEarthquakesSaga),
  ]);
}
