import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { NotFoundTemplate, NotFoundTemplateProps } from './index'

const backFnMock = jest.fn()

jest.mock('react-lottie', () => jest.fn())
jest.mock('next/router', () => ({ useRouter: () => ({ back: backFnMock }) }))

const PROPS_MOCK: NotFoundTemplateProps = {
  animation: {},
  title: '<title-mock>',
  subtitle: '<subtitle-mock>'
}

describe('<NotFoundTemplate />', () => {
  it('renders correctly', () => {
    render(<NotFoundTemplate {...PROPS_MOCK} />)

    expect(screen.getByText(PROPS_MOCK.title)).toBeInTheDocument()
    expect(screen.getByText(PROPS_MOCK.subtitle)).toBeInTheDocument()
  })

  it('should back when clicking in back button', () => {
    render(<NotFoundTemplate {...PROPS_MOCK} />)

    userEvent.click(screen.getByText('Voltar'))

    waitFor(() => {
      expect(backFnMock).toHaveBeenCalled()
    })
  })
})
