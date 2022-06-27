import { gql } from 'graphql-request'

export const GET_CLASSES = gql`
  query MyQuery {
    classes {
      id
    }
  }
`

export const GET_HOMEPAGE_PROPS = gql`
  query CourseHomepage {
    homepages(last: 1) {
      id
      courseClassPlataform
      subscriptionDate {
        initialDate
        finalDate
      }
      possibleSubscriptions
      title
      slogan
      teachers {
        name
        id
        about {
          html
        }
        profilePhoto {
          url
        }
        scholarExperience
      }
      valuePerMonth
      whatsappContact {
        phone
        link
      }
    }
  }
`
export const GET_INDEXED_CLASSES = gql`
  query indexedClassesQuery($offset: Int!, $email: String!, $first: Int!) {
    classesConnection(first: $first, skip: $offset) {
      aggregate {
        count
      }
      classes: edges {
        node {
          id
          meetLink
          teachers {
            id
            name
          }
          name
          shortDescription
          scheduledTime
          image {
            url
          }
          avaliableSlides {
            url
          }
        }
      }
      pageInfo {
        hasNextPage
        pageSize
      }
    }
    studentFrequencies(where: { nextUser: { email: $email } }) {
      missedClasses {
        id
      }
      totalPeriodClasses
    }
  }
`
export const GET_IF_USER_IS_AUTHORIZED = gql`
  query VerifyAuthorization($email: String!) {
    nextUser(where: { email: $email }) {
      active
    }
  }
`

export const CHECK_IF_IS_TEACHER = gql`
  query CheckIfIsTeacher($email: String!) {
    teachers(where: { nextUser: { email: $email } }) {
      user: nextUser {
        email
      }
    }
  }
`

export const GET_ALL_STUDENT_FREQUENCIES = gql`
  query GetAllStudentFrequencies {
    studentFrequencies {
      totalPeriodClasses
      missedClasses {
        id
      }
      nextUser {
        id
        name
        surname
        email
      }
    }
  }
`

export const GET_LAST_WARNING_SEND_EMAIL = gql`
  query GetLastWarningDatesForStudents {
    lastSendWarningDates(orderBy: createdAt_DESC) {
      lastSendWarningDate
    }
  }
`

export const GET_MISSED_CLASSES_RELATIONSHIPS = gql`
  query FindClassesWithJusti($email: String!) {
    missedClassesJustifications(where: { nextUser: { email: $email } }) {
      class {
        id
        name
        shortDescription
        scheduledTime
      }
      student: nextUser {
        id
        name
        email
      }
    }
    studentFrequencies(where: { nextUser: { email: $email } }) {
      missedClasses {
        id
        name
        scheduledTime
        shortDescription
      }
      nextUser {
        email
      }
    }
  }
`
