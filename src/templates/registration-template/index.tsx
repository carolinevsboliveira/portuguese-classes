import { Alert, Button, Grid, Paper, Stack } from '@mui/material'
import BackdropWithLoader from 'components/backdrop-with-loader'
import ControlledTextField from 'components/controlled-text-field'
import LoginLottie from 'assets/lotties/login.json'
import { useAuth } from 'contexts/auth-context'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Lottie from 'react-lottie'
import * as S from './styles'

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: LoginLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function RegistrationTemplate() {
  const { control, handleSubmit, getValues } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registrationError, setRegistrationError] = useState(false)
  const { registerAnAccount } = useAuth()
  const { push } = useRouter()
  const onSubmit = async () => {
    setIsSubmitting(true)
    setRegistrationError(false)
    const { name, surname, email, password } = getValues()

    try {
      await registerAnAccount({ email, password })

      const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({ name, email, surname })
      })
      if (!response.ok) throw new Error('Algo deu errado com a sua inscrição.')

      push('/registration/success', 'cadastrar/sucesso')
    } catch (error) {
      setRegistrationError(true)
      setIsSubmitting(false)
    } finally {
      setRegistrationError(false)
      setIsSubmitting(false)
    }
  }
  return (
    <Grid container sx={{ height: '100%' }}>
      <S.BackgroundedGrid xs={false} sm={4} md={6} />
      <BackdropWithLoader isLoading={isSubmitting} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <S.FullHeightStack>
          <Lottie options={{ ...defaultOptions, loop: false }} height={80} width={80} />
          <h3>Cadastre-se</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <ControlledTextField
                name="name"
                label="Nome"
                control={control}
                type="text"
                required="Por favor preencha um nome válido."
              />
              <ControlledTextField name="surname" label="Sobrenome" control={control} type="text" />
              <ControlledTextField
                name="email"
                label="E-mail"
                control={control}
                type="email"
                required="Preencha um e-mail válido"
              />
              <ControlledTextField name="password" label="Senha" control={control} type="password" />
              <Button variant="outlined" type="submit">
                Cadastre-se
              </Button>
              {registrationError && <Alert severity="error">Humm. Parece que algo de errado aconteceu...</Alert>}
            </Stack>
          </form>
        </S.FullHeightStack>
      </Grid>
    </Grid>
  )
}

export default RegistrationTemplate
