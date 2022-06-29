import { render, screen } from '@testing-library/react'
import { ResponsiveStepper, ResponsiveStepperProps } from './reponsive-steper'

const MOCK_PROPS: ResponsiveStepperProps = {
  activeSteps: 1,
  steps: ['step1', 'step2', 'step3']
}

describe('<ResponsiveStepper />', () => {
  it('renders correctly', () => {
    render(<ResponsiveStepper {...MOCK_PROPS} />)

    MOCK_PROPS.steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument()
    })
  })
})
