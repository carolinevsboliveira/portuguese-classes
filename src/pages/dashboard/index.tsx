import client from 'graphql/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { withSSRAuth } from 'utils/with-ssr-auth'
import {
  CheckIfIsTeacherQuery,
  GetAllStudentFrequenciesQuery,
  GetLastWarningDatesForStudentsQuery
} from 'generated/graphql'
import { CHECK_IF_IS_TEACHER, GET_ALL_STUDENT_FREQUENCIES, GET_LAST_WARNING_SEND_EMAIL } from 'graphql/queries'
import DashboardTemplate from 'templates/dashboard-template'
function Dashboard({
  missedInformation,
  emailsToSend,
  totalPeriodClasses,
  lastSendingDate
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('🚀 ~ file: index.tsx ~ line 20 ~ missedInformation', missedInformation)
  return (
    <DashboardTemplate
      emailsToSend={emailsToSend}
      totalPeriodClasses={totalPeriodClasses}
      sendingDate={lastSendingDate}
      missedInformation={missedInformation}
    />
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (_, userData) => {
  const { teachers } = await client.request<CheckIfIsTeacherQuery>(CHECK_IF_IS_TEACHER, { email: userData.email })

  const { studentFrequencies } = await client.request<GetAllStudentFrequenciesQuery>(GET_ALL_STUDENT_FREQUENCIES)

  const { lastSendWarningDates } = await client.request<GetLastWarningDatesForStudentsQuery>(
    GET_LAST_WARNING_SEND_EMAIL
  )

  const isTeacher = teachers.length >= 0
  const lastSendingDate = lastSendWarningDates[0].lastSendWarningDate
  const emailsToSend: Array<{ email: string; missedClass: number }> = []
  let totalPeriodClasses = 0

  const missedInformation = studentFrequencies.map((item) => {
    const missedClassesQuantity = item.missedClasses.length
    const missedClassesPercentagem = (missedClassesQuantity / item.totalPeriodClasses) * 100
    if (missedClassesPercentagem > 40) {
      emailsToSend.push({ email: item.nextUser?.email as string, missedClass: missedClassesQuantity })
      totalPeriodClasses = item.totalPeriodClasses
    }
    return {
      missedClassesQuantity,
      missedClassesPercentagem,
      isWarnedStudent: missedClassesPercentagem > 40,
      email: item.nextUser?.email,
      name: item.nextUser?.name
    }
  })
  return {
    props: {
      isTeacher,
      missedInformation,
      emailsToSend,
      totalPeriodClasses,
      lastSendingDate
    }
  }
})
