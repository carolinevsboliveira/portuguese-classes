import { Paper, Stack } from '@mui/material'
import Lottie, { Options } from 'react-lottie'

import * as S from './styles'

export type CustomPaperProps = {
  defaultOptions: Options
  title: string
  subtitle: string
}

export function CustomPaper({ defaultOptions, title, subtitle }: CustomPaperProps) {
  return (
    <Paper elevation={3}>
      <Stack spacing={2}>
        <S.ContainerWrapper>
          <Lottie options={defaultOptions} height={200} width={200} />
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </S.ContainerWrapper>
      </Stack>
    </Paper>
  )
}

export default CustomPaper
