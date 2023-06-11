import '../Menus.css'
import { useItems } from '../../../../main/context/ItemContext'

function TypeMenu(): JSX.Element {
  const { setTypeFilter } = useItems()
  return (
    <>
      <div className='filter-menu'>
        <div onClick={() => setTypeFilter('')} className='filter-menu__option'>
          <div className='filter-menu__option__img' />
          <span className='filter-menu__option__name'>Todos</span>
        </div>
        <div onClick={() => setTypeFilter('image')} className='filter-menu__option'>
          <img className='filter-menu__option__img' src='./imgs/img-icon.png' />
          <span className='filter-menu__option__name'>Fotos e imágenes</span>
        </div>
        <div onClick={() => setTypeFilter('application/pdf')} className='filter-menu__option'>
          <img className='filter-menu__option__img' src='./imgs/img-icon.png' />
          <span className='filter-menu__option__name'>PDFs</span>
        </div>
        {/* <div className="filter-menu__option">
                    <img className="filter-menu__option__img" src="./imgs/img-icon.png" />
                    <span className="filter-menu__option__name">Documentos</span>
                </div> */}
        <div onClick={() => setTypeFilter('audio')} className='filter-menu__option'>
          <img className='filter-menu__option__img' src='./imgs/img-icon.png' />
          <span className='filter-menu__option__name'>Audio</span>
        </div>
        <div onClick={() => setTypeFilter('video')} className='filter-menu__option'>
          <img className='filter-menu__option__img' src='./imgs/img-icon.png' />
          <span className='filter-menu__option__name'>Videos</span>
        </div>
        <div onClick={() => setTypeFilter('application/x-zip-compressed')} className='filter-menu__option'>
          <img className='filter-menu__option__img' src='./imgs/img-icon.png' />
          <span className='filter-menu__option__name'>Archivos (zip)</span>
        </div>
        {/* <div className="filter-menu__option">
                    <img className="filter-menu__option__img" src="./imgs/img-icon.png" />
                    <span className="filter-menu__option__name">Carpetas</span>
                </div> */}
      </div>
    </>
  )
}

export default TypeMenu
