import { Box, Card, CardContent, CardMedia } from '@mui/material'

function CardWithFixedHeight({ teacher }: { teacher: any }) {
  const profilePhoto = teacher.profilePhoto.url
  const professionalExperience = teacher.scholarExperience

  return (
    <Card sx={{ height: 250 }}>
      <CardMedia component="img" height="140" image={profilePhoto} alt={`Foto do Professor ${teacher.name}`} />
      <CardContent>
        <Box sx={{ textAlign: 'center' }}>
          <h4>{teacher.name}</h4>
          {professionalExperience.map((experience: string, index: number) => (
            <h5 key={index}>{experience}</h5>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardWithFixedHeight
