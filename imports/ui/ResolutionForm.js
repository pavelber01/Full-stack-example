import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql `
    mutation createResolution($name: String!) {
        createResolution(name: $name) {
            _id
        }
    }
`;
class ResolutionForm extends Component {
    state = {
        error: null
    }

    submitForm = () => {
        this.props.createResolution({
            variables: {
                name: this.name.value
            }
        }).catch(error => {
            console.log(error);
            this.setState({error: error.message});
        });
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <button className="btn btn-submit" onClick={this.submitForm}>+</button>
                <input className="form-resolution" type="text" ref={(input) => (this.name = input)} />
            </div>
        );
    }
}

export default graphql(createResolution, {
    name: "createResolution",
    options: {
        refetchQueries: ['Resolutions']
    }
})(ResolutionForm);