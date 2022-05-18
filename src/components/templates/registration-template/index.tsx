import { Alert, Button } from '@mui/material'
import BackdropWithLoader from 'components/backdrop-with-loader'
import ControlledTextField from 'components/controlled-text-field'
import { useAuth } from 'contexts/auth-context'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function RegistrationTemplate() {
  const { control, handleSubmit, getValues } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registrationError, setRegistrationError] = useState(false)
  const { registerAnAccount } = useAuth()

  const onSubmit = async () => {
    setIsSubmitting(true)
    setRegistrationError(false)
    const { nameemail, password } = getValues()

    try {
      await registerAnAccount({ email, password })
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({ name, email, active: false })
      })
      console.log('🚀 ~ file: index.tsx ~ line 29 ~ onSubmit ~ response', response)
    } catch (error) {
      setRegistrationError(true)
      setIsSubmitting(false)
    } finally {
      setRegistrationError(false)
      setIsSubmitting(false)
    }
  }
  return (
    <>
      <BackdropWithLoader isLoading={isSubmitting} />
      {registrationError && <Alert severity="error">Humm. Parece que algo de errado aconteceu...</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit">Cadastrar</Button>
      </form>
    </>
  )
}

export default RegistrationTemplate
