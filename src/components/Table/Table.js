import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';


const articles = ((a) => {
  return (
    <tr key={a.aid}>
      <td>{a.title}</td>
      <td>{a.content}</td>
      <td>
        <img
          className="trash"
          alt="elimina"
          onClick={() => this.deleteArticle(a.aid)} />
      </td>
    </tr>
  );
});


articles.propTypes = {
  articles: PropTypes.array.isRequired
}

export default articles;
