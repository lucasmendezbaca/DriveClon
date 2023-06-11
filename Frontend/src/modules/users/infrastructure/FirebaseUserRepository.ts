import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth'
import { auth } from '../../../firebase'
import { type User } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'
import { type UserName } from '../domain/UserName'
import { type UserPassword } from '../domain/UserPassword'
import { type UserImage } from '../domain/UserImage'
import { type UserId } from '../domain/UserId'
import { BASE_URL, API_BASE_URL } from '../../../env'

export function createFirebaseUserRepository(): UserRepository {
  return {
    registerUser,
    logIn,
    loginWithGoogle,
    loginWithGithub,
    getCurrentUser,
    logOut,
    updateUser,
    updateUserName,
    updateUserImage,
    updateUserPassword,
    subscribeToAuthChanges,
    createUserWithRootFolder,
    getUserRootFolderId,
  }
}

async function registerUser(user: User): Promise<void> {
  const { name, email, password, image } = user

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log('SE CREO EL USUARIO')
      console.log(user)

      updateUser(name, image)
        .then(() => {
          console.log('SE ACTUALIZO EL PERFIL')
        })
        .catch((error) => {
          console.log('NO SE ACTUALIZO EL PERFIL')
          console.log(error)
        })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}

async function createUserWithRootFolder(user: User): Promise<void> {
  const { id, rootFolderId } = user
  console.log(JSON.stringify({ id, rootFolderId }))
  try {
    const response = await fetch(`${API_BASE_URL}api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${auth.getToken()}`,
      },
      body: JSON.stringify({ id, rootFolderId }),
    })

    if (!response.ok) {
      throw new Error('Error al crear el usuario con rootFolderId')
    }
  } catch (error) {
    console.error('Error en la solicitud API:', error)
    throw error
  }
}

async function getUserRootFolderId(userId: UserId): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}users/${userId}`, {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${auth.getToken()}`,
        // cabecera para cors
        // 'Access-Control-Allow-Origin': '*',
      },
    })

    if (!response.ok) {
      throw new Error('Error al obtener el rootFolderId del usuario')
    }

    const rootFolderId = await response.json()

    return rootFolderId
  } catch (error) {
    console.error('Error en la solicitud API:', error)
    throw error
  }
}

async function logIn(user: User): Promise<void> {
  const email = user.email
  const password = user.password

  await signInWithEmailAndPassword(auth, email, password)
}

async function loginWithGoogle(): Promise<void> {
  await signInWithPopup(auth, new GoogleAuthProvider())
}

async function loginWithGithub(): Promise<void> {
  await signInWithPopup(auth, new GithubAuthProvider())
}

async function getCurrentUser(): Promise<User> {
  return await new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user != null) {
        const adaptedUser: User = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          password: user.password,
          image: user.photoURL,
          rootFolderId: user.rootFolderId,
        }

        resolve(adaptedUser)
      } else {
        reject(new Error('No se ha encontrado un usuario autenticado'))
      }

      unsubscribe()
    })
  })
}

export function subscribeToAuthChanges(callback: (user: any) => void): any {
  return auth.onAuthStateChanged(callback)
}

async function logOut(): Promise<void> {
  await auth.signOut()
}

async function updateUser(
  name: UserName = 'Usuario 123',
  image: UserImage = `${BASE_URL}imgs/default-user-img.png`
): Promise<void> {
  if (auth.currentUser == null) {
    console.log('EL USUARIO ES NULL')
    return
  }

  console.log('Current user: ', auth.currentUser)

  await updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: image,
  })
}

async function updateUserName(name: UserName): Promise<void> {
  if (auth.currentUser == null) {
    console.log('EL USUARIO ES NULL')
    return
  }

  console.log('Current user: ', auth.currentUser)

  await updateProfile(auth.currentUser, {
    displayName: name,
  })
}

async function updateUserImage(id: UserId, image: File): Promise<void> {
  try {
    const formData = new FormData()
    formData.append('avatar', image)

    const response = await fetch(`${API_BASE_URL}users/upload-avatar/${id}`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Error al crear actualizar la imagen del usuario')
    }

    if (auth.currentUser == null) {
      console.log('EL USUARIO ES NULL')
      return
    }

    console.log('Current user: ', auth.currentUser)

    await updateProfile(auth.currentUser, {
      photoURL: `${BASE_URL}uploads/avatars/${id}${image.name.substring(image.name.lastIndexOf('.'))}`,
    })
  } catch (error) {
    console.error('Error en la solicitud API:', error)
    throw error
  }
}

async function updateUserPassword(newPassword: UserPassword): Promise<void> {
  if (auth.currentUser == null) {
    console.log('EL USUARIO ES NULL')
    return
  }

  const user = auth.currentUser

  await updatePassword(user, newPassword)
}
