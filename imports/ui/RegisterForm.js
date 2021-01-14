import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends Component {
    registerUser = e => {
        e.preventDefault();

        Accounts.createUser({
            email: this.email.value,
            password: this.password.value
        }, error => {
            if (!error) {
                this.props.client.resetStore();
            }
            console.log(error);
        });
    };

    render() {
        return (
            <form onSubmit={this.registerUser}>
            <input className="form-control" placeholder="E-mail" type="email" ref={(input) => (this.email = input)} />
            <input className="form-control" placeholder="Password" type="password" ref={(input) => (this.password = input)} />
            <button className="btn btn-success" type="submit">Sign Up</button>
        </form>
        );
    }
}