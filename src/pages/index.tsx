import client from 'graphql/client'
import { GetStaticProps } from 'next'
import HomeTemplate from 'templates/home-template'
import { GET_HOMEPAGE_PROPS } from 'graphql/queries'
import { CourseHomepageQuery } from 'generated/graphql'

//TODO: Add Schema variables to codegen.yml
//TODO: Type homepage props
//TODO: Use an fixed wave at the botton

export default function Home({ homepage }: any) {
  const { title, slogan, subscriptionDate, possibleSubscriptions } = homepage
  return (
    <HomeTemplate
      title={title}
      slogan={slogan}
      teachers={homepage.teachers}
      subscriptionDate={subscriptionDate}
      possibleSubscriptions={possibleSubscriptions}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { homepages } = await client.request<CourseHomepageQuery>(GET_HOMEPAGE_PROPS)
  const homepage = homepages[0]
  return {
    props: {
      homepage
    }
  }
}
