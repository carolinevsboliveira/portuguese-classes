import client from 'graphql/client'
import { CREATE_NEW_JUSTIFYING } from 'graphql/mutations'

export default async ({ body }, res) => {
  const { classId, justification, nextUserEmail } = JSON.parse(body)
  try {
    const { createSubmission } = await client.request(CREATE_NEW_JUSTIFYING, { classId, justification, nextUserEmail })

    res.status(201).json(createSubmission)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}
