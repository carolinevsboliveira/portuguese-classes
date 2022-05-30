import { ArrowRight } from '@mui/icons-material'
import { Button, Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import { useAuth } from 'contexts/auth-context'
import * as S from './styles'
type ClassListProps = {
  selectedPage: number
  totalPage: number
}

function ClassListTemplate({ selectedPage, totalPage }: ClassListProps) {
  const { replace, push } = useRouter()
  const { logoutTheCurrentUser } = useAuth()

  const handleLogoutButton = async () => {
    try {
      await logoutTheCurrentUser()
      push('/')
    } catch (e) {
      return
    }
  }
  const handlePaginationChanges = (event: React.ChangeEvent<unknown>, value: number) => {
    replace(`/classes/${value}`)
  }
  return (
    <S.NavBarWrapper>
      <Button variant="text" endIcon={<ArrowRight />} onClick={handleLogoutButton}>
        Sair
      </Button>
      {/* <Pagination
        page={selectedPage}
        count={totalPage}
        variant="outlined"
        color="primary"
        onChange={handlePaginationChanges}
      /> */}
    </S.NavBarWrapper>
  )
}

export default ClassListTemplate
