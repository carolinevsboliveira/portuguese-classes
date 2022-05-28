import Lottie from 'react-lottie'
import animationData from 'assets/lotties/registration-success.json'
import * as S from './styles'
import { Button, Card, Stack } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { useRouter } from 'next/router'
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function RegistrationSuccessTemplate() {
  const { push } = useRouter()
  return (
    <S.SuccessPageWrapper>
      <Card>
        <S.ContentWrapper>
          <Stack spacing={2}>
            <Lottie options={defaultOptions} height={300} width={300} />
            <S.TextWrapper>
              <h1>Sua inscrição foi confirmada!</h1>
              <h2>
                Após essa etapa, sua inscrição será avaliada e em breve as aulas e materiais serão disponibilizados.
              </h2>
            </S.TextWrapper>
            <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" onClick={() => push('/')} startIcon={<ArrowBack />}>
                Página principal
              </Button>
              <Button variant="contained" onClick={() => push('/posts')} endIcon={<ArrowForward />}>
                Ver mais conteúdos
              </Button>
            </Stack>
          </Stack>
        </S.ContentWrapper>
      </Card>
    </S.SuccessPageWrapper>
  )
}

export default RegistrationSuccessTemplate
