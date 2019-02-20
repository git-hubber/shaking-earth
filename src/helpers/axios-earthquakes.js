/**
 * Helper
 * Axios instance for the API url
 */

import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
});

export default instance;
