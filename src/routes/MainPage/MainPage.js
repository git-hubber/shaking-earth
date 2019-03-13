/**
 * MainPage Component/Route
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Map from '../../components/Map/Map';
import Modal from '../../components/Modal/Modal';
import SideBar from '../../components/SideBar/SideBar';
import classes from './MainPage.module.scss';
import * as types from '../../store/types.js';

const MainPage = props => {
  // useEffect( ....,[]) Similar to ComponentDidMount class based lifecycle method, but for functional component. New 'hooks' in React.
  useEffect(() => {
    props.fetchEarthquakes();
  }, []);

  const sideBarClick = earthquake => {
    props.selectEarthquake(earthquake);
  };

  return (
    <>
      <Modal />
      <div className={classes.MainPage}>
        <div className={classes.Toc}>
          <SideBar
            filteredEarthquakes={props.filteredEarthquakes}
            onClick={earthquake => sideBarClick(earthquake)}
          />
        </div>
        <div className={classes.Article}>
          <Map filterEarthquakes={bounds => props.filterEarthquakes(bounds)} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ earthquakes }) => ({
  filteredEarthquakes: earthquakes.filteredEarthquakes,
});

const mapDispatchToProps = dispatch => {
  return {
    /**
     * Dispatch an action, INITIATE_FETCH_EARTHQUAKES, which is being watched for by the Saga middleware
     *
     */
    fetchEarthquakes: () =>
      dispatch({ type: types.INITIATE_FETCH_EARTHQUAKES }),
    /**
     * Dispatch an action, INITIATE_FILTER_EARTHQUAKES, with payload (bounds), which is being watched for by the Saga middleware
     *
     */
    filterEarthquakes: bounds =>
      dispatch({ type: types.INITIATE_FILTER_EARTHQUAKES, bounds }),
    /**
     * Dispath a regular syncrounous (non-api) redux action
     */
    selectEarthquake: earthquake => {
      dispatch(actions.selectEarthquake(earthquake));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
