import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import GoalForm from './GoalForm';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';
import { withApollo } from 'react-apollo';
import Goal from './resolutions/Goal';

import '../styles/scss/style.scss';
import '../styles/scss/buttons.scss';
import '../styles/scss/fields.scss';

import UserForm from './UserForm';


const App = ({ loading, resolutions, client, user }) => {
    if (loading) return null;
    
    return (
        <div className="container"> 
            <UserForm user={ user } client={ client } />
            {user._id && <ResolutionForm />}
            {user._id &&
                <ul className="list">
                    {resolutions.map(resolution => (
                        <li key={resolution._id}>
                            <span style={{
                                textDecoration: resolution.completed ? 'line-through' : 'none'
                            }}>{resolution.name}</span>
                            <ul>
                                    {resolution.goals.map(goal => (
                                        <Goal goal={goal} key={goal._id} />
                                    ))}
                            </ul>
                            <GoalForm resolutionId={resolution._id} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

const resolutionsQuery = gql `
query Resolutions {
    resolutions {
        _id
        name
        completed
        goals {
            _id
            name
            completed
        }
    }
    user {
        _id
    }
}
`;

export default graphql(resolutionsQuery, {
    props: ({ data }) => ({ ...data })
})(withApollo(App));
