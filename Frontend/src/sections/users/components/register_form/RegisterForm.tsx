import { registerUser } from '../../../../modules/users/application/registerUser'
import { getCurrentUser } from '../../../../modules/users/application/getCurrentUser'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { getRandomNumber, formatDate } from '../../../../utils/utils'
import { useState, useEffect } from 'react'
import SubmitButton from '../../../../components/submit_button/SubmitButton'
import LoginWithPlatforms from '../login_with_platforms/LoginWithPlatforms'
import './RegisterForm.css'

import { useFolders } from '../../../Folders/contexts/FoldersContext'
import { createRootFolder } from '../../../../modules/folders/aplication/createRootFolder'
import { BASE_URL } from '../../../../env'
import { isUserEmailValid } from '../../../../modules/users/domain/UserEmail'
import { isUserPasswordValid } from '../../../../modules/users/domain/UserPassword'

function RegisterForm(): JSX.Element {
  const navigate = useNavigate()
  const { repository, setCurrentUser } = useAuth()
  const Folders = useFolders()

  const [registerLoading, setRegisterLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (email !== '') {
      if (!isUserEmailValid(email)) {
        setEmailError('El correo electrónico no es válido')
      } else {
        setEmailError('')
      }
    }

    if (password !== '') {
      if (!isUserPasswordValid(password)) {
        setPasswordError(
          'La contraseña debe tener al menos 8 caracteres con al menos una minuscula, una mayuscula y un número'
        )
      } else {
        setPasswordError('')
      }
    }

    if (error !== '') {
      setError('')
    }
  }, [email, password])

  function handleChangeEmail(event: any): void {
    setEmail(event.target.value)
  }

  function handleChangePassword(event: any): void {
    setPassword(event.target.value)
  }

  function handleSubmit(event: any): void {
    event.preventDefault()
    setRegisterLoading(true)

    if (emailError !== '' || passwordError !== '' || email === '' || password === '') {
      setError('Por favor, rellene todos los campos de forma correcta')
      setRegisterLoading(false)
      return
    }

    const randomNumber = getRandomNumber(1, 1000000)

    const user = {
      id: '1',
      name: 'user' + randomNumber.toString(),
      email,
      password,
      image: `${BASE_URL}uploads/avatars/default-user-img.png`,
      rootFolderId: '',
    }

    registerUser(repository, user)
      .then(() => {
        console.log('RegisterForm: Usuario registrado')
        getCurrentUser(repository)
          .then((currentUser) => {
            setCurrentUser({ ...currentUser, name: user.name, image: user.image })
            console.log('RegisterForm: getCurrentUser', { ...currentUser, name: user.name, image: user.image })

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
            setRegisterLoading(false)
          })
          .catch((error) => {
            console.log(error)
            setRegisterLoading(false)
          })
      })
      .catch((error) => {
        console.log(error)
        setRegisterLoading(false)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='user_form'>
        <h2 className='user_form__title'>Registro</h2>
        <div className='user_form__section'>
          <input
            onChange={handleChangeEmail}
            className='user_form__section__input'
            type='text'
            name='email'
            placeholder='Correo Electrónico'
          />
          {emailError !== '' && <p className='user_form__error'>{emailError}</p>}
        </div>
        <div className='user_form__section'>
          <input
            onChange={handleChangePassword}
            className='user_form__section__input'
            type='password'
            name='password'
            placeholder='Contraseña'
          />
          {passwordError !== '' && <p className='user_form__error'>{passwordError}</p>}
        </div>
        <div className='user-form__options'>
          <span className='user-form__options__submit-alternative'>¿Ya tienes cuenta?</span>
          <SubmitButton loading={registerLoading} textDefault='Registrarse' textLoading='Registrando ...' />
        </div>
        {error !== '' && <p className='user_form__error'>{error}</p>}
      </form>

      <LoginWithPlatforms />
    </>
  )
}

export default RegisterForm
