import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

export default function ProtectedRoute({ children, requiredRole = null }) {
  const authenticated = isAuthenticated()
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  
  if (!authenticated) {
    return <Navigate to="/contact" replace />
  }
  
  if (requiredRole && user.role !== requiredRole && user.role !== 'ADMIN') {
    return <Navigate to="/" replace />
  }
  
  return children
}



