import { Button, Card, CardActions, CardContent, CardMedia, Stack } from '@mui/material'
import * as S from './styles'
import animationData from 'assets/lotties/falling-books.json'
import Lottie from 'react-lottie'
//TODO: type teachers
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
type HomeTemplateProps = {
  title?: string
  slogan?: string
  teachers?: Array<any>
}
const HomeTemplate = ({ title, slogan, teachers }: HomeTemplateProps) => {
  console.log('🚀 ~ file: index.tsx ~ line 20 ~ HomeTemplate ~ teachers', teachers)
  return (
    <Stack spacing={2}>
      <S.FullHeightWrapper>
        <S.NavBarWrapper>
          <Button variant="outlined">Login</Button>
          <Button variant="contained">Cadastrar</Button>
        </S.NavBarWrapper>
        <S.LottieSection>
          <Lottie options={defaultOptions} height={300} width={300} />
        </S.LottieSection>
        <S.InformationTextContainer>
          <h1>{title}</h1>
          <h2>{slogan}</h2>
        </S.InformationTextContainer>
        <S.TeachersWrapper>
          {teachers?.map((teacher) => {
            const profilePhoto = teacher.profilePhoto.url
            const professionalExperience = teacher.scholarExperience
            return (
              <Card key={`teacher-${teacher.id}`} sx={{ minWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={profilePhoto}
                  alt={`Foto do Professor ${teacher.name}`}
                />
                <CardContent>
                  <h4>{teacher.name}</h4>
                  {professionalExperience.map((experience: string, index: number) => (
                    <h5 key={index}>{experience}</h5>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </S.TeachersWrapper>
      </S.FullHeightWrapper>
    </Stack>
  )
}

export default HomeTemplate
