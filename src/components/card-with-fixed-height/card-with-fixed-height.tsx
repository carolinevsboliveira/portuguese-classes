import styled from 'styled-components'
import { Card, CardContent, CardMedia } from '@mui/material'

const TextWrapper = styled.div`
  text-align: center;

  h4 {
    color: #000a36;
  }

  h5 {
    color: #17326b;
  }
`

export function CardWithFixedHeight({ teacher }: { teacher: any }) {
  const profilePhoto = teacher.profilePhoto.url
  const professionalExperience = teacher.scholarExperience

  return (
    <Card sx={{ height: 250 }}>
      <CardMedia component="img" height="140" image={profilePhoto} alt={`Foto do Professor ${teacher.name}`} />
      <CardContent>
        <TextWrapper>
          <h4>{teacher.name}</h4>

          {professionalExperience.map((experience: string, index: number) => (
            <h5 key={index}>{experience}</h5>
          ))}
        </TextWrapper>
      </CardContent>
    </Card>
  )
}

export default CardWithFixedHeight
