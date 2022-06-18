import dayjs from 'dayjs'
import { useEffect } from 'react'
import { sendEmailForWarnedStudents } from 'utils/mail-sender'
type DashboardTemplateProps = {
  emailsToSend: Array<any>
  totalPeriodClasses: number
}
function DashboardTemplate({ emailsToSend, totalPeriodClasses }: DashboardTemplateProps) {
  useEffect(() => {
    const checkIfIsToSendEmails = async () => {
      try {
        sendEmailForWarnedStudents(emailsToSend, totalPeriodClasses, 'teste.com')
        const response = await fetch('/api/warning', {
          method: 'POST',
          body: JSON.stringify({ date: dayjs().startOf('d').toDate() })
        })
        if (!response.ok) throw new Error('Algo deu errado com a sua inscrição.')
      } catch (e) {
        console.log({ e })
      }
    }
    checkIfIsToSendEmails()
  }, [])
  return <div>HEY THERE</div>
}

export default DashboardTemplate
