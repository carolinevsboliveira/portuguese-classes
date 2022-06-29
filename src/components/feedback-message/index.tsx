import Lottie from 'react-lottie'
import { Button, Stack, Typography, Box } from '@mui/material'

import Feedback from 'assets/lotties/feedback.json'
import { useRouter } from 'next/router'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Feedback,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function FeedbackMessage() {
  const { push } = useRouter()

  function handleGoToFeedbackPage() {
    push('/feedback', '/avaliar-professor')
  }

  return (
    <Stack spacing={3}>
      <Lottie options={defaultOptions} height={250} width={250} />

      <Typography variant="h4">Avalie o professor e o ambiente da aula.</Typography>

      <Box display="flex" justifyContent="center">
        <Button variant="outlined" color="error" onClick={handleGoToFeedbackPage}>
          Avaliar
        </Button>
      </Box>
    </Stack>
  )
}

export default FeedbackMessage
