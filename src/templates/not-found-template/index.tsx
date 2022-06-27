import { Button, Grid, Paper } from '@mui/material'
import Lottie from 'react-lottie'
import defaultLottieOptionsBuilder from 'utils/lottie-options-builder'
import NotFoundAnimation from 'assets/lotties/404.json'
import * as S from './styles'
import { useRouter } from 'next/router'
import { ArrowLeft } from '@mui/icons-material'

function NotFoundTemplate() {
  const { back } = useRouter()
  return (
    <Grid container sx={{ height: '100%' }}>
      <S.BackgroundedGrid xs={false} sm={4} md={6} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <S.FullHeightStack spacing={2}>
          <Lottie
            options={defaultLottieOptionsBuilder({ options: { animationData: NotFoundAnimation } })}
            height={450}
            width={450}
          />
          <h2>Ops, você foi mais esperto que nós :(</h2>
          <h3>Em breve, vamos providenciar esse conteúdo lindo!</h3>
          <Button variant="outlined" onClick={() => back()} startIcon={<ArrowLeft />}>
            Voltar
          </Button>
        </S.FullHeightStack>
      </Grid>
    </Grid>
  )
}

export default NotFoundTemplate
