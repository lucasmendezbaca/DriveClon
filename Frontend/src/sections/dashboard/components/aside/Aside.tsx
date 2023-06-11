import './Aside.css'
// import Section from './components/section/Section'
import PopperMenu from '../PopperMenu/PopperMenu'
import NewItemButton from './components/new_item_button/NewItemButton'
import NewItemMenu from '../new_item_menu/NewItemMenu'
import { useStateForm } from '../../../users/hooks/useStateForm'
import OverlayContainer from '../../../../components/overlay_container/OverlayContainer'
import CreateFolderForm from '../create_folder_form/CreateFolderForm'
// import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Aside(): JSX.Element {
  const { showUserForm, handleShowUserForm } = useStateForm()
  // const [activeSection, setActiveSection] = useState('Mi unidad')

  // function handleSetActiveSection(name: string): void {
  //   setActiveSection(name)
  // }

  return (
    <>
      <aside className='dashboard_aside'>
        <PopperMenu button={<NewItemButton />} menu={<NewItemMenu changeShow={handleShowUserForm} />} />
        <div className='dashboard_aside__sections'>
          <NavLink
            end
            to='/dashboard'
            className={({ isActive }) => (isActive ? 'dashboard_aside__sections__section--active' : '')}
          >
            <div className='dashboard_aside__sections__section'>
              <img className='dashboard_aside__sections__section__icon' src='./imgs/icono-unidad.svg' alt='' />
              <span className='dashboard_aside__section__name'>Mi unidad</span>
            </div>
          </NavLink>
          <NavLink
            to='recent'
            className={({ isActive }) => (isActive ? 'dashboard_aside__sections__section--active' : '')}
          >
            <div className='dashboard_aside__sections__section'>
              <img className='dashboard_aside__sections__section__icon' src='./imgs/icono-reciente.svg' alt='' />
              <span className='dashboard_aside__section__name'>Reciente</span>
            </div>
          </NavLink>
          <NavLink
            to='highlighted'
            className={({ isActive }) => (isActive ? 'dashboard_aside__sections__section--active' : '')}
          >
            <div className='dashboard_aside__sections__section'>
              <img className='dashboard_aside__sections__section__icon' src='./imgs/icono-destacados.svg' alt='' />
              <span className='dashboard_aside__section__name'>Destacados</span>
            </div>
          </NavLink>
          {/* <Section
            name='Mi unidad'
            iconUrl='./imgs/icono-unidad.svg'
            active={activeSection}
            handleSetActive={handleSetActiveSection}
          /> */}
          {/* <Section
            name='Compartido conmigo'
            iconUrl='./imgs/icono-compartido.svg'
            active={activeSection}
            handleSetActive={handleSetActiveSection}
          /> */}
          {/* <Section
            name='Reciente'
            iconUrl='./imgs/icono-reciente.svg'
            active={activeSection}
            handleSetActive={handleSetActiveSection}
          /> */}
          {/* <Section
            name='Destacados'
            iconUrl='./imgs/icono-destacados.svg'
            active={activeSection}
            handleSetActive={handleSetActiveSection}
          /> */}
          {/* <Section
            name='Spam'
            iconUrl='./imgs/icono-spam.svg'
            active={activeSection}
            handleSetActive={handleSetActiveSection}
          />
          <Section
            name='Papelera'
            iconUrl='./imgs/icono-papelera.svg'
            active={activeSection}
            handleSetActive={handleSetActiveSection}
          /> */}
        </div>
      </aside>

      <OverlayContainer show={showUserForm} changeShow={handleShowUserForm} justify='center' align='center'>
        <CreateFolderForm changeShow={handleShowUserForm} />
      </OverlayContainer>
    </>
  )
}

export default Aside
