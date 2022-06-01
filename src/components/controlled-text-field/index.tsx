import { TextField } from '@mui/material'
import { Control, Controller, FieldValues } from 'react-hook-form'

type ControlledTextFieldProps = {
  name: string
  label: string
  control: Control<FieldValues, any>
  required?: string
  type: string
  multiline?: boolean
  onFocus?: () => void
}

const ControlledTextField = ({
  name,
  label,
  control,
  required,
  type,
  multiline,
  onFocus
}: ControlledTextFieldProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type={type}
            label={label}
            value={value}
            onChange={onChange}
            onFocus={onFocus && onFocus}
            multiline={multiline}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: required }}
      />
    </>
  )
}
export default ControlledTextField
