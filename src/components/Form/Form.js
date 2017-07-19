import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          aid: '',
          title: '',
          content: '',
        };
        this.handleChangeTitle = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(who, what) {
        this.setState({[who]: what});
    }

    handleSubmit(event) {
        event.preventDefault();
        debugger
        this.props.postArticle({
          aid: "1231564564566",
          title: this.state.title,
          content: this.state.content,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Title:
                <input
                    type="text" name="title"
                    value={this.state.value}
                    onChange={(e) => this.handleChange('title', e.target.value)}/>
                Content:
                <input
                    type="text" name="content"
                    value={this.state.value}
                    onChange={(e) => this.handleChange('content', e.target.value)}/>
                <input type="submit" value="Add" />
            </form>
            )
    }
}

Form.propTypes = {
    postArticle: PropTypes.func.isRequired
}

export default Form;
