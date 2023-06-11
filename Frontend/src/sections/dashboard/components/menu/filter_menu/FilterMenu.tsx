import './FilterMenu.css'
import PopperMenu from '../../PopperMenu/PopperMenu'
import TypeMenu from './components/type_menu/TypeMenu'
// import OwnerMenu from './components/owner_menu/OwnerMenu'
import DateMenu from './components/date_menu/DateMenu'
import { useItems } from '../../main/context/ItemContext'
import { useNavigate } from 'react-router-dom'
import { useFolders } from '../../../../Folders/contexts/FoldersContext'

const typeDictiaonary: any = {
  '': 'Todos',
  image: 'Fotos e imágenes',
  'application/pdf': 'PDFs',
  audio: 'Audio',
  video: 'Videos',
  'application/x-zip-compressed': 'Archivos (zip)',
}

const dateDictiaonary: any = {
  1: 'Hoy',
  2: 'Ayer',
  7: 'Últimos 7 días',
  30: 'Últimos 30 días',
  90: 'Últimos 90 días',
}

function FilterMenu(): JSX.Element {
  const { typeFilter, dateFilter, nameFilter, setNameFilter } = useItems()
  const { handleNewChange } = useFolders()
  const navigate = useNavigate()

  const typeMenu = (
    <div className='filters-menu__filter__input filters-menu__filter__input--selected filters-menu__filter__input--select'>
      {typeDictiaonary[typeFilter]}
      <div className='filters-menu__filter__input__drop-menu-icon'></div>
    </div>
  )

  // const OwnerFilter = (
  //   <div className='filters-menu__filter__input filters-menu__filter__input--select'>
  //     Cualquier usuario
  //     <div className='filters-menu__filter__input__drop-menu-icon'></div>
  //   </div>
  // )

  const dateMenuFilter = (
    <div className='filters-menu__filter__input filters-menu__filter__input--select'>
      {dateDictiaonary[dateFilter]}
      <div className='filters-menu__filter__input__drop-menu-icon'></div>
    </div>
  )

  const placeholderText = nameFilter !== '' ? nameFilter : 'Termino que coincide con parte del nombre del archivo'

  function handleChangeFileName(event: any): any {
    setNameFilter(event.target.value)
  }

  function handleShowFilterItems(): void {
    navigate('/dashboard/filter')
    handleNewChange()
  }

  return (
    <>
      <div className='filters-menu'>
        <div className='filters-menu__filter'>
          <div className='filters-menu__filter__name__container'>
            <span className='filters-menu__filter__name'>Tipo</span>
          </div>
          <PopperMenu button={typeMenu} menu={<TypeMenu />} />
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
            onChange={handleChangeFileName}
            className='filters-menu__filter__input filters-menu__filter__input--text'
            type='text'
            name='nombre'
            id=''
            placeholder={placeholderText}
          />
        </div>
        <div className='filters-menu__filter'>
          <div className='filters-menu__filter__name__container'>
            <span className='filters-menu__filter__name'>Fecha de modificación</span>
          </div>
          <PopperMenu button={dateMenuFilter} menu={<DateMenu />} />
        </div>

        <div className='filters-menu__filter__bottons'>
          {/* <button className='filters-menu__filter__bottons__button filters-menu__filter__bottons__button--reset'>
            Restablecer
          </button> */}
          <button
            onClick={handleShowFilterItems}
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
