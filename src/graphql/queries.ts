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
  query indexedClassesQuery($offset: Int!) {
    classesConnection(first: 4, skip: $offset) {
      aggregate {
        count
      }
      classes: edges {
        node {
          id
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
  }
`
