import './UserPassword.css'
import { updateUserPassword } from '../../../../modules/users/application/updateUserPassword'
import { useState } from 'react'
import { useAuth } from '../../../users/contexts/AuthContext'
import SubmitButton from '../../../../components/submit_button/SubmitButton'

function UserPassword(): JSX.Element {
  const { repository } = useAuth()

  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')

  const [updateLoading, setUpdateLoading] = useState(false)

  function handleChangeInputPassword(event: any): void {
    if (event.target.name === 'newPassword') {
      setNewPassword(event.target.value)
    } else {
      setRepeatNewPassword(event.target.value)
    }
  }

  function handleChangePassword(): void {
    if (newPassword !== repeatNewPassword) {
      throw new Error('Las contraseñas no coinciden')
    }

    setUpdateLoading(true)

    updateUserPassword(repository, newPassword)
      .then(() => {
        console.log('Contraseña actualizada')
        setUpdateLoading(false)
      })
      .catch((error) => {
        console.log(error)
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
            <input
              onChange={handleChangeInputPassword}
              className='account-info__sections__section__second-item account-info__sections__section__input'
              type='password'
              name='newPassword'
              id=''
              placeholder='Nueva contraseña'
            />
          </div>
          <div className='account-info__sections__section'>
            <span className='account-info__sections__section__firs-item'>Repite la nueva contraseña</span>
            <input
              onChange={handleChangeInputPassword}
              className='account-info__sections__section__second-item account-info__sections__section__input'
              type='password'
              name='repeatNewPassword'
              id=''
              placeholder='Repite la nueva contraseña'
            />
          </div>
        </div>
        {/* <button onClick={handleChangePassword} className='account-info__sections__section__button'>Cambiar contraseña</button> */}
        <SubmitButton loading={updateLoading} onClick={handleChangePassword} textDefault='Cambiar contraseña' textLoading='Cambiando ...' />
      </div>
    </>
  )
}

export default UserPassword
