import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Typography, CardActions } from '@mui/material'
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
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#00115b' }} aria-label="Inicial dos professores">
            {teachers[0].name[0]}
          </Avatar>
        }
        title={`${teachers[0].name} & ${teachers[1].name}`}
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
  )
}

export default ClassCard
