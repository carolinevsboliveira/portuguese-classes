type FirebaseResponseArrayErrors = {
  message?: string
  domain?: string
  reason?: string
}
type FirebaseErrorResponse = {
  code?: number
  message?: string
  errors?: Array<FirebaseResponseArrayErrors>
}
export const translateFirebaseErrorMessages = (error: FirebaseErrorResponse) => {
  if (error.message?.includes('auth/email-already-exists')) {
    return 'E-mail já utilizado.'
  }
  if (error.message?.includes('(auth/email-already-in-use)')) {
    return 'E-mail já cadastrado.'
  }
  if (error.message?.includes('auth/user-not-found')) {
    return 'E-mail não cadastrado.'
  }
  return 'Algo deu errado, tente novamente'
}
