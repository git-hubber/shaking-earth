/**
 * SideBar Component
 * Shows a list of the filtered earthquakes
 */

import React from 'react';
import classes from './SideBar.module.scss';

export default props => {
  const renderRow = earthquake => {
    return (
      <div
        className={[classes.Row, 'item'].join(' ')}
        key={earthquake.id}
        onClick={() => props.onClick(earthquake)}
      >
        <i className='angle double right icon' />
        {earthquake.properties.place}
      </div>
    );
  };

  return (
    <div className='ui vertical inverted menu'>
      <div className='item'>
        <div className='header'>Earthquakes As Per Map</div>
        <div className='menu'>
          {props.filteredEarthquakes.length ? (
            props.filteredEarthquakes.map(earthquake => renderRow(earthquake))
          ) : (
            <div className='item'>
              <i className='thumbs up icon' />
              <span>Yay, this has been an earthquake free zone :D</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
