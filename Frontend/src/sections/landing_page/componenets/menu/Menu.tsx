import './Menu.css'
import { useState } from 'react'
import { useStateForm } from '../../../users/hooks/useStateForm'
import RegisterForm from '../../../users/components/register_form/RegisterForm'
import LoginForm from '../../../users/components/login_form/LoginFrom'
import OverlayContainer from '../../../../components/overlay_container/OverlayContainer'

function Menu(): JSX.Element {
  const registerForm = useStateForm()
  const loginForm = useStateForm()
  const hamburgerMenu = useStateForm()

  const [activeLink, setActiveLink] = useState('hero')

  const handleSectionClick = (section: string): any => {
    setActiveLink(section)
  }


  return (
    <>
      <OverlayContainer
        show={hamburgerMenu.showUserForm}
        changeShow={hamburgerMenu.handleShowUserForm}
        justify='flex-start'
        align='flex-start'
      >
        <nav className='hamburger-menu'>
          <div className='hamburger-menu__header'>
            <a className='menu__logo'>
              <img src='./imgs/drive.svg' alt='' />
              <img className='logo__google_img' src='./imgs/Google.svg' alt='' />
              <span className='logo__drive'>Drive</span>
            </a>
          </div>

          <div className='hamburger-menu__main-container'>
            <div className='hamburger-menu__main'>
              <a onClick={hamburgerMenu.handleShowUserForm} href='#hero' className='hamburger-menu__section'>
                Descripción general
              </a>
              <a onClick={hamburgerMenu.handleShowUserForm} href='#functions' className='hamburger-menu__section'>
                Funciones
              </a>
              <a onClick={hamburgerMenu.handleShowUserForm} className='hamburger-menu__section'>
                Precios
              </a>
            </div>

            <div className='hamburger-menu__buttons'>
              <button
                onClick={() => {
                  hamburgerMenu.handleShowUserForm()
                  registerForm.handleShowUserForm()
                }}
                className='menu__buttons__button menu__buttons__button--register hamburger-menu__buttons__button'
              >
                Registrate en Drive
              </button>
              <button
                onClick={() => {
                  hamburgerMenu.handleShowUserForm()
                  loginForm.handleShowUserForm()
                }}
                className='menu__buttons__button menu__buttons__button--login hamburger-menu__buttons__button'
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </nav>
      </OverlayContainer>

      <nav className='menu'>
        <img
          onClick={hamburgerMenu.handleShowUserForm}
          className='hamburger-menu-icon'
          src='./imgs/hamburger-menu.svg'
          alt=''
        />

        <a className='menu__logo'>
          <img src='./imgs/drive.svg' alt='' />
          <img className='logo__google_img' src='./imgs/Google.svg' alt='' />
          <span className='logo__drive'>Drive</span>
        </a>

        <div className='menu__sections'>
          <a
            onClick={() => handleSectionClick('hero')}
            href='#hero'
            className={`menu__sections__section ${activeLink === 'hero' ? 'menu__sections__section--active' : ''}`}
          >
            Descripción general
          </a>
          <a
            onClick={() => handleSectionClick('functions')}
            href='#functions'
            className={`menu__sections__section ${activeLink === 'functions' ? 'menu__sections__section--active' : ''}`}
          >
            Funciones
          </a>
          <a
            onClick={() => handleSectionClick('prices')}
            href='#prices'
            className={`menu__sections__section ${activeLink === 'prices' ? 'menu__sections__section--active' : ''}`}
          >
            Precios
          </a>
        </div>

        <div className='menu__buttons'>
          <button onClick={loginForm.handleShowUserForm} className='menu__buttons__button menu__buttons__button--login'>
            Iniciar Sesión
          </button>
          <button
            onClick={registerForm.handleShowUserForm}
            className='menu__buttons__button menu__buttons__button--register'
          >
            Registrate en Drive
          </button>
        </div>
      </nav>
      <OverlayContainer show={loginForm.showUserForm} changeShow={loginForm.handleShowUserForm}>
        <LoginForm />
      </OverlayContainer>

      <OverlayContainer show={registerForm.showUserForm} changeShow={registerForm.handleShowUserForm}>
        <RegisterForm />
      </OverlayContainer>
    </>
  )
}

export default Menu
