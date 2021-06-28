import { publicEnv } from 'env'
import firebase from 'firebase/app'
import { auth } from 'lib/firebase/client'
import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react'

export class Me {
  constructor(
    readonly id: string, // uid
    readonly emailVerified: boolean
  ) {}
}

const stub = (): never => {
  throw new Error()
}

const initialState: AuthState & AuthDispatch = {
  initialized: false,
  signOut: stub,
}

type AuthErrorCode = 'unexpected'

type AuthState = {
  initialized: boolean
  user?: Me
  errorCode?: AuthErrorCode
}

type AuthDispatch = {
  signOut: () => Promise<void>
}

const AuthStateContext = createContext<AuthState>({ ...initialState })
const AuthDispatchContext = createContext<AuthDispatch>({ ...initialState })

export const AuthProviderContainer: FC = ({ children }) => {
  const state = useAuthCore()
  return (
    <AuthStateContext.Provider value={state.state}>
      <AuthDispatchContext.Provider value={state.dispatcher}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

const convertUser = (user: firebase.User): Me => {
  return new Me(user.uid, user.emailVerified)
}

const useAuthCore = (): { state: AuthState; dispatcher: AuthDispatch } => {
  const [authState, setAuthState] = useState<AuthState>({ ...initialState })

  const signOut = useCallback(async () => {
    await auth.signOut()
  }, [])

  useEffect(() => {
    if (!process.browser) return
    let cancel = false

    const unsubscribe = auth.onAuthStateChanged(
      async user => {
        if (cancel) return
        if (user) {
          const u = convertUser(user)
          setAuthState({ initialized: true, user: u })
          return
        } else {
          const u = await auth.signInAnonymously()
          if (u.user) {
            setAuthState({ initialized: true, user: convertUser(u.user) })
          }
        }
      },
      error => {
        if (cancel) return
        console.error(error)
        setAuthState({ initialized: true, errorCode: 'unexpected' })
      }
    )

    return () => {
      cancel = true
      unsubscribe()
    }
  }, [process.browser])

  useEffect(() => {
    const user = authState.user
    if (user) {
      if (publicEnv.env !== 'prod') {
        console.log(authState.user)
      }
    }
  }, [authState])

  return {
    state: authState,
    dispatcher: {
      signOut,
    },
  }
}

export const useAuthState = () => useContext(AuthStateContext)
export const useAuthDispatcher = () => useContext(AuthDispatchContext)
