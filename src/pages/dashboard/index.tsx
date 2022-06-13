import { Button } from '@mui/material'
import client from 'graphql/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { sendEmailForWarnedStudents } from 'utils/mail-sender'
import { withSSRAuth } from 'utils/with-ssr-auth'
import { CheckIfIsTeacherQuery, GetAllStudentFrequenciesQuery } from 'generated/graphql'
import { CHECK_IF_IS_TEACHER, GET_ALL_STUDENT_FREQUENCIES } from 'graphql/queries'
function Dashboard({
  isTeacher,
  missedInformation,
  emailsToSend,
  totalPeriodClasses
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //sendEmailForWarnedStudents(emailsToSend, totalPeriodClasses, 'teste.com')
  return <div>s</div>
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (_, userData) => {
  const { teachers } = await client.request<CheckIfIsTeacherQuery>(CHECK_IF_IS_TEACHER, { email: userData.email })

  const { studentFrequencies } = await client.request<GetAllStudentFrequenciesQuery>(GET_ALL_STUDENT_FREQUENCIES)

  const isTeacher = Boolean(teachers.length >= 0)

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
      name: item.nextUser?.email
    }
  })
  return {
    props: {
      isTeacher,
      missedInformation,
      emailsToSend,
      totalPeriodClasses
    }
  }
})
