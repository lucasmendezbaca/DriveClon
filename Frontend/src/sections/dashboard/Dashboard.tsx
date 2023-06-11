import './Dashboard.css'
import Menu from './components/menu/Menu'
import Aside from './components/aside/Aside'
import Main from './components/main/default_main/Main'
import PopperMenu from './components/PopperMenu/PopperMenu'
import MovileNewItemButton from './components/movile_new_item_button/MovileNewItemButton'
import NewItemMenu from './components/new_item_menu/NewItemMenu'
import { usePrivateRoute } from '../../hooks/usePrivateRoute'
import { useStateForm } from '../users/hooks/useStateForm'
import OverlayContainer from '../../components/overlay_container/OverlayContainer'
import CreateFolderForm from './components/create_folder_form/CreateFolderForm'

function Dashboard(): JSX.Element {
  usePrivateRoute()
  const { showUserForm, handleShowUserForm } = useStateForm()

  return (
    <>
      <div className='dashboard'>
        <Menu />
        <div className='dashboard_main_container'>
          <Aside />
          <Main />
        </div>

        <PopperMenu
          button={<MovileNewItemButton />}
          menu={<NewItemMenu changeShow={handleShowUserForm} />}
          position='top-start'
        />
      </div>

      <OverlayContainer show={showUserForm} changeShow={handleShowUserForm} justify='center' align='center'>
        <CreateFolderForm changeShow={handleShowUserForm} />
      </OverlayContainer>
    </>
  )
}

export default Dashboard
