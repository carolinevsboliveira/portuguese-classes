import { Button, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import ControlledTextField from 'components/controlled-text-field'
import { useForm, Controller } from 'react-hook-form'
type JustificationTemplateProps = {
  missedClasses: Array<any>
  email: string
}
function JustificationTemplate({ missedClasses, email }: JustificationTemplateProps) {
  const { handleSubmit, getValues, control } = useForm()
  const onSubmit = async () => {
    const { classId, justification } = getValues()
    try {
      const response = await fetch('/api/justification', {
        method: 'POST',
        body: JSON.stringify({ classId, justification, nextUserEmail: email })
      })
      if (!response.ok) throw new Error('Algo deu errado com o upload de sua justificativa.')
    } catch (e) {
      console.log({ e })
    }
  }
  return (
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
                    <Card key={currentClass.id} sx={{ margin: '0.5rem 0' }}>
                      <FormControlLabel
                        key={currentClass.id}
                        value={currentClass.id}
                        control={<Radio />}
                        label={currentClass.name}
                      />
                    </Card>
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
  )
}

export default JustificationTemplate
