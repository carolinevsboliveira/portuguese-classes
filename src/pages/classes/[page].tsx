import { IndexedClassesQueryQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_INDEXED_CLASSES } from 'graphql/queries'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import ClassListTemplate from 'templates/class-list'
import { useRouter } from 'next/router'
import { withSSRAuth } from 'utils/with-ssr-auth'

function ClassesList({
  classesConnection,
  studentFrequencies,
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { replace } = useRouter()

  const handlePaginationChanges = (event: React.ChangeEvent<unknown>, value: number) => {
    replace(`/classes/${value}`)
  }
  const {
    aggregate: { count },
    classes
  } = classesConnection
  const currentStudentFrequencies = studentFrequencies[0]

  return (
    <>
      <ClassListTemplate
        missedClasses={currentStudentFrequencies.missedClasses}
        totalPeriodClasses={Number(currentStudentFrequencies.totalPeriodClasses)}
        classes={classes}
        page={page}
        count={count}
        handlePaginationChanges={handlePaginationChanges}
      />
    </>
  )
}

export default ClassesList

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx: GetServerSidePropsContext, userData) => {
  const { classesConnection, studentFrequencies } = await client.request<IndexedClassesQueryQuery>(
    GET_INDEXED_CLASSES,
    {
      offset: parseInt(ctx.params?.page as string) - 1,
      email: userData.email
    }
  )

  return {
    props: {
      userEmail: userData.email,
      userId: userData.uid,
      classesConnection,
      page: parseInt(ctx.params?.page as string),
      studentFrequencies
    }
  }
})
