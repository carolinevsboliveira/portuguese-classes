import { render, screen } from '@testing-library/react'

import { CustomPaper, CustomPaperProps } from './index'

jest.mock('react-lottie', () => jest.fn())

const PROPS_MOCK: CustomPaperProps = {
  defaultOptions: { animationData: {} },
  title: '<title-mock>',
  subtitle: '<subtitle-mock>'
}

describe('<CustomPaper />', () => {
  it('renders correctly', () => {
    render(<CustomPaper {...PROPS_MOCK} />)

    expect(screen.getByText(PROPS_MOCK.title)).toBeInTheDocument()
    expect(screen.getByText(PROPS_MOCK.subtitle)).toBeInTheDocument()
  })
})
