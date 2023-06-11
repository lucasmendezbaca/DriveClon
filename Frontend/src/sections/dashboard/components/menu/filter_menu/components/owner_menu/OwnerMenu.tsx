import '../Menus.css'

function OwnerMenu(): JSX.Element {
  return (
    <>
      <div className='filter-menu'>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>Cualquiera</span>
        </div>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>Soy el propiertario</span>
        </div>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>No soy el propietario</span>
        </div>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>Persona concreta</span>
        </div>
      </div>
    </>
  )
}

export default OwnerMenu