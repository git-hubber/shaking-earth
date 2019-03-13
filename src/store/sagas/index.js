import { takeEvery } from 'redux-saga/effects';

import * as types from '../types.js';
import { fetchEarthquakesSaga, filterEarthquakesSaga } from './earthquakeSagas';

export function* watchEarthquakes() {
  /**
   * takeEvery - listen for certain action types -> do something when they occur:
   *
   * 'INITIATE_FETCH_EARTHQUAKES' -> fetchEarthquakesSaga
   * OR
   * 'INITIATE_FILTER_EARTHQUAKES' -> filterEarthquakesSaga
   *  */

  yield takeEvery(types.INITIATE_FETCH_EARTHQUAKES, fetchEarthquakesSaga);
  yield takeEvery(types.INITIATE_FILTER_EARTHQUAKES, filterEarthquakesSaga);
}
