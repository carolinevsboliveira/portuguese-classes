import { gql } from 'graphql-request'

export const GET_CLASSES = gql`
  query MyQuery {
    classes {
      id
    }
  }
`
