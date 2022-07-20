import client from 'graphql/client'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import HomeTemplate from 'templates/home-template'
import { GET_HOMEPAGE_PROPS } from 'graphql/queries'
import { CourseHomepageQuery } from 'generated/graphql'

export default function Home({ homepage }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    title,
    slogan,
    subscriptionDate,
    possibleSubscriptions,
    valuePerMonth,
    courseClassPlataform,
    whatsappContact
  } = homepage
  return (
    <HomeTemplate
      title={title}
      slogan={slogan}
      teachers={homepage.teachers}
      subscriptionDate={subscriptionDate}
      possibleSubscriptions={possibleSubscriptions}
      valuePerMonth={valuePerMonth}
      courseClassPlataform={courseClassPlataform}
      whatsappContact={whatsappContact}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { homepages } = await client.request<CourseHomepageQuery>(GET_HOMEPAGE_PROPS)
  const homepage = homepages[0]
  return {
    props: {
      homepage
    }
  }
}
