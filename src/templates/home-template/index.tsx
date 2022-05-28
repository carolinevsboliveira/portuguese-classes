import { Button, Card, CardContent, CardMedia, Stack, Step, Stepper, StepLabel, Orientation } from '@mui/material'
import * as S from './styles'
import animationData from 'assets/lotties/falling-books.json'
import Lottie from 'react-lottie'
import { useWindowSize } from 'hooks/use-window-size'
import { generateSubscriptionSteps } from 'helpers/translate-user-messages'
import { useState } from 'react'
import ResponsiveStepper from 'components/responsive-steper/reponsive-steper'
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
  subscriptionDate: {
    initialDate: Date | string
    finalDate: Date | string
  }
  possibleSubscriptions: boolean
}

const HomeTemplate = ({
  title,
  slogan,
  teachers,
  subscriptionDate: { initialDate, finalDate },
  possibleSubscriptions
}: HomeTemplateProps) => {
  const { messageArray, activeSteps } = generateSubscriptionSteps({
    isOpen: possibleSubscriptions,
    initialDate,
    finalDate
  })

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
        <S.AdditionalInfoWrapper>
          <ResponsiveStepper steps={messageArray} activeSteps={activeSteps} />
          {/* {teachers?.map((teacher) => {
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
          })} */}
        </S.AdditionalInfoWrapper>
      </S.FullHeightWrapper>
    </Stack>
  )
}

export default HomeTemplate
