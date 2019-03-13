/**
 * Redux - Earthquake Reducer
 *  No differences here when using Sagas vs Thunk
 */

import * as types from '../types.js';

const initialState = {
  allEarthquakes: [],
  filteredEarthquakes: [],
  selectedEarthquake: null,
};

const earthquakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EARTHQUAKES:
      return {
        ...state,
        allEarthquakes: action.earthquakes,
        filteredEarthquakes: action.earthquakes,
      };
    case types.SELECT_EARTHQUAKE:
      return {
        ...state,
        selectedEarthquake: action.earthquake,
      };
    case types.FILTER_EARTHQUAKES:
      return {
        ...state,
        filteredEarthquakes: action.filteredEarthquakes,
      };
    default:
      return state;
  }
};

export default earthquakeReducer;
