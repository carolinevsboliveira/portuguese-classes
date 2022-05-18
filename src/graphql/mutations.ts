import { gql } from 'graphql-request'

export const CREATE_NEW_STUDENT = gql`
  mutation NewStudent($name: String!, $email: String!) {
    createStudent(data: { name: $name, email: $email, active: false }) {
      id
    }
  }
`
