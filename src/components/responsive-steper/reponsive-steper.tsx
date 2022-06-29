import styled from 'styled-components'
import { Step, StepLabel, Stepper } from '@mui/material'

import { useWindowSize } from '../../hooks/use-window-size'

import * as S from './styles'

export type ResponsiveStepperProps = {
  steps: Array<string>
  activeSteps: number
}

const Label = styled.h3`
  color: #17326b;
`
function ResponsiveStepper({ steps, activeSteps }: { steps: Array<string>; activeSteps: number }) {
  const { width } = useWindowSize()

  return (
    <S.StepWrapper>
      <Stepper activeStep={activeSteps} orientation={width < 600 ? 'vertical' : 'horizontal'} sx={{ width: '100%' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <Label>{label}</Label>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </S.StepWrapper>
  )
}

export default ResponsiveStepper
