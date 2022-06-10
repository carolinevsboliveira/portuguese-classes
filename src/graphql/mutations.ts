import { gql } from 'graphql-request'

export const CREATE_NEW_STUDENT = gql`
  mutation NewStudent($email: String!, $name: String!, $surname: String) {
    createNextUser(data: { email: $email, active: false, name: $name, surname: $surname }) {
      name
      surname
      email
    }
  }
`
export const CREATE_NEW_JUSTIFYING = gql`
  mutation CreateJustification($classId: ID!, $justification: String, $nextUserEmail: String!) {
    createMissedClassesJustification(
      data: {
        class: { connect: { id: $classId } }
        justification: $justification
        nextUser: { connect: { email: $nextUserEmail } }
      }
    ) {
      id
    }
  }
`
