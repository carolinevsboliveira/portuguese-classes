import { render, screen } from '@testing-library/react'

import { CardWithFixedHeight } from './card-with-fixed-height'

const TEACHER_MOCK = {
  name: 'Professor X',
  scholarExperience: ['Experiência 1', 'Experiência 2'],
  profilePhoto: {
    url: 'https://via.placeholder.com/150'
  }
}

describe('<CardWithFixedHeight />', () => {
  it('should render teacher name', () => {
    render(<CardWithFixedHeight teacher={TEACHER_MOCK} />)
    expect(screen.getByText(TEACHER_MOCK.name)).toBeInTheDocument()
  })

  it('should render teacher image', () => {
    render(<CardWithFixedHeight teacher={TEACHER_MOCK} />)
    expect(screen.getByRole<HTMLImageElement>('img').src).toBe(TEACHER_MOCK.profilePhoto.url)
  })

  it('should render teacher experience', () => {
    render(<CardWithFixedHeight teacher={TEACHER_MOCK} />)

    TEACHER_MOCK.scholarExperience.forEach((experience: string) => {
      expect(screen.getByText(experience)).toBeInTheDocument()
    })
  })
})
