import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { auth } from 'utils/firebase-config'
import nookies from 'nookies'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  UserCredential,
  onIdTokenChanged,
  sendPasswordResetEmail
} from 'firebase/auth'

interface UserSignInData {
  name?: string
  surname?: string
  email: string
  password: string
}

interface ResetPasswordData {
  email: string
  url: string
}
interface AuthContextData {
  currentUser: User | null
  registerAnAccount: ({ email, password }: UserSignInData) => Promise<UserCredential> | void
  loginWithPasswordAndEmail: ({ email, password }: UserSignInData) => Promise<UserCredential> | void
  logoutTheCurrentUser: () => Promise<void> | void
  resetPassword: ({ email, url }: ResetPasswordData) => Promise<void> | void
}

const initialValues: AuthContextData = {
  currentUser: null,
  registerAnAccount: () => {},
  loginWithPasswordAndEmail: () => {},
  logoutTheCurrentUser: () => {},
  resetPassword: () => {}
}
const AuthContext = createContext<AuthContextData>(initialValues)

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const registerAnAccount = ({ email, password }: UserSignInData) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginWithPasswordAndEmail = ({ email, password }: UserSignInData) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logoutTheCurrentUser = () => {
    return signOut(auth)
  }

  const signInWithGooglePopup = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const resetPassword = ({ email, url }: ResetPasswordData) => {
    return sendPasswordResetEmail(auth, email, {
      url
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (!user) {
        setCurrentUser(null)
        nookies.set(undefined, 'token', '', { path: '/' })
      } else {
        const token = await user.getIdToken()
        setCurrentUser(user)
        nookies.set(undefined, 'token', token, { path: '/' })
      }
    })
  }, [])

  const value = {
    currentUser,
    registerAnAccount,
    loginWithPasswordAndEmail,
    logoutTheCurrentUser,
    signInWithGooglePopup,
    resetPassword
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
