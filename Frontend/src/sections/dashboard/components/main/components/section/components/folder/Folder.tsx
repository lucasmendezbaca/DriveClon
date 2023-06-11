import './Folder.css'
import { type Folder as FolderType } from '../../../../../../../../modules/folders/domain/Folder'
import { useItems } from '../../../../context/ItemContext'
import PopperMenu from '../../../../../PopperMenu/PopperMenu'
import OptionsItemMenu from '../../../../../options_item_menu/OptionsItemMenu'
import OptionsButton from '../../../options_button/options_button'
import { useFolders } from '../../../../../../../Folders/contexts/FoldersContext'
import { downloadFolder as dowloadFolderAplication } from '../../../../../../../../modules/folders/aplication/downloadFolder'
import { deleteFolder as deleteFolderAplication } from '../../../../../../../../modules/folders/aplication/deleteFolder'
import { useAuth } from '../../../../../../../users/contexts/AuthContext'

interface FolderProps {
  folder: FolderType
}

function Folder({ folder }: FolderProps): JSX.Element {
  const { setItemsSelected, selectItem, selectItemIcon, isSelected } = useItems()
  const { repository, setCurrentFolder, handleNewChange } = useFolders()
  const { currentUser } = useAuth()

  function handleDoubleClick(): void {
    setItemsSelected([])
    setCurrentFolder(folder)
  }

  function downloadFolder(): void {
    dowloadFolderAplication(repository, folder.path, folder.name)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function deleteFolder(): void {
    deleteFolderAplication(repository, currentUser.id, folder.id, folder.path)
      .then((response) => {
        console.log(response)
        handleNewChange()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleSelectItem(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    selectItem(e, folder)
  }

  function handleSelectItemIcon(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    selectItemIcon(e, folder)
  }

  function handleIsSelected(): boolean {
    return isSelected(folder)
  }

  return (
    <>
      <article
        onClick={handleSelectItem}
        onDoubleClick={handleDoubleClick}
        className={`dashboard_main__content__section__files__folder ${
          handleIsSelected() ? 'dashboard_main__content__section__files__folder--check' : ''
        }`}
      >
        <div
          onClick={handleSelectItemIcon}
          className={`dashboard_main__content__section__files__folder__icon ${
            handleIsSelected() ? 'dashboard_main__content__section__files__folder__icon--check' : ''
          }`}
        ></div>
        <span className='dashboard_main__content__section__files__folder__name'>{folder.name}</span>
        <PopperMenu
          button={<OptionsButton />}
          menu={
            <OptionsItemMenu
              item={folder}
              open={handleDoubleClick}
              download={downloadFolder}
              deleteItem={deleteFolder}
            />
          }
        />
      </article>
    </>
  )
}

export default Folder
