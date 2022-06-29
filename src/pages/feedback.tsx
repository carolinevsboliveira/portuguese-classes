import type { GetServerSideProps } from 'next'

import client from '../graphql/client'
import { GET_ALL_TEACHERS } from '../graphql/queries'
import { UserData, withSSRAuth } from '../utils/with-ssr-auth'
import { GetTeachersQuery } from '../generated/graphql'
import FeedbackTemplate from '../templates/feedback-template'

interface FeedbackPageProps {
  teachers: GetTeachersQuery['teachers']
  userData: UserData
}

export default function FeedbackPage({ teachers, userData }: FeedbackPageProps) {
  return <FeedbackTemplate teachers={teachers} userData={userData} />
}

export const getServerSideProps: GetServerSideProps<FeedbackPageProps> = withSSRAuth(async (_, userData) => {
  const { teachers } = await client.request<GetTeachersQuery>(GET_ALL_TEACHERS)

  return {
    props: { teachers, userData }
  }
})
