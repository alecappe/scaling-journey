import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './App.css';
import articles from '../Table'

const App = (props) => (
  <table>
    <thead>
      <tr>
        <th>Titolo</th>
        <th>Contenuto</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {articles}
    </tbody>
  </table>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
