import dayjs from 'dayjs'
import { useEffect } from 'react'
import { sendEmailForWarnedStudents } from 'utils/mail-sender'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
type DashboardTemplateProps = {
  emailsToSend: Array<any>
  totalPeriodClasses: number
  sendingDate?: string | Date
  missedInformation: Array<any>
}

function DashboardTemplate({
  emailsToSend,
  totalPeriodClasses,
  sendingDate,
  missedInformation
}: DashboardTemplateProps) {
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
    if (dayjs().isAfter(dayjs(sendingDate).add(7, 'd'))) checkIfIsToSendEmails()
  }, [])
  console.log()

  const headers = ['Nome', 'E-mail', 'Faltas', '% de faltas']

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {missedInformation.map((missed, index) => (
            <TableRow key={index} sx={{ backgroundColor: missed.isWarnedStudent ? '#f7c59f' : '#fff' }}>
              <TableCell align="left">{missed.name}</TableCell>
              <TableCell align="left">{missed.email}</TableCell>
              <TableCell align="left">{missed.missedClassesQuantity}</TableCell>
              <TableCell align="left">{Number(missed.missedClassesPercentagem).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DashboardTemplate
