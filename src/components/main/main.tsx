import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import * as S from './styles'
const Main = () => {
  const { push } = useRouter()
  return (
    <S.Wrapper>
      <Button variant="contained" onClick={() => push('/login')}>
        HEY
      </Button>
    </S.Wrapper>
  )
}

export default Main
