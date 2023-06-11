import './Dashboard.css'
import Menu from './components/menu/Menu'
import Aside from './components/aside/Aside'
import Main from './components/main/Main'
import PopperMenu from './components/PopperMenu/PopperMenu'
import MovileNewItemButton from './components/movile_new_item_button/MovileNewItemButton'
import NewItemMenu from './components/new_item_menu/NewItemMenu'
import { usePrivateRoute } from '../../hooks/usePrivateRoute'

function Dashboard(): JSX.Element {
  usePrivateRoute()

  function changeShow(): void {
    console.log('changeShow')
  }

  return (
    <div>
      <Menu />
      <div className='dashboard_main_container'>
        <Aside />
        <Main />
      </div>

      <PopperMenu
        button={<MovileNewItemButton />}
        menu={<NewItemMenu changeShow={changeShow} />}
        position='top-start'
      />
    </div>
  )
}

export default Dashboard
