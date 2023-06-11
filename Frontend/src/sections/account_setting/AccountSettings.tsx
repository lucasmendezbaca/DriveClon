import './AccountSettings.css'
import Menu from './components/menu/Menu'
import { useAuth } from '../users/contexts/AuthContext'
import UserInfo from './components/user_info/UserInfo'
import UserPassword from './components/user_password/UserPassword'
import { usePrivateRoute } from '../../hooks/usePrivateRoute'

function AccountSettings(): JSX.Element {
  const { currentUser } = useAuth()
  usePrivateRoute()

  return (
    <>
      <Menu />
      <div className='account-settings-container'>
        <div className='account-header'>
          <h1 className='account-header__title'>Bienvenido {currentUser.name}</h1>
        </div>
        <UserInfo />
        <UserPassword />
      </div>
    </>
  )
}

export default AccountSettings
