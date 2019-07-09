const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('./db/schema');
const resolvers = require('./db/resolvers');
const db = require('./models/Affirmation');
const mongoose = require('mongoose');
let mongooseUri = '';
require('dotenv').config();
const CORS_URL = process.env.CORS_URL;

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: gql(schema),
  resolvers,
  context: { db }
});

server.applyMiddleware({ app });
app.use(express.static('app/public'));
// Construct a schema, using GraphQL schema language
app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);

if (process.env.ENV === undefined) {
  mongooseUri = process.env.MONGO_URI;
} else {
  mongooseUri = process.env.MONGO_URI;
}

mongoose
  .connect(mongooseUri)
  .then(() => {
    console.log(`MongoDB connected!`);
  })
  .catch(err => {
    console.log(err);
  });
