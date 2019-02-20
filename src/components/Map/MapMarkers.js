/**
 * MapMarkers Component
 * Shows markers for the currently visible (filtered) earthquakes
 */

import React from 'react';
import { connect } from 'react-redux';
import { Marker } from 'react-google-maps';

import * as actions from '../../store/actions';

const MapMarkers = props => {
  const renderMarker = earthquake => {
    const lat = earthquake.geometry.coordinates[1];
    const lng = earthquake.geometry.coordinates[0];
    const { id } = earthquake;
    return (
      <Marker
        key={id}
        position={{ lat, lng }}
        onClick={() => props.selectEarthquake(earthquake)}
      />
    );
  };

  return props.earthquakes.map(earthquake => renderMarker(earthquake));
};

const mapStateToProps = ({ earthquakes }) => {
  return {
    earthquakes: earthquakes.filteredEarthquakes,
  };
};

export default connect(
  mapStateToProps,
  actions
)(MapMarkers);
