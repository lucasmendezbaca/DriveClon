import './UserMenu.css'
import { useAuth } from '../../../users/contexts/AuthContext'
import { logOutUser } from '../../../../modules/users/application/logOutUser'
import { useNavigate, Link } from 'react-router-dom'
// import UserImage from '../user_image/UserImage'

function UserMenu(): JSX.Element {
  const { currentUser } = useAuth()
  const { repository } = useAuth()
  const navigate = useNavigate()

  function handleLogOut(): void {
    logOutUser(repository)
      .then(() => {
        navigate('/')
        console.log('Usuario deslogueado')
      })
      .catch(() => {
        throw new Error('logout failed')
      })
  }

  return (
    <>
      <div className='dashboard-user-menu'>
        <div className='dashboard-user-menu__info'>
          <div className='dashboard-user-menu__info__img-container'>
            <img src={currentUser.image} alt='' />
          </div>

          <div className='dashboard-user-menu__info__text'>
            <h3 className='dashboard-user-menu__info__text__name'>{currentUser.name}</h3>
            <p className='dashboard-user-menu__info__text__email'>{currentUser.email}</p>

            <Link to={'/account-settins'} className='dashboard-user-menu__info__text__botton'>
              Gestionar tu Cuenta
            </Link>
          </div>
        </div>
        <div onClick={handleLogOut} className='dashboard-user-menu__logout'>
          <img src='./imgs/logout_icon.svg' alt='' />
          <span>Cerrar Sesión</span>
        </div>
        <div className='dashboard-user-menu__policies'>
          <a className='dashboard-user-menu__policies__polici'>Políticas de privacidad</a>
          <a className='dashboard-user-menu__policies__polici'>Términos del servicio</a>
        </div>
      </div>
    </>
  )
}

export default UserMenu
