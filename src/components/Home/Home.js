import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

import App from '../App';

const Home = (props) => (
  <div className="Home">
    <App/>
  </div>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
};

export default Home;
