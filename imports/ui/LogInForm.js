import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withApollo } from 'react-apollo';


export default class LoginForm extends Component {
    login = e => {
        e.preventDefault();

        Meteor.loginWithPassword(this.email.value, this.password.value,
        error => {
            if (!error) {
                this.props.client.resetStore();
            }
            console.log(error);
        });
    };

    render() {
        return (
            <form onSubmit={this.login}>
            <input className="form-control" placeholder="E-mail" type="email" ref={(input) => (this.email = input)} />
            <input className="form-control" placeholder="Password" type="password" ref={(input) => (this.password = input)} />
            <button type="submit" className="btn btn-success">Log In</button>
        </form>
        );
    }
}
