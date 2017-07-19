import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

import App from '../App';
import Table from '../Table';
import Form from '../Form';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchArticles();
    }
    render(){
        return(
            <div className="Home">
                <Table
                    articles={this.props.articles}
                    deleteArticle={this.props.deleteArticle}/>
                <hr/>
                <Form/>
            </div>
        )
    }
}

Home.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Home;
