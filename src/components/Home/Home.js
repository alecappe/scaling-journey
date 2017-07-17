import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

import App from '../App';
import Table from '../Table';
import Form from '../Form';

const Home = (props) => (
  <div className="Home">
    <Table articles={[props.articles]}/>
    <Form/>
  </div>
);

Home.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Home;
