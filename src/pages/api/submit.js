import client from 'graphql/client'
import { CREATE_NEW_STUDENT } from 'graphql/mutations'

export default async ({ body }, res) => {
  const { email } = JSON.parse(body)

  try {
    const { createSubmission } = await client.request(CREATE_NEW_STUDENT, { email })

    res.status(201).json(createSubmission)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}
