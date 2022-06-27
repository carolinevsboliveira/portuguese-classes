import { FindClassesWithJustiQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_MISSED_CLASSES_RELATIONSHIPS } from 'graphql/queries'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'
import JustificationTemplate from 'templates/justification-template'
import { withSSRAuth } from 'utils/with-ssr-auth'

function Justification({
  missedClasses,
  email,
  missedClassesJustifications
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <JustificationTemplate
      missedClasses={missedClasses}
      email={email}
      missedClassesJustifications={missedClassesJustifications}
    />
  )
}

export default Justification

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (_, userData) => {
  const { studentFrequencies, missedClassesJustifications } = await client.request<FindClassesWithJustiQuery>(
    GET_MISSED_CLASSES_RELATIONSHIPS,
    {
      email: userData.email
    }
  )

  const missedClasses = studentFrequencies[0].missedClasses
  const missedClassesAlreadyJustified = missedClassesJustifications.flatMap((item) => item.class?.id)
  const classAlreadyJustifiedSet = new Set(missedClassesAlreadyJustified)

  const availableMissedClasses = missedClasses.filter((currentClass) => {
    return !classAlreadyJustifiedSet.has(currentClass.id)
  })

  return {
    props: {
      missedClasses: availableMissedClasses,
      email: userData.email,
      missedClassesJustifications
    }
  }
})
