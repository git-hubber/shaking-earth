import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as types from '../types.js';
import { fetchEarthquakesSaga, filterEarthquakesSaga } from './earthquakeSagas';

export function* watchEarthquakes() {
  /**
   * takeEvery - listen for certain action types -> and execute certain sagas when they occur:
   * takeLatest - take only the latest (cancels any previous saga that's still running)
   *
   * INITIATE_FETCH_EARTHQUAKES -> fetchEarthquakesSaga
   * OR
   * INITIATE_FILTER_EARTHQUAKES -> filterEarthquakesSaga
   *  */

  yield all([
    takeEvery(types.INITIATE_FETCH_EARTHQUAKES, fetchEarthquakesSaga),
    takeLatest(types.INITIATE_FILTER_EARTHQUAKES, filterEarthquakesSaga),
  ]);
}
