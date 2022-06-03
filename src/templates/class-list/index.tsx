import { ArrowRight } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useAuth } from 'contexts/auth-context'
import * as S from './styles'
import ClassesTable from 'components/class-table'
type ClassListProps = {
  classes: Array<any>
}

function ClassListTemplate({ classes }: ClassListProps) {
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
      <ClassesTable classes={classes} />
    </Box>
  )
}

export default ClassListTemplate
