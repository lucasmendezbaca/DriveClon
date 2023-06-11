import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../sections/users/contexts/AuthContext'

export function usePrivateRoute(): void {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) {
      navigate('/')
    }
  }, [])
}
