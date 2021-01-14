import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import LogInForm from './LogInForm';

export default class UserForm extends Component {
    state = {
        login: true
    }

    render() {
        const { user, client } = this.props;
        const { login } = this.state;

        if (user._id) {
            return (
                <button className='btn btn-logout' onClick={() => {
                    Meteor.logout();
                    client.resetStore();
                }}>Log Out</button>
            );
        }

        return (
             <div className='UserForm'>
                 <div className='btn-nav'>
                    <div style={{
                    left: login ? '0' : '110px'
                }} id="travel-btn"></div>
                    <buttnon type="button" onClick={() => this.setState({login: !login})} className="toggle-btn">Log In</buttnon>
                    <buttnon type="button" onClick={() => this.setState({login: !login})} className="toggle-btn">Sign Up</buttnon>
                </div>
                 {login ? (
                     <LogInForm client={client} />
                 ) : (
                    <RegisterForm client={client} />
                 )}
            </div>
        );
    }
};