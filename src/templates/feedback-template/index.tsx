import { useState } from 'react'
import { Alert, Button, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { useRouter } from 'next/router'

import ControlledTextField from '../../components/controlled-text-field'
import { useAuth } from '../../contexts/auth-context'
import type { GetTeachersQuery } from '../../generated/graphql'
import { UserData } from '../../utils/with-ssr-auth'

import * as S from './styles'

type FeedbackTemplateProps = {
  teachers: GetTeachersQuery['teachers']
  userData: UserData
}

function FeedbackTemplate({ teachers, userData }: FeedbackTemplateProps) {
  const { back, push } = useRouter()
  const { handleSubmit, control } = useForm<{ teacherId: string; feedback: string }>()
  const { logoutTheCurrentUser } = useAuth()

  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)

  const onSubmit = handleSubmit(async (formData) => {
    setShowSuccessAlert(true)

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        body: JSON.stringify({ ...formData, nextUserEmail: userData.email })
      })

      if (response.ok) {
        setShowSuccessAlert(true)
      } else {
        setShowErrorAlert(true)
      }
    } catch (e) {
      console.error(e)
      setShowErrorAlert(true)
    }
  })

  const handleLogoutButton = async () => {
    await logoutTheCurrentUser()
    push('/')
  }

  return (
    <>
      <S.NavbarWrapper>
        <Button onClick={() => back()} variant="outlined" startIcon={<ArrowLeft />}>
          Voltar
        </Button>
        <Button onClick={handleLogoutButton} variant="text" endIcon={<ArrowRight />}>
          Sair
        </Button>
      </S.NavbarWrapper>
      <S.ContentWrapper>
        <h1>Avalie um professor</h1>

        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Selecione um professor</FormLabel>
            <Stack spacing={3}>
              <Controller
                name="teacherId"
                control={control}
                rules={{ required: 'Selecione um professor' }}
                render={({ field, fieldState }) => (
                  <RadioGroup {...field}>
                    <Stack spacing="1rem">
                      {teachers.map((teacher) => (
                        <Card key={teacher.id} sx={{ padding: 1 }}>
                          <FormControlLabel control={<Radio />} value={teacher.id} label={teacher.name} />
                        </Card>
                      ))}
                    </Stack>

                    {fieldState.error && <S.ErrorMessage>{fieldState.error.message}</S.ErrorMessage>}
                  </RadioGroup>
                )}
              />

              <ControlledTextField
                name="feedback"
                fullWidth
                multiline
                label="Feedback"
                type="textbox"
                required="Feedback é obrigatório"
                control={control as unknown as any}
              />

              <Button type="submit">Enviar</Button>
            </Stack>
          </FormControl>
        </form>

        {showSuccessAlert && (
          <Alert severity="success" sx={{ marginTop: '4rem' }}>
            Avaliação enviada com sucesso
          </Alert>
        )}

        {showErrorAlert && (
          <Alert severity="error" sx={{ marginTop: '4rem' }}>
            Erro ao enviar avaliação
          </Alert>
        )}
      </S.ContentWrapper>
    </>
  )
}

export default FeedbackTemplate
