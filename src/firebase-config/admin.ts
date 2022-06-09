import admin from 'firebase-admin'

const privateKey = process.env.REACT_FIREBASE_ADMIN_PRIVATE_KEY
const clientEmail = process.env.REACT_FIREBASE_ADMIN_CLIENT_EMAIL
const projectId = process.env.REACT_FIREBASE_APP_PROJECT_ID

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  )
}

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: privateKey,
      clientEmail,
      projectId
    })
  })
} catch (error: any) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error?.message)) {
    console.error('Firebase admin initialization error', error?.stack)
  }
}

export default admin
