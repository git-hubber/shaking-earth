/**
 * Redux - Earthquake Action Creators
 * Redux Saga: No side-effects in the action creators
 */

import * as types from '../types.js';

// import api from '../../helpers/axios-earthquakes';
// import { earthquakeFilter } from '../../helpers/earthquakeFilter';

export const selectEarthquake = earthquake => {
  return {
    type: types.SELECT_EARTHQUAKE,
    earthquake,
  };
};

/**
 * Using redux thunk
 */
// export const fetchEarthquakes = () => async dispatch => {
//   const results = await api();
//   const earthquakes = results.data.features;

//   dispatch({
//     type: types.FETCH_EARTHQUAKES,
//     earthquakes,
//   }); // Dispatch action with payload (earthquakes)
// };

/**
 * Using redux thunk
 */
// export const filterEarthquakes = bounds => (dispatch, getState) => {
//   const { earthquakes } = getState();

//   const filteredEarthquakes = earthquakes.allEarthquakes.filter(earthquake => {
//     const point = {
//       lat: earthquake.geometry.coordinates[1],
//       long: earthquake.geometry.coordinates[0],
//     };
//     return earthquakeFilter(point, bounds);
//   });

//   dispatch({
//     type: types.FILTER_EARTHQUAKES,
//     filteredEarthquakes: filteredEarthquakes,
//   });
// };
