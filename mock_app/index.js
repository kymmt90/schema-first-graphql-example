const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const { addMockFunctionsToSchema, makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./type_defs');
const schema = makeExecutableSchema({ typeDefs });
const mocks = require('./mocks')
addMockFunctionsToSchema({ schema, mocks });

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.listen(3000, () => { console.log('GraphQL mock server is running!!1'); });
