import { gql } from 'apollo-server-micro'

// Describe our GraphQL schema with type definitions
export const typeDefs = gql`
  type Query {
    """
    A sample query to verify that our GraphQL server is online.

    It does not return an object; only a friendly greeting with the current time displayed.
    """
    hello: String!,
  }
`
