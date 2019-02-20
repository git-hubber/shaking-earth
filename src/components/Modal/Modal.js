/**
 * Modal Component
 * Shows specific details of the selected earthquake
 */

import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import moment from 'moment';

import * as actions from '../../store/actions';

const Modal = props => {
  const closeModal = () => {
    props.selectEarthquake(null);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  if (props.selectedEarthquake) {
    ReactModal.setAppElement('#root');

    const {
      mag,
      magType,
      place,
      time,
      tsunami,
    } = props.selectedEarthquake.properties;
    const [long, lat, depth] = props.selectedEarthquake.geometry.coordinates;

    const dateStr = moment(time).format('DD-MM-YYYY H:m:s');
    return (
      <ReactModal
        isOpen={props.selectedEarthquake !== null}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={place}
      >
        <div className='ui card'>
          <div className='content'>
            <div className='header'>{place}</div>
          </div>
          <div className='content'>
            <h4 className='ui sub header'>Details</h4>
            <div className='ui small feed'>
              <div>
                <span>Date / Time:</span>
                {dateStr}
              </div>
              <div>
                <span>Latitude:</span>
                {lat}
              </div>
              <div>
                <span>Longitude:</span>
                {long}
              </div>
              <div>
                <span>Depth:</span>
                {depth}km
              </div>

              <div>
                <span>Magnitude:</span>
                {mag}
                {magType}
              </div>
              <div>
                <span>Tsunami:</span>
                {tsunami}
              </div>
            </div>
            <div className='extra content'>
              <button className='ui red button' onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
  return null;
};

const mapStateToProps = ({ earthquakes }) => ({
  selectedEarthquake: earthquakes.selectedEarthquake,
});

export default connect(
  mapStateToProps,
  actions
)(Modal);
