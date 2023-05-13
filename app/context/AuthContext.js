import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { useAxios } from './AxiosContext'

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
  loading: false,
  error: null,
  isAuthenticated: false,
  login: (email, password) => {},
  logout: () => {},
  authCheckState: () => {}
}

const authConext = createContext(INITIAL_STATE)

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()
  return <authConext.Provider value={auth}>{children}</authConext.Provider>
}

export const useAuth = () => {
  return useContext(authConext)
}

function useProvideAuth() {
  const axios = useAxios()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hiddenMenu, setHiddenMenu] = useState(true)
  const [error, setError] = useState(null)

  const logout = useCallback(() => {
    setCurrentUser(null)
    setLoading(false)
    setError(null)
    setIsAuthenticated(false)
    localStorage.removeItem('authData')
    localStorage.removeItem('expirationDate')
  }, [])

  const checkAuthTimeout = useCallback(
    (expirationTime) => {
      setTimeout(() => {
        logout()
      }, expirationTime)
    },
    [logout]
  )

  const login = useCallback(
    async (email, password) => {
      setLoading(true)

      try {
        const response = await axios.post('/auth/login', {
          email,
          password
        })
        const expirationDate = new Date(
          new Date().getTime() + response.data.result.expiresIn
        ).getTime()

        localStorage.setItem('authData', JSON.stringify(response.data.result))
        localStorage.setItem('expirationDate', expirationDate.toString())
        setIsAuthenticated(true)
        setCurrentUser(response.data.result)
        setLoading(false)
        setError(null)
        checkAuthTimeout(response.data.result.expiresIn)
      } catch (error) {
        setLoading(false)
        const errorRes = error.response?.data.errors || null
        setError(errorRes)
      }
    },
    [checkAuthTimeout, axios]
  )

  const signin = useCallback(
    async (name, email, password) => {
      setLoading(true)
      try {
        const response = await axios.post('/auth/signin', {
          name,
          email,
          password,
          roleId: 2
        })
        const expirationDate = new Date(
          new Date().getTime() + response.data.result.expiresIn
        ).getTime()
        localStorage.setItem('authData', JSON.stringify(response.data.result))
        localStorage.setItem('expirationDate', expirationDate.toString())
        setIsAuthenticated(true)
        setCurrentUser(response.data.result)
        setLoading(false)
        setError(null)
        checkAuthTimeout(response.data.result.expiresIn)
      } catch (error) {
        setLoading(false)
        const errorRes = error.response?.data.errors || null
        setError(errorRes)
      }
    },
    [axios, checkAuthTimeout]
  )

  const authCheckState = useCallback(() => {
    const stringData = localStorage.getItem('authData')
    const authData = JSON.parse(String(stringData))
    if (!authData?.token) {
      logout()
    } else {
      const expirationDate = new Date(
        parseInt(localStorage.getItem('expirationDate'))
      )
      if (expirationDate.getTime() > new Date().getTime()) {
        checkAuthTimeout(expirationDate.getTime() - new Date().getTime())
        setIsAuthenticated(true)
        setCurrentUser(authData)
      } else {
        logout()
      }
    }
  }, [logout, checkAuthTimeout])

  return useMemo(() => {
    return {
      currentUser,
      loading,
      hiddenMenu,
      error,
      login,
      logout,
      signin,
      authCheckState,
      setCurrentUser,
      isAuthenticated,
      setHiddenMenu
    }
  }, [
    currentUser,
    loading,
    hiddenMenu,
    error,
    login,
    logout,
    signin,
    authCheckState,
    setCurrentUser,
    isAuthenticated,
    setHiddenMenu
  ])
}
