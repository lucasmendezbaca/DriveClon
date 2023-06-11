import './ChangeUserImage.css'
import { useAuth } from '../../../../users/contexts/AuthContext'
import { updateUserImage } from '../../../../../modules/users/application/updateUserImage'
import { BASE_URL } from '../../../../../env'

function ChangeUserImage(): JSX.Element {
  const { repository, currentUser, setCurrentUser } = useAuth()

  function handleChange(event: any): void {
    const file = event.target.files[0]
    updateUserImage(repository, currentUser.id, file)
      .then(() => {
        console.log('Imagen de usuario actualizada')

        console.log(typeof currentUser.id)

        setCurrentUser({
          ...currentUser,
          image: `${BASE_URL}uploads/avatars/${currentUser.id}.jpg`,
        })
      })
      .catch((error) => {
        console.log(error)
        throw new Error('update failed')
      })
  }

  return (
    <>
      <div className='change-user-image'>
        <div className='change-user-image__header'>
          <h3 className='change-user-image__header__title'>Imagen de perfil</h3>
          <p className='change-user-image__header__text'>
            Si añades una foto, otras personas podrán reconocerte y sabrás si has iniciado sesión en tu cuenta
          </p>
        </div>
        <div className='change-user-image__image-container'>
          <img src={currentUser.image} alt='' />
        </div>
        <div className='change-user-image__buttons'>
          <label htmlFor='file' className='change-user-image__buttons__button'>
            Cambiar Imagen
          </label>
          <input
            className='change-user-image__input-type-file'
            onChange={handleChange}
            type='file'
            accept='image/*'
            id='file'
          />
        </div>
      </div>
    </>
  )
}

export default ChangeUserImage
