import dayjs from 'dayjs'
import { useEffect } from 'react'
import { sendEmailForWarnedStudents } from 'utils/mail-sender'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, Button } from '@mui/material'
import * as S from './styles'
import Network from 'assets/lotties/network.json'
import Lottie from 'react-lottie'
import { useAuth } from 'contexts/auth-context'
import { useRouter } from 'next/router'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'

type DashboardTemplateProps = {
  emailsToSend: Array<any>
  totalPeriodClasses: number
  sendingDate?: string | Date
  missedInformation: Array<any>
}

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: Network,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
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
        console.error({ e })
      }
    }
    if (dayjs().isAfter(dayjs(sendingDate).add(7, 'd'))) checkIfIsToSendEmails()
  }, [])

  const headers = ['Nome', 'E-mail', 'Faltas', '% de faltas']

  const { logoutTheCurrentUser } = useAuth()
  const { push, back } = useRouter()

  const handleLogoutButton = async () => {
    try {
      await logoutTheCurrentUser()
      push('/')
    } catch (e) {
      return
    }
  }
  return (
    <>
      <S.NavbarWrapper>
        <Button onClick={() => back()} variant="outlined" startIcon={<ArrowLeft />}>
          Voltar
        </Button>
        <Button onClick={handleLogoutButton} variant="text" endIcon={<ArrowRight />}>
          Sair
        </Button>
      </S.NavbarWrapper>
      <S.ContentWrapper>
        <Stack spacing={3}>
          <Lottie options={defaultOptions} height={250} width={250} />
          <h4>Acompanhe as faltas desse ciclo</h4>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }}>
              <TableHead>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableCell key={index}>
                      <strong>{header}</strong>
                    </TableCell>
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

              <TableRow>
                <TableCell align="center" colSpan={4}>
                  Notificamos os alunos destacados sobre as faltas em:{' '}
                  <strong>{dayjs(sendingDate).format('DD/MM/YYYY')}</strong>
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Stack>
      </S.ContentWrapper>
    </>
  )
}

export default DashboardTemplate
