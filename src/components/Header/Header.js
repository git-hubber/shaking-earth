/**
 * Header Component
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <div className='ui pointing menu'>
      <NavLink className='item' exact to='/'>
        <i className='map icon' /> Main
      </NavLink>{' '}
      <NavLink className='item' to='/about'>
        <i className='info circle icon' /> About
      </NavLink>
    </div>
  );
};
