import './LoginWithPlatforms.css'
import { loginWithGoogle } from '../../../../modules/users/application/loginWithGoogle'
import { loginWithGithub } from '../../../../modules/users/application/loginWhitGithub'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../../../modules/users/application/getCurrentUser'
import { formatDate } from '../../../../utils/utils'
import { BASE_URL } from '../../../../env'
import { createRootFolder } from '../../../../modules/folders/aplication/createRootFolder'
import { useFolders } from '../../../Folders/contexts/FoldersContext'

function LoginWithPlatforms(): JSX.Element {
  const { repository } = useAuth()
  const Folders = useFolders()
  const navigate = useNavigate()

  function handleLoginWithGoogle(): void {
    loginWithGoogle(repository)
      .then(() => {
        console.log('Usuario logeado con Google')

        getCurrentUser(repository)
          .then((currentUser) => {
            console.log('LoginWithPlatforms CurrentUser:', currentUser)
            const currentDate = formatDate(new Date())
            const rootFolder = {
              id: currentUser.id,
              userId: currentUser.id,
              name: 'Mi unidad',
              path: `${BASE_URL}uploads/items/${currentUser.id}/`,
              highlighted: 0,
              createDate: currentDate,
              updateDate: currentDate,
            }

            createRootFolder(Folders.repository, rootFolder)
              .then((res) => {
                console.log('RegisterForm: Root folder created: ', res)
              })
              .catch((err) => {
                console.log('RegisterForm: Error creating root folder: ', err)
              })

            navigate('/dashboard')
            // setRegisterLoading(false)
          })
          .catch((error) => {
            console.log(error)
            // setRegisterLoading(false)
          })
      })
      .catch((error) => {
        console.log(error)
        throw new Error('login with google failed')
      })
  }

  function handleLoginWithGithub(): void {
    loginWithGithub(repository)
      .then(() => {
        console.log('Usuario logeado con Google')

        getCurrentUser(repository)
          .then((currentUser) => {
            console.log('LoginWithPlatforms CurrentUser:', currentUser)
            const currentDate = formatDate(new Date())
            const rootFolder = {
              id: currentUser.id,
              userId: currentUser.id,
              name: 'Mi unidad',
              path: `${BASE_URL}uploads/items/${currentUser.id}/`,
              highlighted: 0,
              createDate: currentDate,
              updateDate: currentDate,
            }

            createRootFolder(Folders.repository, rootFolder)
              .then((res) => {
                console.log('RegisterForm: Root folder created: ', res)
              })
              .catch((err) => {
                console.log('RegisterForm: Error creating root folder: ', err)
              })

            navigate('/dashboard')
            // setRegisterLoading(false)
          })
          .catch((error) => {
            console.log(error)
            // setRegisterLoading(false)
          })
      })
      .catch((error) => {
        console.log(error)
        throw new Error('login with google failed')
      })
  }

  return (
    <div className='login-platforms'>
      <p className='login-platforms__text'>O iniciar sesión con:</p>
      <div className='login-platforms__buttons'>
        <button onClick={handleLoginWithGoogle} className='login-platforms__buttons__button'>
          <div className='login-platforms__buttons__button__img-container'>
            <img src='https://www.google.com/favicon.ico' alt='google icon' />
          </div>
          <span className='login-platforms__buttons__button__text'>Sing up with Google</span>
        </button>
        <button
          onClick={handleLoginWithGithub}
          className='login-platforms__buttons__button login-platforms__buttons__button--github'
        >
          <div className='login-platforms__buttons__button__img-container'>
            <img src='./imgs/logo-github.svg' alt='google icon' />
          </div>
          <span className='login-platforms__buttons__button__text'>Sing up with GitHub</span>
        </button>
      </div>
    </div>
  )
}

export default LoginWithPlatforms
