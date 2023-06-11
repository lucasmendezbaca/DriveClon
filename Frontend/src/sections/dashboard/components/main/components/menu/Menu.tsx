import './Menu.css'
import { useItems } from '../../context/ItemContext'
import PopperMenu from '../../../PopperMenu/PopperMenu'
import NewItemMenu from '../../../new_item_menu/NewItemMenu'
import OptionsItemMenu from '../../../options_item_menu/OptionsItemMenu'
import OptionsButton from '../options_button/options_button'
import { useFolders } from '../../../../../Folders/contexts/FoldersContext'
import OverlayContainer from '../../../../../../components/overlay_container/OverlayContainer'
import CreateFolderForm from '../../../create_folder_form/CreateFolderForm'
import { useStateForm } from '../../../../../users/hooks/useStateForm'
import { downloadFolder as downloadFolderAplication } from '../../../../../../modules/folders/aplication/downloadFolder'
import { deleteFolder as deleteFolderAplication } from '../../../../../../modules/folders/aplication/deleteFolder'
import { useAuth } from '../../../../../users/contexts/AuthContext'
import { useState } from 'react'

interface MenuProps {
  listDesign: boolean
  changeListDesign: () => void
}

function Menu({ listDesign, changeListDesign }: MenuProps): JSX.Element {
  const { itemsSelected } = useItems()
  const { repository, currentFolder, setCurrentFolder, parentFolder } = useFolders()
  const { currentUser } = useAuth()
  const [error, setError] = useState('')

  const { showUserForm, handleShowUserForm } = useStateForm()

  function handleChangeCurrentFolder(): void {
    setCurrentFolder(parentFolder[0])
  }

  const optionsButton = (
    <img
      className='dashboard_main__menu__options__icon dashboard_main__menu__options__icon--responsive'
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
        onClick={handleChangeCurrentFolder}
        className='dashboard_main__menu__back-icon'
        src='./imgs/arrow-back.svg'
        alt=''
      />
    ) : (
      <></>
    )

  const title =
    itemsSelected.length > 0 ? (
      <div className='dashboard_main__menu__title--selected'>
        <div>{itemsSelected.length} seleccionados</div>
        <div className='dashboard_main__menu__opitions_items_selected'>
          <img className='dashboard_main__menu__options__icon' src='./imgs/compartir.svg' alt='' />
          <img className='dashboard_main__menu__options__icon' src='./imgs/download.svg' alt='' />
          <img className='dashboard_main__menu__options__icon' src='./imgs/mover_a.svg' alt='' />
          <img className='dashboard_main__menu__options__icon' src='./imgs/papelera.svg' alt='' />

          {optionsButton}
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
            onClick={changeListDesign}
            className='dashboard_main__menu__options__icon dashboard_main__menu__options__icon--view'
            src={changeViewIcon}
            alt=''
          />
          <PopperMenu
            button={<OptionsButton />}
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
