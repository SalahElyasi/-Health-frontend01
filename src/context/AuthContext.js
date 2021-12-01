import React from 'react'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    const verifyToken = async () => {
      try {
        setLoading(true)
        const {
          data: { success },
        } = await axios.get('http://localhost:5000/auth/verify-session', {
          headers: { Authorization: token },
        })
        if (success) {
          const { data: userInfo } = await axios.get(
            'http://localhost:5000/auth/me',
            { headers: { Authorization: token } }
          )
          setUser(userInfo)
          setIsAuthenticated(true)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        setError(error.response.data.error)
        setTimeout(() => setError(null), 3000)
      }
    }

    if (token) {
      verifyToken()
    }
  }, [])

  const signUp = async (newUser) => {
    console.log('newUser', newUser)
    try {
      setLoading(true)
      const {
        data: { token },
      } = await axios.post('http://localhost:5000/auth/signup', newUser)
      const { data: userInfo } = await axios.get(
        'http://localhost:5000/auth/me',
        { headers: { Authorization: token } }
      )

      localStorage.setItem('token', token) // why local storage?
      setUser(userInfo)
      setIsAuthenticated(true)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
      setTimeout(() => setError(null), 3000)
    }
  }

  const signIn = async (user) => {
    try {
      setLoading(true)
      const {
        data: { token },
      } = await axios.post('http://localhost:5000/auth/signin', user)
      const { data: userInfo } = await axios.get(
        'http://localhost:5000/auth/me',
        { headers: { Authorization: token } }
      )

      localStorage.setItem('token', token)
      setUser(userInfo)
      setIsAuthenticated(true)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error.response.data.error)
      setTimeout(() => setError(null), 3000)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    setUser({})
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, loading, error, signUp, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthState
