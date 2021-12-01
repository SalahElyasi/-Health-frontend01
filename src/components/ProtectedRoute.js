import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext)
  let location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to='/signin' state={{ from: location }} />
  }

  return children
}

//   const { isAuthenticated } = useContext(AuthContext)
//   return isAuthenticated ? (
//     <Route {...rest} render={() => <Component />} />
//   ) : (
//     <Navigate to='/signin' />
//   )
// }

export default ProtectedRoute
