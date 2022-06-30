import { Button, Grid, Paper } from '@mui/material'
import Lottie from 'react-lottie'
import { useRouter } from 'next/router'
import { ArrowLeft } from '@mui/icons-material'

import defaultLottieOptionsBuilder from '../../utils/lottie-options-builder'

import * as S from './styles'

export type NotFoundTemplateProps = {
  title: string
  subtitle: string
  animation: any
}

export function NotFoundTemplate({ title, subtitle, animation }: NotFoundTemplateProps) {
  const { back } = useRouter()

  return (
    <Grid container sx={{ height: '100%' }}>
      <S.BackgroundedGrid xs={false} sm={4} md={6} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <S.FullHeightStack spacing={2}>
          <Lottie
            options={defaultLottieOptionsBuilder({ options: { animationData: animation } })}
            height={450}
            width={450}
          />
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <Button variant="contained" onClick={() => back()} startIcon={<ArrowLeft />}>
            Voltar
          </Button>
        </S.FullHeightStack>
      </Grid>
    </Grid>
  )
}

export default NotFoundTemplate
