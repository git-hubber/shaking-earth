/**
 * AboutPage Component/Route
 */

import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1 className='ui header'>
        <i className='globe icon' />
        Shaking Earth
      </h1>
      <h2 className='ui header'>
        <i className='user secret icon' />
        by Martin Speedie
      </h2>
      <h3 className='ui header'>
        <i className='tasks icon' />
        Made using React, Redux, React Router, and more...
      </h3>
      <h3 className='ui header'>
        <a href='https://github.com'>
          <i className='linkify icon' />
          Code on Github
        </a>
      </h3>
      <h3 className='ui header'>
        <a href='https://earthquakes-1550580777585.firebaseapp.com/'>
          <i className='linkify icon' />
          Live on Firebase
        </a>
      </h3>
      <h3 className='ui header'>
        <a href='https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php'>
          <i className='linkify icon' />
          Data source
        </a>
      </h3>
    </div>
  );
};

export default AboutPage;
