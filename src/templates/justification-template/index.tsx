import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material'
import ControlledTextField from 'components/controlled-text-field'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight, ExpandMore } from '@mui/icons-material'
import * as S from './styles'
import { useRouter } from 'next/router'
import { useAuth } from 'contexts/auth-context'
import dayjs from 'dayjs'

type JustificationTemplateProps = {
  missedClasses: Array<any>
  email: string
  missedClassesJustifications: Array<any>
}

function JustificationTemplate({ missedClasses, email, missedClassesJustifications }: JustificationTemplateProps) {
  const { back, push } = useRouter()
  const { handleSubmit, getValues, control } = useForm()
  const { logoutTheCurrentUser } = useAuth()

  const onSubmit = async () => {
    const { classId, justification } = getValues()
    try {
      const response = await fetch('/api/justification', {
        method: 'POST',
        body: JSON.stringify({ classId, justification, nextUserEmail: email })
      })
      if (!response.ok) throw new Error('Algo deu errado com o upload de sua justificativa.')
    } catch (e) {
      return
    }
  }

  const handleLogoutButton = async () => {
    try {
      await logoutTheCurrentUser()
      push('/')
    } catch (e) {
      return
    }
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
        <h1>Justifique sua falta</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Selecione uma aula</FormLabel>
            <Stack spacing={3}>
              <Controller
                control={control}
                name="classId"
                render={({ field }) => {
                  return (
                    <RadioGroup {...field}>
                      {missedClasses.map((currentClass) => (
                        <Accordion key={currentClass.id} sx={{ margin: '0.5rem 0' }}>
                          <AccordionSummary expandIcon={<ExpandMore />}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <FormControlLabel
                                key={currentClass.id}
                                value={currentClass.id}
                                control={<Radio />}
                                label={currentClass.name}
                              />

                              <Typography sx={{ color: 'text.secondary' }}>
                                {dayjs(currentClass.scheduledTime).format('DD/MM/YYYY')}
                              </Typography>
                            </Box>
                          </AccordionSummary>

                          <AccordionDetails>
                            <Typography>{currentClass.shortDescription}</Typography>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </RadioGroup>
                  )
                }}
              />
              <ControlledTextField
                name="justification"
                fullWidth
                multiline
                label="Justificativa"
                type="textbox"
                control={control}
              />
              <Button type="submit">Enviar</Button>
            </Stack>
          </FormControl>
        </form>

        <S.JustifiedClassesContainer>
          <h1>Aulas justificadas</h1>

          {missedClassesJustifications.map((currentClass) => (
            <Accordion key={currentClass.class.id} sx={{ margin: '0.5rem 0' }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {currentClass.class.name}

                  <Typography sx={{ color: 'text.secondary', marginLeft: '1.5rem' }}>
                    {dayjs(currentClass.class.scheduledTime).format('DD/MM/YYYY')}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>{currentClass.class.shortDescription}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </S.JustifiedClassesContainer>
      </S.ContentWrapper>
    </>
  )
}

export default JustificationTemplate
