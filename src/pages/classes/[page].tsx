import { IndexedClassesQueryQuery } from 'generated/graphql'
import client from 'graphql/client'
import { GET_INDEXED_CLASSES } from 'graphql/queries'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import ClassListTemplate from 'templates/class-list'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import admin from 'firebase-config/admin'

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

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await admin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token
    const { classesConnection, studentFrequencies } = await client.request<IndexedClassesQueryQuery>(
      GET_INDEXED_CLASSES,
      {
        offset: parseInt(ctx.params?.page as string) - 1,
        email: email
      }
    )

    return {
      props: {
        userEmail: email,
        userId: uid,
        classesConnection,
        page: parseInt(ctx.params?.page as string),
        studentFrequencies
      }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {} as never
    }
  }
}
