import './UserPassword.css'
import { updateUserPassword } from '../../../../modules/users/application/updateUserPassword'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../users/contexts/AuthContext'
import SubmitButton from '../../../../components/submit_button/SubmitButton'
import { isUserPasswordValid } from '../../../../modules/users/domain/UserPassword'

function UserPassword(): JSX.Element {
  const { repository } = useAuth()

  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')

  const [updateLoading, setUpdateLoading] = useState(false)

  const [passwordError, setPasswordError] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState('')
  const [formError, setFormError] = useState('')

  useEffect(() => {
    if (newPassword !== '') {
      if (!isUserPasswordValid(newPassword)) {
        setPasswordError(
          'La contraseña debe tener al menos 8 caracteres con al menos una minuscula, una mayuscula y un número'
        )
      } else {
        setPasswordError('')
      }
    } else {
      setPasswordError('')
    }

    if (repeatNewPassword !== '') {
      if (!isUserPasswordValid(repeatNewPassword)) {
        setRepeatPasswordError(
          'La contraseña debe tener al menos 8 caracteres con al menos una minuscula, una mayuscula y un número'
        )
      } else {
        setRepeatPasswordError('')
      }
    } else {
      setRepeatPasswordError('')
    }

    if (formError !== '') {
      setFormError('')
    }
  }, [newPassword, repeatNewPassword])

  function handleChangeInputPassword(event: any): void {
    if (event.target.name === 'newPassword') {
      setNewPassword(event.target.value)
    } else {
      setRepeatNewPassword(event.target.value)
    }
  }

  function handleChangePassword(e: any): void {
    e.preventDefault()

    if (newPassword !== repeatNewPassword) {
      setFormError('Las contraseñas no coinciden')
      return
    } else if (passwordError !== '' || repeatPasswordError !== '' || newPassword === '' || repeatNewPassword === '') {
      setFormError('Por favor, escriba las contraseñas de forma correcta')
      setUpdateLoading(false)
      return
    }

    setUpdateLoading(true)

    updateUserPassword(repository, newPassword)
      .then(() => {
        console.log('Contraseña actualizada')
        setUpdateLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setFormError(
          'Ha ocurrido un error al actualizar la contraseña, es probable que su sesión haya expirado, por favor, vuelva a iniciar sesión'
        )
        setUpdateLoading(false)
      })
  }

  return (
    <>
      <div className='account-info'>
        <h3 className='account-info__title'>Cambiar contraseña</h3>
        <p className='account-info__text'>Introduce en los siguientes campos tu nueva contraseña</p>
        <div className='account-info__sections'>
          <div className='account-info__sections__section'>
            <span className='account-info__sections__section__firs-item'>Nueva contraseña</span>
            <form onSubmit={handleChangePassword} className='account-info__sections__section__second-item'>
              <input
                onChange={handleChangeInputPassword}
                className='account-info__sections__section__second-item account-info__sections__section__input'
                type='password'
                name='newPassword'
                id=''
                placeholder='Nueva contraseña'
              />
            </form>
            {passwordError !== '' && (
              <p className='user_form__error user_form__error--account-settings'>{passwordError}</p>
            )}
          </div>
          <div className='account-info__sections__section'>
            <span className='account-info__sections__section__firs-item'>Repite la nueva contraseña</span>
            <form onSubmit={handleChangePassword} className='account-info__sections__section__second-item'>
              <input
                onChange={handleChangeInputPassword}
                className='account-info__sections__section__second-item account-info__sections__section__input'
                type='password'
                name='repeatNewPassword'
                id=''
                placeholder='Repite la nueva contraseña'
              />
            </form>
            {repeatPasswordError !== '' && (
              <p className='user_form__error user_form__error--account-settings'>{repeatPasswordError}</p>
            )}
          </div>
        </div>
        {/* <button onClick={handleChangePassword} className='account-info__sections__section__button'>Cambiar contraseña</button> */}
        {formError !== '' && <p className='user_form__error user_form__error--account-settings'>{formError}</p>}
        <SubmitButton
          loading={updateLoading}
          onClick={() => {
            handleChangePassword(event)
          }}
          textDefault='Cambiar contraseña'
          textLoading='Cambiando ...'
        />
      </div>
    </>
  )
}

export default UserPassword
