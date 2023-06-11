import './UserImage.css'
import OverlayContainer from '../../../../components/overlay_container/OverlayContainer'
import ChangeUserImage from './change_user_image/ChangeUserImage'
import { useStateForm } from '../../../users/hooks/useStateForm'
import { useAuth } from '../../../users/contexts/AuthContext'

function UserImage(): JSX.Element {
  const { currentUser } = useAuth()
  const { showUserForm, handleShowUserForm } = useStateForm()
  return (
    <>
      <div onClick={handleShowUserForm} className='dashboard-user-menu__info__img-container'>
        <img src={currentUser.image} alt='' />
        <div className='dashboard-user-menu__info__img-container__icon-picture'></div>
      </div>

      <OverlayContainer show={showUserForm} changeShow={handleShowUserForm}>
        <ChangeUserImage />
      </OverlayContainer>
    </>
  )
}

export default UserImage
