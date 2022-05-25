import { gql } from 'graphql-request'

export const CREATE_NEW_STUDENT = gql`
  mutation NewStudent($email: String!) {
    createNextUser(data: { email: $email, active: false }) {
      id
    }
  }
`
