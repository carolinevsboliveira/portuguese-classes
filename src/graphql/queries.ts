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
      initialCurrentCourseDate
      possibleSubscriptions
      title
      slogan
      teachers {
        name
        about {
          html
        }
        profilePhoto {
          url
        }
        scholarExperience
      }
      valuePerMonth
      finalCourseDate
    }
  }
`
