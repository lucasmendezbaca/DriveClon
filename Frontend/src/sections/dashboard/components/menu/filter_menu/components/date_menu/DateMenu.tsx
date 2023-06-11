import '../Menus.css'
import { useItems } from '../../../../main/context/ItemContext'

function DateMenu(): JSX.Element {
  const { setDateFilter } = useItems()
  return (
    <>
      <div className='filter-menu'>
        <div onClick={() => setDateFilter(1)} className='filter-menu__option'>
          <span className='filter-menu__option__name'>Hoy</span>
        </div>
        <div onClick={() => setDateFilter(2)} className='filter-menu__option'>
          <span className='filter-menu__option__name'>Ayer</span>
        </div>
        <div onClick={() => setDateFilter(7)} className='filter-menu__option'>
          <span className='filter-menu__option__name'>Últimos 7 días</span>
        </div>
        <div onClick={() => setDateFilter(30)} className='filter-menu__option'>
          <span className='filter-menu__option__name'>Últimos 30 días</span>
        </div>
        <div onClick={() => setDateFilter(90)} className='filter-menu__option'>
          <span className='filter-menu__option__name'>Últimos 90 días</span>
        </div>
      </div>
    </>
  )
}

export default DateMenu
