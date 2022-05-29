import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { default as DevelopedByLayout } from './developed-by-layout'

describe('<DevelopedByLayout />', () => {
  it('should call the correct URL on button click', async () => {
    const spyWindowOpen = jest.spyOn(window, 'open')
    spyWindowOpen.mockImplementation(jest.fn())

    render(<DevelopedByLayout />)

    const githubRedirectButton = screen.getByRole('button', { name: /developed by/i })
    userEvent.click(githubRedirectButton)

    await waitFor(() => {
      expect(spyWindowOpen).toHaveBeenCalledWith(new URL('https://github.com/carolinevsboliveira'), '_blank')
    })
  })
})
