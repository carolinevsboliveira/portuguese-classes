import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Typography, CardActions } from '@mui/material'
import { Box } from '@mui/system'
import dayjs from 'dayjs'

type ClassCardProps = {
  teachers: Array<any>
  name: string
  scheduledTime: Date | string
  shortDescription: string
  availableSlideUrl?: string
}
const fallbackImageUrl = 'https://media.graphassets.com/NJTWYuucRyyBRR5vXAX1'

function ClassCard({ teachers, name, scheduledTime, shortDescription, availableSlideUrl }: ClassCardProps) {
  return (
    <Box sx={{ padding: '10px', alignItems: 'stretch' }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#00115b' }} aria-label="Inicial dos professores">
              {teachers[0].name[0]}
            </Avatar>
          }
          title={teachers.length > 1 ? `${teachers[0].name} & ${teachers[1].name}` : `${teachers[0].name}`}
          subheader={`${dayjs(scheduledTime).format('MM/DD/YYYY HH:mm')}`}
        />
        <CardMedia component="img" height="150" image={fallbackImageUrl} alt="Paella dish" />
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {shortDescription}
          </Typography>
        </CardContent>
        {availableSlideUrl && (
          <CardActions disableSpacing>
            <Button
              variant="outlined"
              onClick={() => window.open(new URL(availableSlideUrl), '_blank')}
              name="download file"
            >
              Baixar slide da aula
            </Button>
          </CardActions>
        )}
      </Card>
    </Box>
  )
}

export default ClassCard
