import './Menu.css'
import PopperMenu from '../../../dashboard/components/PopperMenu/PopperMenu'
import UserMenu from '../../../dashboard/components/user-menu/UserMenu'
import { useAuth } from '../../../users/contexts/AuthContext'
import { Link } from 'react-router-dom'

function Menu(): JSX.Element {
  const { currentUser } = useAuth()

  const userImage = (
    <div className='user-image'>
      <img src={currentUser.image} alt="" />
    </div>
  )

  return (
    <>
        <nav className="dashboard_menu">
            <Link to={'/dashboard'} className="dashboard_menu__logo">
                <img src="./imgs/drive.svg" alt="" />
                <span className="logo__drive">Drive</span>
            </Link>

            <PopperMenu button={userImage} menu={<UserMenu />} />
        </nav>
    </>
  )
}

export default Menu
