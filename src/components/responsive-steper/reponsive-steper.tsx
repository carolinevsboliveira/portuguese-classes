import { Step, StepLabel, Stepper } from '@mui/material'

import { useWindowSize } from '../../hooks/use-window-size'

import * as S from './styles'

export type ResponsiveStepperProps = {
  steps: Array<string>
  activeSteps: number
}

export function ResponsiveStepper({ steps, activeSteps }: ResponsiveStepperProps) {
  const { width } = useWindowSize()

  return (
    <S.StepWrapper>
      <Stepper activeStep={activeSteps} orientation={width < 600 ? 'vertical' : 'horizontal'} sx={{ width: '100%' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <h3>{label}</h3>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </S.StepWrapper>
  )
}

export default ResponsiveStepper
