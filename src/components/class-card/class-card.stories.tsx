import ClassCard from './index'

export default {
  title: 'Class card'
}

export const Basic = () => (
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
