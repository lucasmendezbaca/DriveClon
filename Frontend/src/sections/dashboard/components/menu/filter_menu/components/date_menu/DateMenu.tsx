import '../Menus.css'

function DateMenu(): JSX.Element {
  return (
    <>
      <div className='filter-menu'>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>Hoy</span>
        </div>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>Ayer</span>
        </div>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>Últimos 7 días</span>
        </div>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>Últimos 30 días</span>
        </div>
        <div className='filter-menu__option'>
          <span className='filter-menu__option__name'>Últimos 90 días</span>
        </div>
      </div>
    </>
  )
}

export default DateMenu