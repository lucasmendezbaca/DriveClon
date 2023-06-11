import './Footer.css'

function Footer(): JSX.Element {
  return (
    <>
      <footer className='footer'>
        <div className='footer-copiright'>
          <p>Desarrollado por Lucas Méndez Baca © 2023</p>
        </div>
        <div className='footer-contact'>
          <a href='https://www.linkedin.com/in/lucas-m%C3%A9ndez-baca-48851123a/' target='_black'>
            <img src='./imgs/linkedin-icon.svg' alt='icono de linkeding' />
          </a>
          <a href='https://github.com/lucasmendezbaca' target='_black'>
            <img src='./imgs/github-icon.svg' alt='icono de github' />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
