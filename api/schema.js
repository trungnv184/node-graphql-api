const { gql } = require("apollo-server");

const typeDefs = gql`
  type Post {
    id: String!
    title: String!
    content: String
    createdAt: Int
  }

  type User {
    id: String!
    name: String!
  }

  input PostInput {
    id: String
    title: String
  }

  input UserInput {
    id: String!
  }

  type Query {
    posts(input: PostInput): [Post]!
    user(input: UserInput): User
  }
`;

module.exports = typeDefs;
