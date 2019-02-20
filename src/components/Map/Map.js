/**
 * Map Component
 * Shows the worldmap
 */

import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

import MapMarkers from './MapMarkers';

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  /**
   * When the map is idle (after zoom/pan) - refilter the earthquakes
   */

  onMapIdle = () => {
    let ne = this.map.getBounds().getNorthEast();
    let sw = this.map.getBounds().getSouthWest();

    const bounds = {
      NE: {
        long: ne.lng(),
        lat: ne.lat(),
      },
      SW: {
        long: sw.lng(),
        lat: sw.lat(),
      },
    };
    this.props.filterEarthquakes(bounds);
  };

  render() {
    return (
      <>
        <GoogleMap
          ref={map => {
            this.map = map;
          }}
          defaultZoom={2}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
          onIdle={this.onMapIdle}
        >
          <MapMarkers />
        </GoogleMap>
        <div>
          <i className='question circle outline icon' />
          Zoom in or pan the map to filter the earthquakes
        </div>
        <div>
          <i className='question circle outline icon' />
          Click on a map marker to find out more details about the earthquake
        </div>
      </>
    );
  }
}

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD-u11Qt6AC8fpfG_NEkzLxW_QHXl5-glg',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%`, width: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(Map);
