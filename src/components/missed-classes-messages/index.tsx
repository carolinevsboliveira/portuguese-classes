import { Button, Stack, Typography, Box } from '@mui/material'
import Lottie from 'react-lottie'
import Warning from 'assets/lotties/warning.json'
import GoodJob from 'assets/lotties/good-job.json'
type MissedClassesMessageProps = {
  hasMissedClasses: boolean
  missedClassesQuantity?: number
  totalClassesQuantity?: number
  actionButton?: () => void
}
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: Warning,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function MissedClassesMessage({
  hasMissedClasses,
  missedClassesQuantity,
  totalClassesQuantity,
  actionButton
}: MissedClassesMessageProps) {
  return (
    <Stack spacing={3}>
      <Lottie
        options={hasMissedClasses ? defaultOptions : { ...defaultOptions, animationData: GoodJob }}
        height={250}
        width={250}
      />
      <Typography variant="h4" color="text.primary">
        {hasMissedClasses
          ? `Você faltou ${missedClassesQuantity} das ${totalClassesQuantity} aulas deste período.`
          : `Parabéns! Você não teve faltas registradas nas aulas deste período.`}
      </Typography>
      {hasMissedClasses && (
        <Box display="flex" justifyContent="center">
          <Button variant="outlined" color="error" onClick={actionButton && actionButton}>
            Justificar faltas
          </Button>
        </Box>
      )}
    </Stack>
  )
}

export default MissedClassesMessage
