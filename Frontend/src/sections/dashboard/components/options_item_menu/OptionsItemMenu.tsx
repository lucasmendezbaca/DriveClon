import { useFolders } from '../../../Folders/contexts/FoldersContext'

interface OptionsItemMenuProps {
  item: any
  open: () => void
  download: () => void
  deleteItem: () => void
  updateHighlighted?: () => void
}

function OptionsItemMenu({ item, open, download, deleteItem, updateHighlighted }: OptionsItemMenuProps): JSX.Element {
  const { currentFolder } = useFolders()

  function handleOpen(): void {
    open()
  }

  function handleDownload(): void {
    download()
  }

  function handleDelete(): void {
    deleteItem()
  }

  function handleUpdateHighlighted(): void {
    if (updateHighlighted !== undefined) {
      updateHighlighted()
    }
  }

  return (
    <div className='new_item_menu'>
      {item.id !== currentFolder.id && (
        <div className='new_item_menu__option'>
          <div onClick={handleOpen} className='new_item_menu__option__item'>
            <img src='./imgs/folder_icon.svg' alt='' />
            <span>Abrir</span>
          </div>
        </div>
      )}
      <div className='new_item_menu__option'>
        {/* <div className='new_item_menu__option__item'>
          <img src='./imgs/folder_icon.svg' alt='' />
          <span>Compartir</span>
        </div> */}
        {/* <div className='new_item_menu__option__item'>
          <img src='./imgs/folder_icon.svg' alt='' />
          <span>Mover a</span>
        </div> */}
        {item.type !== undefined && (
          <div onClick={handleUpdateHighlighted} className='new_item_menu__option__item'>
            <img src='./imgs/icono-destacados.svg' alt='' />
            {item.highlighted === 1 ? <span>Quitar de Destacados</span> : <span>Añadir a Destacados</span>}
          </div>
        )}
        {/* <div onClick={handleUpdateHighlighted} className='new_item_menu__option__item'>
          <img src='./imgs/icono-destacados.svg' alt='' />
          {item.highlighted === 1 ? <span>Quitar de Destacados</span> : <span>Añadir a Destacados</span>}
        </div> */}
        <div onClick={handleDownload} className='new_item_menu__option__item'>
          <img src='./imgs/download.svg' alt='' />
          <span>Descargar</span>
        </div>
      </div>
      <div className='new_item_menu__option new_item_menu__option--google_doc'>
        {/* <div className='new_item_menu__option__item'>
          <img src='./imgs/file_icon.png' alt='' />
          <span>Ver detalles</span>
        </div> */}
        <div onClick={handleDelete} className='new_item_menu__option__item'>
          <img src='./imgs/papelera.svg' alt='' />
          <span>Eliminar</span>
        </div>
      </div>
    </div>
  )
}

export default OptionsItemMenu
