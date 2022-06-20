import client from 'graphql/client'
import { CREATE_NEW_LAST_SEND_DATA_FOR_STUDENTS } from 'graphql/mutations'

export default async ({ body }, res) => {
  const { date } = JSON.parse(body)
  try {
    client.request(CREATE_NEW_LAST_SEND_DATA_FOR_STUDENTS, {
      date
    })
    res.status(201).json(date)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}
