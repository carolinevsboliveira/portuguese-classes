import Lottie from 'react-lottie'
import animationData from 'assets/lotties/registration-success.json'
import * as S from './styles'
import { Button } from '@mui/material'
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function RegistrationSuccessTemplate() {
  return (
    <S.SuccessPageWrapper>
      <Lottie options={defaultOptions} height={300} width={300} />
      <S.TextWrapper>
        <h1>Sua inscrição foi confirmada!</h1>
        <h2>Após essa etapa, sua inscrição será avaliada e em breve as aulas serão disponibilizadas.</h2>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <Button variant="contained">Ver mais conteúdos</Button>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button variant="contained">Ver mais conteúdos</Button>
      </S.ButtonWrapper>
    </S.SuccessPageWrapper>
  )
}

export default RegistrationSuccessTemplate
