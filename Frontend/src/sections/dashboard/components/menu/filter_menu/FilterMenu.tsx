import './FilterMenu.css'
import PopperMenu from '../../PopperMenu/PopperMenu'
import TypeMenu from './components/type_menu/TypeMenu'
// import OwnerMenu from './components/owner_menu/OwnerMenu'
import DateMenu from './components/date_menu/DateMenu'
// import { useItems } from '../../main/context/ItemContext'

function FilterMenu(): JSX.Element {
  // const { setShowFilterItems } = useItems()

  const allFilter = (
    <div className='filters-menu__filter__input filters-menu__filter__input--selected filters-menu__filter__input--select'>
      Todos
      <div className='filters-menu__filter__input__drop-menu-icon'></div>
    </div>
  )

  // const OwnerFilter = (
  //   <div className='filters-menu__filter__input filters-menu__filter__input--select'>
  //     Cualquier usuario
  //     <div className='filters-menu__filter__input__drop-menu-icon'></div>
  //   </div>
  // )

  const dateFilter = (
    <div className='filters-menu__filter__input filters-menu__filter__input--select'>
      Cualquier momento
      <div className='filters-menu__filter__input__drop-menu-icon'></div>
    </div>
  )
  return (
    <>
      <div className='filters-menu'>
        <div className='filters-menu__filter'>
          <div className='filters-menu__filter__name__container'>
            <span className='filters-menu__filter__name'>Tipo</span>
          </div>
          <PopperMenu button={allFilter} menu={<TypeMenu />} />
        </div>
        {/* <div className='filters-menu__filter'>
          <div className='filters-menu__filter__name__container'>
            <span className='filters-menu__filter__name'>Propietario</span>
          </div>
          <PopperMenu button={OwnerFilter} menu={<OwnerMenu />} />
        </div> */}
        <div className='filters-menu__filter'>
          <div className='filters-menu__filter__name__container'>
            <span className='filters-menu__filter__name'>Nombre del elemento</span>
          </div>
          <input
            className='filters-menu__filter__input filters-menu__filter__input--text'
            type='text'
            name='nombre'
            id=''
            placeholder='Termino que coincide con parte del nombre del archivo'
          />
        </div>
        <div className='filters-menu__filter'>
          <div className='filters-menu__filter__name__container'>
            <span className='filters-menu__filter__name'>Fecha de modificación</span>
          </div>
          <PopperMenu button={dateFilter} menu={<DateMenu />} />
        </div>

        <div className='filters-menu__filter__bottons'>
          {/* <button className='filters-menu__filter__bottons__button filters-menu__filter__bottons__button--reset'>
            Restablecer
          </button> */}
          <button
            // onClick={() => setShowFilterItems(true)}
            className='filters-menu__filter__bottons__button filters-menu__filter__bottons__button--search'
          >
            Buscar lo que quieras
          </button>
        </div>
      </div>
    </>
  )
}

export default FilterMenu
