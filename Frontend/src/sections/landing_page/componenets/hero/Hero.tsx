import './Hero.css'
import { useStateForm } from '../../../users/hooks/useStateForm'
import OverlayContainer from '../../../../components/overlay_container/OverlayContainer'
import LoginForm from '../../../users/components/login_form/LoginFrom'
import RegisterForm from '../../../users/components/register_form/RegisterForm'

function Hero(): JSX.Element {

  const registerForm = useStateForm()
  const loginForm = useStateForm()

  return (
    <>
        <section id='hero' className="hero">
            <div className="hero__principal_container">
                <div className="hero__info">
                    <h1 className="hero__info__tilte">Acceso sencillo y seguro a tu contenido</h1>
                    <p className="hero__info__text">Guarda, comparte y colabora en archivos y carpetas desde tu dispositivo móvil, tablet u ordenador</p>
                    <div className="hero__buttons">
                        <button onClick={registerForm.handleShowUserForm} className="hero__buttons__button hero__buttons__button__try">Probar Drive ahora</button>
                        <button onClick={loginForm.handleShowUserForm} className="hero__buttons__button hero__buttons__button__go">Ir a Drive</button>
                    </div>
                    <div className="hero__dont_have_count">
                        <span className="hero__dont_have_count__text">¿No tienes cuenta?</span>
                        <span className="hero__dont_have_count__cost">Registrate por 0€</span>
                    </div>
                </div>
                <div className="hero__img_container">
                    <img className="hero__img" src="./imgs/hero.jpg" alt="" />
                </div>
            </div>
            <a className="hero__button_scroll">
                <p className="hero__button_scroll__text">Descubre todo lo que puedes hacer con Google Drive</p>
                <i className="hero__button_scroll__icon"><img src="./imgs/expand_more.svg" alt="" /></i>
            </a>
        </section>

        <OverlayContainer show={loginForm.showUserForm} changeShow={loginForm.handleShowUserForm}>
            <LoginForm />
        </OverlayContainer>

        <OverlayContainer show={registerForm.showUserForm} changeShow={registerForm.handleShowUserForm}>
            <RegisterForm />
        </OverlayContainer>
    </>
  )
}

export default Hero
