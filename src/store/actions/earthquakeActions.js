/**
 * Redux - Earthquake Action Creators
 */

import * as types from '../types.js';

import api from '../../helpers/axios-earthquakes';
import { earthquakeFilter } from '../../helpers/earthquakeFilter';

export const selectEarthquake = earthquake => {
  return {
    type: types.SELECT_EARTHQUAKE,
    earthquake,
  };
};

export const fetchEarthquakes = () => async dispatch => {
  const results = await api();
  const earthquakes = results.data.features;

  dispatch({
    type: types.FETCH_EARTHQUAKES,
    earthquakes,
  });
};

export const filterEarthquakes = bounds => (dispatch, getState) => {
  const { earthquakes } = getState();

  const filteredEarthquakes = earthquakes.allEarthquakes.filter(earthquake => {
    const point = {
      lat: earthquake.geometry.coordinates[1],
      long: earthquake.geometry.coordinates[0],
    };
    return earthquakeFilter(point, bounds);
  });

  dispatch({
    type: types.FILTER_EARTHQUAKES,
    filteredEarthquakes: filteredEarthquakes,
  });
};
