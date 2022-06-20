import { ArrowRight } from '@mui/icons-material'
import { Box, Button, Pagination, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useAuth } from 'contexts/auth-context'
import Learning from 'assets/lotties/learning.json'
import TeacherWarning from 'assets/lotties/teacher-warning.json'
import * as S from './styles'
import ClassesTable from 'components/class-table'
import Lottie from 'react-lottie'
import MissedClassesMessage from 'components/missed-classes-messages'
type ClassListProps = {
  classes: Array<any>
  page: number
  count: number
  handlePaginationChanges: (event: React.ChangeEvent<unknown>, value: number) => void
  missedClasses: Array<{ id: string }>
  totalPeriodClasses: number
  isTeacher: boolean
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Learning,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function ClassListTemplate({
  classes,
  page,
  count,
  handlePaginationChanges,
  missedClasses,
  totalPeriodClasses,
  isTeacher
}: ClassListProps) {
  const { push } = useRouter()
  const { logoutTheCurrentUser } = useAuth()

  const handleLogoutButton = async () => {
    try {
      await logoutTheCurrentUser()
      push('/')
    } catch (e) {
      return
    }
  }
  const handleReportClick = () => {
    push('/dashboard')
  }
  const actionButton = () => {
    push('/classes/justification')
  }
  const missedClassesQuantity = missedClasses.length

  return (
    <Box>
      <S.NavBarWrapper>
        <Button variant="text" endIcon={<ArrowRight />} onClick={handleLogoutButton}>
          Sair
        </Button>
      </S.NavBarWrapper>

      <S.ContentWrapper>
        <Stack spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {!isTeacher ? (
            <S.LottieInfoWrapper>
              <Lottie options={defaultOptions} height={200} width={200} />
            </S.LottieInfoWrapper>
          ) : (
            <>
              <Lottie
                options={{ ...defaultOptions, animationData: TeacherWarning, loop: false }}
                height={150}
                width={150}
              />
              <Button variant="outlined" color="error" onClick={handleReportClick}>
                Acompanhe o relatório de faltas
              </Button>
            </>
          )}
          <Typography variant="h4" component="h4">
            Aulas cadastradas
          </Typography>
          <S.ClassListWrapper>
            <ClassesTable classes={classes} />
          </S.ClassListWrapper>
          <Pagination
            page={page}
            count={Math.ceil((count - 1) / 2)}
            variant="outlined"
            color="primary"
            onChange={handlePaginationChanges}
          />
          {!isTeacher && (
            <MissedClassesMessage
              hasMissedClasses={missedClassesQuantity > 0}
              missedClassesQuantity={missedClassesQuantity}
              totalClassesQuantity={totalPeriodClasses}
              actionButton={actionButton}
            />
          )}
        </Stack>
      </S.ContentWrapper>
    </Box>
  )
}

export default ClassListTemplate
