import { GitHub } from '@mui/icons-material'
import { Button } from '@mui/material'
import * as S from './styles'
function DevelopedByLayout() {
  return (
    <S.FixedFooter>
      <Button
        onClick={() => window.open(new URL('https://github.com/carolinevsboliveira'), '_blank')}
        endIcon={<GitHub />}
        variant="text"
        sx={{ backgroundColor: '#fff' }}
      >
        Developed by Caroline
      </Button>
    </S.FixedFooter>
  )
}

export default DevelopedByLayout
