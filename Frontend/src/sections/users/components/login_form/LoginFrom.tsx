import { logInUser } from '../../../../modules/users/application/logInUser'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SubmitButton from '../../../../components/submit_button/SubmitButton'
import LoginWithPlatforms from '../login_with_platforms/LoginWithPlatforms'
import { isUserEmailValid } from '../../../../modules/users/domain/UserEmail'
import { isUserPasswordValid } from '../../../../modules/users/domain/UserPassword'

function LoginForm(): JSX.Element {
  const navigate = useNavigate()
  const { repository } = useAuth()
  const [loginLoading, setLoginLoading] = useState(false)

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
    setLoginLoading(true)

    if (emailError !== '' || passwordError !== '' || email === '' || password === '') {
      setError('Por favor, rellene todos los campos de forma correcta')
      setLoginLoading(false)
      return
    }

    const user = {
      id: '1',
      name: 'Lucas Méndez',
      email,
      password,
      image: 'https://picsum.photos/200/300',
      rootFolderId: '',
    }

    logInUser(repository, user)
      .then(() => {
        console.log('Usuario logeado')
        navigate('/dashboard')
        setLoginLoading(false)
      })
      .catch(() => {
        setLoginLoading(false)
        setError('El correo electrónico o la contraseña son incorrectos')
        throw new Error('login failed')
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='user_form'>
        <h2 className='user_form__title'>Iniciar Sesión</h2>
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
          <span className='user-form__options__submit-alternative'>¿No tienes cuenta?</span>
          <SubmitButton loading={loginLoading} textDefault='Entrar' textLoading='Entrando ...' />
        </div>
        {error !== '' && <p className='user_form__error'>{error}</p>}
      </form>
      <LoginWithPlatforms />
    </>
  )
}

export default LoginForm
