import { ArrowRight } from '@mui/icons-material'
import { Box, Button, Pagination, Stack } from '@mui/material'
import { useRouter } from 'next/router'
import { useAuth } from 'contexts/auth-context'
import Learning from 'assets/lotties/learning.json'
import * as S from './styles'
import ClassesTable from 'components/class-table'
import Lottie from 'react-lottie'
type ClassListProps = {
  classes: Array<any>
  page: number
  count: number
  handlePaginationChanges: (event: React.ChangeEvent<unknown>, value: number) => void
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Learning,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
function ClassListTemplate({ classes, page, count, handlePaginationChanges }: ClassListProps) {
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

  return (
    <Box>
      <S.NavBarWrapper>
        <Button variant="text" endIcon={<ArrowRight />} onClick={handleLogoutButton}>
          Sair
        </Button>
      </S.NavBarWrapper>

      <S.ContentWrapper>
        <Stack spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <S.LottieInfoWrapper>
            <Lottie options={defaultOptions} height={200} width={200} />
          </S.LottieInfoWrapper>

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
        </Stack>
      </S.ContentWrapper>
    </Box>
  )
}

export default ClassListTemplate
