import client from 'graphql/client'
import { CREATE_NEW_STUDENT } from 'graphql/mutations'

export default async ({ body }, res) => {
  const { email, name, surname } = JSON.parse(body) //console.log('🚀 ~ file: submit.js ~ line 6 ~ name', name)

  try {
    const { createSubmission } = await client.request(CREATE_NEW_STUDENT, { email, name, surname })

    res.status(201).json(createSubmission)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}
