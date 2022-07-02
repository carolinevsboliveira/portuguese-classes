import { CheckIfIsTeacherQuery, IndexedClassesQueryQuery } from 'generated/graphql'
import client from 'graphql/client'
import { CHECK_IF_IS_TEACHER, GET_INDEXED_CLASSES } from 'graphql/queries'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import ClassListTemplate from 'templates/class-list'
import { useRouter } from 'next/router'
import { withSSRAuth } from 'utils/with-ssr-auth'

const PAGE_SIZE = 4

//TODO: Transactional email to send the missing students
function ClassesList({
  classesConnection,
  studentFrequencies,
  page,
  isTeacher
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
        missedClasses={currentStudentFrequencies?.missedClasses}
        totalPeriodClasses={Number(currentStudentFrequencies?.totalPeriodClasses)}
        classes={classes}
        pageSize={PAGE_SIZE}
        page={page}
        count={count}
        handlePaginationChanges={handlePaginationChanges}
        isTeacher={isTeacher}
      />
    </>
  )
}

export default ClassesList

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx, userData) => {
  const { classesConnection, studentFrequencies } = await client.request<IndexedClassesQueryQuery>(
    GET_INDEXED_CLASSES,
    {
      first: PAGE_SIZE,
      offset: (Number(ctx.params?.page) - 1) * PAGE_SIZE,
      email: userData.email
    }
  )
  const { teachers } = await client.request<CheckIfIsTeacherQuery>(CHECK_IF_IS_TEACHER, { email: userData.email })

  return {
    props: {
      userEmail: userData.email,
      userId: userData.uid,
      classesConnection,
      page: parseInt(ctx.params?.page as string),
      studentFrequencies,
      isTeacher: teachers.length > 0
    }
  }
})
