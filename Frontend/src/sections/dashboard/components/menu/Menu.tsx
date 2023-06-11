import './Menu.css'
import PopperMenu from '../PopperMenu/PopperMenu'
import UserMenu from '../user-menu/UserMenu'
import FilterMenu from './filter_menu/FilterMenu'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../users/contexts/AuthContext'
import { useStateForm } from '../../../users/hooks/useStateForm'
import OverlayContainer from '../../../../components/overlay_container/OverlayContainer'
import MovileMenu from '../movile_menu/MovileMenu'
// import { useFiles } from '../../../Files/contexts/FilesContext'
import { useItems } from '../main/context/ItemContext'

function Menu(): JSX.Element {
  const { currentUser } = useAuth()
  const { showUserForm, handleShowUserForm } = useStateForm()
  // const { setShowRecentFiles, setShowHighlightedFiles } = useFiles()
  const { setShowFilterItems } = useItems()

  const userImage = (
    <div className='user-image'>
      <img src={currentUser.image} alt='' />
    </div>
  )

  const filterIcon = <img className='search_file__icon search_file__icon--filter' src='./imgs/filter_icon.svg' alt='' />

  function handleLogoClick(): void {
    // setShowRecentFiles(false)
    // setShowHighlightedFiles(false)
    setShowFilterItems(false)
  }

  return (
    <>
      <OverlayContainer show={showUserForm} changeShow={handleShowUserForm} justify='flex-start' align='flex-start'>
        <MovileMenu handleShow={handleShowUserForm} />
      </OverlayContainer>

      <nav className='dashboard_menu'>
        <img
          onClick={handleShowUserForm}
          className='hamburger-menu-icon hamburger-menu-icon--dashboard'
          src='./imgs/hamburger-menu.svg'
          alt=''
        />

        <Link onClick={handleLogoClick} to={'/dashboard'} className='dashboard_menu__logo'>
          <img src='./imgs/drive.svg' alt='' />
          <span className='logo__drive'>Drive</span>
        </Link>

        <div className='search_file'>
          <img className='search_file__icon' src='./imgs/search-icon.svg' alt='' />
          <input
            className='search_file__input'
            type='text'
            name='search_file'
            id='search_file'
            placeholder='Buscar en Drive'
          />
          <PopperMenu button={filterIcon} menu={<FilterMenu />} position='bottom-end' />
        </div>
        <PopperMenu button={userImage} menu={<UserMenu />} />
      </nav>
    </>
  )
}

export default Menu
