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

export default connect(
  mapStateToProps,
  actions
)(MainPage);
