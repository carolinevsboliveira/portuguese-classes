import LoginLottie from 'assets/lotties/login.json'
import ErrorLottie from 'assets/lotties/error.json'
import { Alert, Button, Grid, Paper, Stack } from '@mui/material'
import ControlledTextField from 'components/controlled-text-field'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import Lottie from 'react-lottie'
import { useState } from 'react'
import { useAuth } from 'contexts/auth-context'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoginLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function ForgotPasswordTemplate() {
  const { control, handleSubmit, getValues } = useForm()
  const [hasErrors, setHasErrors] = useState(false)
  const [isEmailAlredySend, setIsEmailAlredySend] = useState(false)
  const { resetPassword } = useAuth()

  const onSubmit = async () => {
    try {
      await resetPassword({ email: getValues().email, url: process.env.FIREBASE_RESET_URL as string })
      setHasErrors(false)
      setIsEmailAlredySend(true)
    } catch (e) {
      console.log({ e })
      setHasErrors(true)
    }
  }
  return (
    <Grid container sx={{ height: '100%' }}>
      <S.BackgroundedGrid xs={false} sm={4} md={6} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <S.FullHeightStack>
          <Lottie
            options={hasErrors ? { ...defaultOptions, animationData: ErrorLottie, loop: false } : defaultOptions}
            height={80}
            width={80}
          />
          <h3>Recupere sua senha</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={1}>
              <ControlledTextField
                control={control}
                label="E-mail"
                name="email"
                type="text"
                required="Ops! Precisa preencher esse campo!"
                onFocus={() => setHasErrors(false)}
              />
              <Button variant="text" color="error" type="submit">
                Enviar
              </Button>
            </Stack>
          </form>
          {isEmailAlredySend && (
            <Alert severity="success">Email enviado com sucesso, verifique sua caixa de entrada</Alert>
          )}
        </S.FullHeightStack>
      </Grid>
    </Grid>
  )
}

export default ForgotPasswordTemplate
