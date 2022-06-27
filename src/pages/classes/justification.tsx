import { FindClassesWithJustiQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_MISSED_CLASSES_RELATIONSHIPS } from 'graphql/queries'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'
import JustificationTemplate from 'templates/justification-template'
import { withSSRAuth } from 'utils/with-ssr-auth'

function Justification({ missedClasses, email }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <JustificationTemplate missedClasses={missedClasses} email={email} />
}

export default Justification

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (_, userData) => {
  const { studentFrequencies } = await client.request<FindClassesWithJustiQuery>(GET_MISSED_CLASSES_RELATIONSHIPS, {
    email: userData.email
  })

  const missedClasses = studentFrequencies[0].missedClasses
  return {
    props: {
      missedClasses,
      email: userData.email
    }
  }
})
