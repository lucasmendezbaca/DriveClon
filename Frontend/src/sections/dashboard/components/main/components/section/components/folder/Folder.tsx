import './Folder.css'
import { type ItemId } from '../../../../../../../../modules/items/domain/ItemId'
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
  const { itemsSelected, setItemsSelected } = useItems()
  const { repository, setCurrentFolder, handleNewChange } = useFolders()
  const { currentUser } = useAuth()

  const { id, name } = folder

  function handleDoubleClick(): void {
    console.log(id)
    setItemsSelected([])
    setCurrentFolder(folder)
  }

  function selectItem(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    if (e.ctrlKey) {
      if (itemsSelected.includes(id) === true) {
        setItemsSelected(itemsSelected.filter((item: ItemId) => item !== id))
      } else {
        setItemsSelected([...itemsSelected, id])
      }
    } else {
      setItemsSelected([id])
    }
  }

  function selectItemIcon(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    if (itemsSelected.includes(id) === true) {
      setItemsSelected(itemsSelected.filter((item: ItemId) => item !== id))
    } else {
      setItemsSelected([...itemsSelected, id])
    }
    e.stopPropagation()
  }

  function isSelected(): boolean {
    return itemsSelected.includes(id)
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

  return (
    <>
      <article
        onClick={selectItem}
        onDoubleClick={handleDoubleClick}
        className={`dashboard_main__content__section__files__folder ${
          isSelected() ? 'dashboard_main__content__section__files__folder--check' : ''
        }`}
      >
        <div
          onClick={selectItemIcon}
          className={`dashboard_main__content__section__files__folder__icon ${
            isSelected() ? 'dashboard_main__content__section__files__folder__icon--check' : ''
          }`}
        ></div>
        <span className='dashboard_main__content__section__files__folder__name'>{name}</span>
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
