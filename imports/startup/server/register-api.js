import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, makeRemoteExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import GoalsSchema from '../../api/goals/Goal.graphql';
import GoalsResolvers from '../../api/goals/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UsersResolvers from '../../api/users/resolvers';

//hissss

const typeDefs = [
    GoalsSchema,
    ResolutionsSchema,
    UsersSchema
];


const resolvers = merge(
    GoalsResolvers,
    ResolutionsResolvers,
    UsersResolvers
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({schema});