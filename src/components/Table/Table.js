import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';


const Table = ((props) => {
  const rows = props.articles.map(
    a => {
      return (
        <tr key={a.aid}>
          <td>{a.title}</td>
          <td>{a.content}</td>
          <td>
          <button
            onClick={() => this.deleteArticle(props.aid)}>Delete</button>
          </td>
        </tr>
      );
    }
  )

  return (
    <table>
    <thead>
      <tr>
        <th>Titolo</th>
        <th>Contenuto</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
    </table>
  );
});


Table.propTypes = {
  articles: PropTypes.array.isRequired
}

export default Table;
