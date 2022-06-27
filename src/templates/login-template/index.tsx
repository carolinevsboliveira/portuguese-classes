import LoginLottie from 'assets/lotties/login.json'
import ErrorLottie from 'assets/lotties/error.json'
import { Button, Grid, Paper, Stack } from '@mui/material'
import ControlledTextField from 'components/controlled-text-field'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import Lottie from 'react-lottie'
import { useState } from 'react'
import { useAuth } from 'contexts/auth-context'
import { useRouter } from 'next/router'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoginLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function LoginTemplate() {
  const { control, handleSubmit, getValues } = useForm()
  const [hasErrors, setHasErrors] = useState(false)
  const { push } = useRouter()
  const { loginWithPasswordAndEmail } = useAuth()

  const onSubmit = async () => {
    try {
      await loginWithPasswordAndEmail({ email: getValues().email, password: getValues().password })
      push('/classes/1', '/aulas/1')
      setHasErrors(false)
    } catch (e) {
      setHasErrors(true)
    }
  }

  const handleForgetPassword = () => {
    push('/forgot-password', '/esqueceu-a-senha')
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
          <h3>Log in</h3>
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
              <ControlledTextField
                control={control}
                label="Senha"
                name="password"
                type="password"
                required="Ops! Precisa preencher esse campo!"
                onFocus={() => setHasErrors(false)}
              />
              <Button variant="outlined" type="submit">
                Login
              </Button>
              <Button variant="text" color="error" onClick={() => handleForgetPassword()} size="small">
                Esqueceu a senha?
              </Button>
              {hasErrors && <h4>Algo deu errado! Tente novamente</h4>}
            </Stack>
          </form>
        </S.FullHeightStack>
      </Grid>
    </Grid>
  )
}

export default LoginTemplate
