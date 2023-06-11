import './MovileMenu.css'
import { NavLink } from 'react-router-dom'

interface MovileMenuProps {
  handleShow: () => void
}

function MovileMenu({ handleShow }: MovileMenuProps): JSX.Element {
  function handleSetActiveSection(): void {
    handleShow()
  }

  return (
    <>
      <nav className='hamburger-menu'>
        <div className='hamburger-menu__header'>
          <a className='menu__logo menu__logo--dashboard'>
            <img src='./imgs/drive.svg' alt='' />
            <span className='logo__drive'>Drive</span>
          </a>
        </div>

        <div className='dashboard_aside__sections dashboard_aside__sections--dashboard'>
          <NavLink
            onClick={handleSetActiveSection}
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
            onClick={handleSetActiveSection}
            to='recent'
            className={({ isActive }) => (isActive ? 'dashboard_aside__sections__section--active' : '')}
          >
            <div className='dashboard_aside__sections__section'>
              <img className='dashboard_aside__sections__section__icon' src='./imgs/icono-reciente.svg' alt='' />
              <span className='dashboard_aside__section__name'>Reciente</span>
            </div>
          </NavLink>
          <NavLink
            onClick={handleSetActiveSection}
            to='highlighted'
            className={({ isActive }) => (isActive ? 'dashboard_aside__sections__section--active' : '')}
          >
            <div className='dashboard_aside__sections__section'>
              <img className='dashboard_aside__sections__section__icon' src='./imgs/icono-destacados.svg' alt='' />
              <span className='dashboard_aside__section__name'>Destacados</span>
            </div>
          </NavLink>
          {/* <Section
            handleSetActive={handleSetActiveSection}
            name='Mi unidad'
            iconUrl='./imgs/icono-unidad.svg'
            active={activeSection}
          /> */}
          {/* <Section
            handleSetActive={handleSetActiveSection}
            name='Compartido conmigo'
            iconUrl='./imgs/icono-compartido.svg'
            active={activeSection}
          /> */}
          {/* <Section
            handleSetActive={handleSetActiveSection}
            name='Reciente'
            iconUrl='./imgs/icono-reciente.svg'
            active={activeSection}
          />
          <Section
            handleSetActive={handleSetActiveSection}
            name='Destacados'
            iconUrl='./imgs/icono-destacados.svg'
            active={activeSection}
          /> */}
          {/* <Section
            handleSetActive={handleSetActiveSection}
            name='Spam'
            iconUrl='./imgs/icono-spam.svg'
            active={activeSection}
          />
          <Section
            handleSetActive={handleSetActiveSection}
            name='Papelera'
            iconUrl='./imgs/icono-papelera.svg'
            active={activeSection}
          /> */}
        </div>
      </nav>
    </>
  )
}

export default MovileMenu
