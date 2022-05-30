import { Button, Stack } from '@mui/material'
import * as S from './styles'
import FallingBooks from 'assets/lotties/falling-books.json'
import AccessibleValue from 'assets/lotties/accessible-value.json'
import OnlineClasses from 'assets/lotties/online-class.json'
import ClassTime from 'assets/lotties/class-time.json'
import Lottie from 'react-lottie'
import { generateSubscriptionSteps } from 'helpers/translate-user-messages'
import ResponsiveStepper from 'components/responsive-steper/reponsive-steper'
import CustomPaper from 'components/custom-paper'
import { useRouter } from 'next/router'
import CardWithFixedHeight from 'components/card-with-fixed-height/card-with-fixed-height'
import { WhatsApp } from '@mui/icons-material'
//TODO: type teachers

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: FallingBooks,
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
  valuePerMonth: number
  courseClassPlataform: string
  whatsappContact: {
    phone: string
    link: string
  }
}

const HomeTemplate = ({
  title,
  slogan,
  teachers,
  subscriptionDate: { initialDate, finalDate },
  possibleSubscriptions,
  courseClassPlataform,
  valuePerMonth,
  whatsappContact: { phone, link }
}: HomeTemplateProps) => {
  const { push } = useRouter()
  const { messageArray, activeSteps } = generateSubscriptionSteps({
    isOpen: possibleSubscriptions,
    initialDate,
    finalDate
  })
  const papers = [
    { animationData: ClassTime, title: 'Aulas aos sábados', subtitle: '8:30h as 11:00h' },
    { animationData: OnlineClasses, title: 'Aulas online', subtitle: `Via ${courseClassPlataform}` },
    { animationData: AccessibleValue, title: `R$ ${valuePerMonth},00`, subtitle: '8:30h as 11:00h' }
  ]
  const handleWhatsAppButtonOnClick = () => {
    const url = new URL(link)
    window.open(url, '_blank')
  }
  return (
    <Stack spacing={2}>
      <S.FullHeightWrapper>
        <S.NavBarWrapper>
          <Button variant="text" startIcon={<WhatsApp />} onClick={() => handleWhatsAppButtonOnClick()}>
            {phone}
          </Button>
          <Button variant="outlined" onClick={() => push('/login')}>
            Login
          </Button>
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
          <S.PapersWrapper>
            {papers.map((paper) => (
              <CustomPaper
                key={`paper-${paper.title}`}
                defaultOptions={{ ...defaultOptions, animationData: paper.animationData }}
                title={paper.title}
                subtitle={paper.subtitle}
              />
            ))}
          </S.PapersWrapper>
          {possibleSubscriptions && (
            <Button variant="contained" onClick={() => push('/registration', '/cadastrar')}>
              Inscreva-se já
            </Button>
          )}
        </S.AdditionalInfoWrapper>
        <S.TeacherCardsWrapper>
          <h1>Um curso ministrado por:</h1>
          {teachers?.map((teacher) => (
            <CardWithFixedHeight teacher={teacher} key={teacher.id} />
          ))}
        </S.TeacherCardsWrapper>
      </S.FullHeightWrapper>
    </Stack>
  )
}

export default HomeTemplate
