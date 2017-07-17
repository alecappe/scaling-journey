import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  const formSubmit = (e) => {
    e.preventDefault();
    props.postArticle(
      document.getElementsByTagName("input")[0].value,
      document.getElementsByTagName("input")[1].value);
  }
  return (
  <div className="Form">
    <form>
      <label htmlFor="title">Titolo:</label>
      <input type="text" name="title"/>
      <label htmlFor="content">Contenuto:</label>
      <input type="text" name="content"/>
      <button onClick={formSubmit}>Add</button>
    </form>
  </div>
)};

export default Form;
