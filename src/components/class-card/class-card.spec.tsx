import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ClassCard from './index'

describe('<ClassCard />', () => {
  beforeEach(() =>
    render(
      <ClassCard
        teachers={[
          {
            name: 'Felipinho Solaris'
          },
          {
            name: 'Alice Kayme'
          }
        ]}
        name="Aulinha dahora"
        scheduledTime="2022-03-15"
        shortDescription="Em um universo paralelo cheio de aventuras..."
        availableSlideUrl="https://media.graphassets.com/6JV5C7bKSQajHVlWWXuk"
      />
    )
  )
  it('should render correctly the teachers name', () => {
    expect(screen.getByText('Felipinho Solaris & Alice Kayme')).toBeInTheDocument()
  })

  it('should call correctly the redirect url', async () => {
    const spyWindowOpen = jest.spyOn(window, 'open')
    spyWindowOpen.mockImplementation(jest.fn())
    userEvent.click(screen.getByRole('button', { name: /baixar slide da aula/i }))
    await waitFor(() =>
      expect(spyWindowOpen).toHaveBeenCalledWith(
        new URL('https://media.graphassets.com/6JV5C7bKSQajHVlWWXuk'),
        '_blank'
      )
    )
  })
})
