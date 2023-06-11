import './Menu.css'
import { useItems } from '../../context/ItemContext'
import PopperMenu from '../../../PopperMenu/PopperMenu'
import NewItemMenu from '../../../new_item_menu/NewItemMenu'
import OptionsItemMenu from '../../../options_item_menu/OptionsItemMenu'
import { useFolders } from '../../../../../Folders/contexts/FoldersContext'
import OverlayContainer from '../../../../../../components/overlay_container/OverlayContainer'
import CreateFolderForm from '../../../create_folder_form/CreateFolderForm'
import { useStateForm } from '../../../../../users/hooks/useStateForm'
import { downloadFolder as downloadFolderAplication } from '../../../../../../modules/folders/aplication/downloadFolder'
import { deleteFolder as deleteFolderAplication } from '../../../../../../modules/folders/aplication/deleteFolder'
import { useAuth } from '../../../../../users/contexts/AuthContext'
import { useState } from 'react'
import { deleteItemsByUserIdAndItems } from '../../../../../../modules/folders/aplication/deleteItemsByUserIdAndItems'

interface MenuProps {
  listDesign: boolean
  changeListDesign: () => void
}

function Menu({ listDesign, changeListDesign }: MenuProps): JSX.Element {
  const { itemsSelected, setItemsSelected } = useItems()
  const { repository, currentFolder, setCurrentFolder, parentFolder, handleNewChange } = useFolders()
  const { currentUser } = useAuth()
  const [error, setError] = useState('')

  const { showUserForm, handleShowUserForm } = useStateForm()

  function handleChangeCurrentFolder(): void {
    setCurrentFolder(parentFolder[0])
  }

  function handleRemoveSelectedItems(): void {
    setItemsSelected([])
  }

  // const responsiveOptionsButton = (
  //   <img
  //     className='dashboard_main__menu__options__icon dashboard_main__menu__options__icon--responsive'
  //     src='./imgs/file_options_icon.svg'
  //     alt=''
  //   />
  // )

  function handleDeleteItems(): void {
    deleteItemsByUserIdAndItems(repository, currentUser.id, itemsSelected)
      .then((response) => {
        console.log(response)
        setItemsSelected([])
        handleNewChange()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const optionsButton = (
    <img
      title='Opciones de la carpeta'
      className='dashboard_main__menu__options__icon dashboard_main__menu__options__icon--normal'
      src='./imgs/file_options_icon.svg'
      alt=''
    />
  )

  const folderTitle = (
    <>
      <h1 className='dashboard_main__menu__title__text'>{currentFolder.name}</h1>
      <img src='imgs/desplegable-icon.svg' alt='' />
    </>
  )

  const backIcon =
    parentFolder.length > 0 ? (
      <img
        title='Volver a la carpeta anterior'
        onClick={handleChangeCurrentFolder}
        className='dashboard_main__menu__options__icon dashboard_main__menu__back-icon'
        src='./imgs/arrow-back.svg'
        alt=''
      />
    ) : (
      <></>
    )

  const title =
    itemsSelected.length > 0 ? (
      <div className='dashboard_main__menu__title--selected'>
        <div className='dashboard_main__menu__title--selected__close-icon__counter'>
          <img
            onClick={handleRemoveSelectedItems}
            className='dashboard_main__menu__options__icon dashboard_main__menu__options__icon--normal dashboard_main__menu__title--selected__close-icon'
            src='./imgs/cerrar.svg'
            alt='icono en forma de cruz para eliminar la selección de elementos'
          />
          {itemsSelected.length} seleccionados
        </div>
        <div className='dashboard_main__menu__opitions_items_selected'>
          {/* <img className='dashboard_main__menu__options__icon' src='./imgs/compartir.svg' alt='' /> */}
          {/* <img
            className='dashboard_main__menu__options__icon'
            src='./imgs/download.svg'
            alt='icono que simboliza la descarga de un elemento'
          /> */}
          {/* <img className='dashboard_main__menu__options__icon' src='./imgs/mover_a.svg' alt='' /> */}
          <img
            title='Eliminar elementos seleccionados'
            onClick={handleDeleteItems}
            className='dashboard_main__menu__options__icon'
            src='./imgs/papelera.svg'
            alt='icono de una papelera'
          />

          {/* {responsiveOptionsButton} */}
        </div>
      </div>
    ) : (
      <div className='dashboard_main__menu__title'>
        <PopperMenu button={folderTitle} menu={<NewItemMenu changeShow={handleShowUserForm} />} />
      </div>
    )

  const changeViewIcon = listDesign ? './imgs/change_view_icon_list.svg' : './imgs/change_view_icon.svg'

  function downloadFolder(): void {
    downloadFolderAplication(repository, currentFolder.path, currentFolder.name)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function deleteFolder(): void {
    if (currentFolder.id === currentUser.id) {
      setError('Esta es la carpeta raiz y no se puede eliminar, si desea puede eliminar los elementos de su interior')
      return
    }

    deleteFolderAplication(repository, currentUser.id, currentFolder.id, currentFolder.path)
      .then((response) => {
        console.log(response)
        setCurrentFolder(parentFolder[0])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <nav className='dashboard_main__menu'>
        {backIcon}
        {title}
        <div className='dashboard_main__menu__options'>
          <img
            title='Cambiar diseño'
            onClick={changeListDesign}
            className='dashboard_main__menu__options__icon dashboard_main__menu__options__icon--view'
            src={changeViewIcon}
            alt=''
          />
          <PopperMenu
            button={optionsButton}
            menu={
              <OptionsItemMenu
                item={currentFolder}
                open={() => true}
                download={downloadFolder}
                deleteItem={deleteFolder}
              />
            }
          />
        </div>
      </nav>

      <OverlayContainer show={showUserForm} changeShow={handleShowUserForm} justify='center' align='center'>
        <CreateFolderForm changeShow={handleShowUserForm} />
      </OverlayContainer>

      <OverlayContainer
        show={error !== ''}
        changeShow={() => {
          setError('')
        }}
        justify='center'
        align='center'
      >
        <div className='dashboard_main__menu__error'>{error}</div>
      </OverlayContainer>
    </>
  )
}

export default Menu
