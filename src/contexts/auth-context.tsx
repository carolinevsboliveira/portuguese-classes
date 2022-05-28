import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { auth } from 'utils/firebase-config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  UserCredential
} from 'firebase/auth'

interface UserSignInData {
  name?: string
  surname?: string
  email: string
  password: string
}
interface AuthContextData {
  currentUser: User | null
  registerAnAccount: ({ email, password }: UserSignInData) => Promise<UserCredential> | void
  loginWithPasswordAndEmail: ({ email, password }: UserSignInData) => Promise<UserCredential> | void
  logoutTheCurrentUser: () => Promise<void> | void
}

const initialValues: AuthContextData = {
  currentUser: null,
  registerAnAccount: () => {},
  loginWithPasswordAndEmail: () => {},
  logoutTheCurrentUser: () => {}
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const value = {
    currentUser,
    registerAnAccount,
    loginWithPasswordAndEmail,
    logoutTheCurrentUser,
    signInWithGooglePopup
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}