import './MovileMenu.css'
import Section from '../aside/components/section/Section'
import { useState } from 'react'

interface MovileMenuProps {
  handleShow: () => void
}

function MovileMenu({ handleShow }: MovileMenuProps): JSX.Element {
  const [activeSection, setActiveSection] = useState('Mi unidad')

  function handleSetActiveSection(name: string): void {
    handleShow()
    setActiveSection(name)
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
          <Section
            handleSetActive={handleSetActiveSection}
            name='Mi unidad'
            iconUrl='./imgs/icono-unidad.svg'
            active={activeSection}
          />
          <Section
            handleSetActive={handleSetActiveSection}
            name='Compartido conmigo'
            iconUrl='./imgs/icono-compartido.svg'
            active={activeSection}
          />
          <Section
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
          />
          <Section
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
          />
        </div>
      </nav>
    </>
  )
}

export default MovileMenu
