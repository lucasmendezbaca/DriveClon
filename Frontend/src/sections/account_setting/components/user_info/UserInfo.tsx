import './UserInfo.css'
import { useAuth } from '../../../users/contexts/AuthContext'
import { useState, useEffect } from 'react'
import UserImage from '../../../dashboard/components/user_image/UserImage'
import { updateUserName } from '../../../../modules/users/application/updateUserName'
import SubmitButton from '../../../../components/submit_button/SubmitButton'
import { isUserNameValid, NAME_MIN_LENGTH, NAME_MAX_LENGTH } from '../../../../modules/users/domain/UserName'

function UserInfo(): JSX.Element {
  const { repository, currentUser, setCurrentUser } = useAuth()
  const [name, setName] = useState('')
  const [updateLoading, setUpdateLoading] = useState(false)

  const [nameError, setNameError] = useState('')

  useEffect(() => {
    if (name !== '') {
      if (!isUserNameValid(name)) {
        setNameError(`El nombre debe tener entre ${NAME_MIN_LENGTH} y ${NAME_MAX_LENGTH} caracteres`)
      } else {
        setNameError('')
      }
    } else {
      setNameError('')
    }
  }, [name])

  function handleNameChange(event: any): void {
    setName(event.target.value)
  }

  function handleUpdateUser(e: any): void {
    e.preventDefault()
    setUpdateLoading(true)

    if (nameError !== '' || name === '') {
      setNameError(`El nombre debe tener entre ${NAME_MIN_LENGTH} y ${NAME_MAX_LENGTH} caracteres`)
      setUpdateLoading(false)
      return
    }

    updateUserName(repository, name)
      .then(() => {
        console.log('Usuario actualizado')

        setCurrentUser({
          ...currentUser,
          name,
        })

        setUpdateLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setUpdateLoading(false)
        throw new Error('update failed')
      })
  }

  return (
    <>
      <div className='account-info'>
        <h3 className='account-info__title'>Información</h3>
        <p className='account-info__text'>Desde aquí puedes cambiar tu nombre de usuario y foto de perfil</p>
        <div className='account-info__sections'>
          <div className='account-info__sections__section'>
            <span className='account-info__sections__section__firs-item'>Foto</span>
            <span className='account-info__sections__section__second-item'>
              Una foto ayuda a personalizar tu cuenta
            </span>
            <UserImage />
          </div>
          <div className='account-info__sections__section'>
            <span className='account-info__sections__section__firs-item'>Nombre</span>
            <form onSubmit={handleUpdateUser} className='account-info__sections__section__second-item'>
              <input
                onChange={handleNameChange}
                className='account-info__sections__section__second-item account-info__sections__section__input'
                type='text'
                name='password'
                id=''
                placeholder={currentUser.name}
              />
            </form>
            {nameError !== '' && <p className='user_form__error'>{nameError}</p>}
          </div>
          <div className='account-info__sections__section'>
            <span className='account-info__sections__section__firs-item'>Email</span>
            <span className='account-info__sections__section__second-item'>{currentUser.email}</span>
          </div>
        </div>
        <SubmitButton
          onClick={() => {
            handleUpdateUser(event)
          }}
          loading={updateLoading}
          textDefault='Actualizar perfil'
          textLoading='Actualizando ...'
        />
      </div>
    </>
  )
}

export default UserInfo
