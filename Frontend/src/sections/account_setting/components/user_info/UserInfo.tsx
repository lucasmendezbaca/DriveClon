import './UserInfo.css'
import { useAuth } from '../../../users/contexts/AuthContext'
import { useState } from 'react'
import UserImage from '../../../dashboard/components/user_image/UserImage'
import { updateUserName } from '../../../../modules/users/application/updateUserName'
import SubmitButton from '../../../../components/submit_button/SubmitButton'

function UserInfo(): JSX.Element {
  const { repository, currentUser, setCurrentUser } = useAuth()
  const [name, setName] = useState('')
  const [updateLoading, setUpdateLoading] = useState(false)

  function handleNameChange(event: any): void {
    setName(event.target.value)
  }

  function handleUpdateUser(): void {
    setUpdateLoading(true)

    updateUserName(repository, name)
      .then(() => {
        console.log('Usuario actualizado')

        setCurrentUser({
          ...currentUser,
          name: name,
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
            <input
              onChange={handleNameChange}
              className='account-info__sections__section__second-item account-info__sections__section__input'
              type='text'
              name='password'
              id=''
              placeholder={currentUser.name}
            />
          </div>
          <div className='account-info__sections__section'>
            <span className='account-info__sections__section__firs-item'>Email</span>
            <span className='account-info__sections__section__second-item'>{currentUser.email}</span>
          </div>
        </div>
        <SubmitButton
          onClick={handleUpdateUser}
          loading={updateLoading}
          textDefault='Actualizar perfil'
          textLoading='Actualizando ...'
        />
      </div>
    </>
  )
}

export default UserInfo
