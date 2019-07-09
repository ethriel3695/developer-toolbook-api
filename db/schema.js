const { gql } = require('apollo-server-express');

const typeDefs = `
  type Affirmation {
    title: String!
    statement: String!
    type: String!
    archive: Boolean
    dueDate: String!
    userId: String!
    created_At: String
  }
  type Query {
    getAffirmations(type: String, userId: String, archive: Boolean): 
    [Affirmation!]!
    getAffirmation(id: ID!): Affirmation
  }
`;

module.exports = typeDefs;

// type Mutation {
//   createAffirmation(title: String!, statement: String!, type: String!,
//       archive: Boolean, dueDate: String!,
//       userId: String!): Affirmation!
//   UpdateAffirmation(id: ID!, title: String, statement: String, archive: Boolean, dueDate: String,userId: String): [Int!]!
//   deleteAffirmation(id: ID!): Int!
// }
