// Hook
import { createContext, useContext, useEffect, useState } from 'react'
// API
import { SingleUserReq } from '../services/userServices'
// JWT
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
const AuthenticationContext = createContext()

function AuthProvider (props) {
  // // // // States////////////////////////////
  const [isAuth, setIsAuth] = useState(false)
  const [userDecodedJWT, setUserDecodedJWT] = useState({})
  const [userData, setUserData] = useState({})

  const LoggedInUser = (token) => {
    const decodedJWT = jwt_decode(token)
    window.sessionStorage.setItem('token', token)// key, value in JSON obj. from sessionStorage
    setUserDecodedJWT(decodedJWT)
    setIsAuth(true)
  }

  const logOut = () => {
    window.sessionStorage.removeItem('token')
    setIsAuth(false)
    setUserDecodedJWT(null)
  }
  useEffect(() => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      setIsAuth(true)
      const decodedJWT = jwt_decode(token)
      setUserDecodedJWT(decodedJWT)
      console.log(userDecodedJWT.id)
    }
  }, [])
  const getUserData = async () => {
    const result = await SingleUserReq(userDecodedJWT.id)

    if (result.response.status === 200) {
      setUserData(result)
    }
  }
  useEffect(() => {
    getUserData()
  }, [])

  const values = {
    isAuth,
    userDecodedJWT,
    LoggedInUser,
    logOut,
    userData
  }
  return (
    <AuthenticationContext.Provider value={values} {...props} />
  )
}
const useAuthContext = () => {
  const AuthContext = useContext(AuthenticationContext)
  return AuthContext
}
export {
  useAuthContext,
  AuthProvider
}
