import dayjs from 'dayjs'

type generateSubscriptionStepsParams = {
  isOpen: boolean
  initialDate?: Date | string
  finalDate?: Date | string
}
export function generateSubscriptionSteps({ isOpen, initialDate, finalDate }: generateSubscriptionStepsParams) {
  if (isOpen) {
    const messageArray = [
      `Inscreva-se`,
      `De ${dayjs(initialDate).format('DD/MM/YYYY')}`,
      `Até ${dayjs(finalDate).format('DD/MM/YYYY')}`
    ]
    return {
      messageArray,
      activeSteps: messageArray.length
    }
  }

  return {
    messageArray: [
      `Inscrições encerradas!`,
      `Abrem em ${dayjs(initialDate).format('DD/MM/YYYY')}`,
      `E vão até \n${dayjs(finalDate).format('DD/MM/YYYY')}`
    ],
    activeSteps: 0
  }
}
