import React, { useContext, useState, useEffect } from 'react'
import { createFirebaseUserRepository } from '../../../modules/users/infrastructure/FirebaseUserRepository'
import { subscribeToAuthChanges } from '../../../modules/users/application/subscribeToAuthChanges'
import { useFolders } from '../../Folders/contexts/FoldersContext'
import { BASE_URL } from '../../../env'

const AuthContext = React.createContext({})

export function useAuth(): any {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: any): JSX.Element {
  const repository = createFirebaseUserRepository()
  const Folders = useFolders()
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    subscribeToAuthChanges(repository, (user: any) => {
      if (user == null) {
        setCurrentUser({})
        setLoading(false)
        return
      }

      const adaptedUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      }

      setCurrentUser(adaptedUser)
      Folders.setCurrentFolder({
        id: adaptedUser.id,
        name: 'Mi Unidad',
        path: `${BASE_URL}uploads/items/${adaptedUser.id}/`,
      })
      console.log('AuthContext: ', adaptedUser)
      setLoading(false)
    })
  }, [])

  const value = {
    repository,
    currentUser,
    setCurrentUser,
  }

  if (loading) {
    return <div className='loading-screen'></div>
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
