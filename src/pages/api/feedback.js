import client from 'graphql/client'
import { CREATE_NEW_TEACHER_FEEDBACK } from 'graphql/mutations'

export default async ({ body }, res) => {
  const { teacherId, feedback, nextUserEmail } = JSON.parse(body)
  try {
    const { id } = await client.request(CREATE_NEW_TEACHER_FEEDBACK, {
      teacherId,
      feedback,
      nextUserEmail
    })

    res.status(201).json(id)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}
