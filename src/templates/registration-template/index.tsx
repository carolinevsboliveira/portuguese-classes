import { Alert, Button } from '@mui/material'
import BackdropWithLoader from 'components/backdrop-with-loader'
import ControlledTextField from 'components/controlled-text-field'
import { useAuth } from 'contexts/auth-context'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styles'
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

      push('/registration/success', 'cadastrar/successo')
    } catch (error) {
      setRegistrationError(true)
      setIsSubmitting(false)
    } finally {
      setRegistrationError(false)
      setIsSubmitting(false)
    }
  }
  return (
    <S.BackgroundWrapper>
      <BackdropWithLoader isLoading={isSubmitting} />
      {registrationError && <Alert severity="error">Humm. Parece que algo de errado aconteceu...</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.FormWrapper>
          <S.FieldsWrapper>
            <ControlledTextField
              name="name"
              label="Nome"
              control={control}
              type="text"
              required="Por favor preencha um nome válido."
            />
          </S.FieldsWrapper>
          <S.FieldsWrapper>
            <ControlledTextField name="surname" label="Sobrenome" control={control} type="text" />
          </S.FieldsWrapper>
          <S.FieldsWrapper>
            <ControlledTextField
              name="email"
              label="E-mail"
              control={control}
              type="email"
              required="Preencha um e-mail válido"
            />
          </S.FieldsWrapper>
          <S.FieldsWrapper>
            <ControlledTextField name="password" label="Senha" control={control} type="password" />
          </S.FieldsWrapper>
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </S.FormWrapper>
      </form>
    </S.BackgroundWrapper>
  )
}

export default RegistrationTemplate
