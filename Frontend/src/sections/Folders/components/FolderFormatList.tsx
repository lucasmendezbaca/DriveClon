import { type Folder } from '../../../modules/folders/domain/Folder'
import { type File } from '../../../modules/files/domain/File'
import { useAuth } from '../../users/contexts/AuthContext'
import { useFolders } from '../contexts/FoldersContext'
import { useItems } from '../../dashboard/components/main/context/ItemContext'
import { toYearMonthDay } from '../../../utils/utils'
import PopperMenu from '../../dashboard/components/PopperMenu/PopperMenu'
import OptionsButton from '../../dashboard/components/main/components/options_button/options_button'
import OptionsItemMenu from '../../dashboard/components/options_item_menu/OptionsItemMenu'
import { downloadFolder as dowloadFolderAplication } from '../../../modules/folders/aplication/downloadFolder'
import { deleteFolder as deleteFolderAplication } from '../../../modules/folders/aplication/deleteFolder'

interface FolderFormatListProps {
  folder: Folder
}

function FolderFormatList({ folder }: FolderFormatListProps): JSX.Element {
  const { setItemsSelected, selectItem, selectItemIcon, isSelected } = useItems()
  const { repository, setCurrentFolder, handleNewChange } = useFolders()
  const { currentUser } = useAuth()

  const propietario = (item: Folder | File): JSX.Element => {
    if (item.userId === currentUser.id) {
      return (
        <span className='dashboard_main__content__list-section__owner__container'>
          <img className='dashboard_main__content__list-section__owner__icon' src={currentUser.image} alt='user icon' />
          Yo
        </span>
      )
    }
    return (
      <span className='dashboard_main__content__list-section__owner__container'>
        <img
          className='dashboard_main__content__list-section__owner__icon'
          src='./imgs/foto-perfil.png'
          alt='user icon'
        />
        Otro
      </span>
    )
  }

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
      <tr
        onDoubleClick={handleDoubleClick}
        onClick={handleSelectItem}
        className={`dashboard_main__content__list-section__item ${
          handleIsSelected() ? 'dashboard_main__content__list-section__item--check' : ''
        }`}
      >
        <td className='dashboard_main__content__list-section__name'>
          <div
            onClick={handleSelectItemIcon}
            className={`dashboard_main__content__section__files__folder__icon ${
              handleIsSelected() ? 'dashboard_main__content__section__files__folder__icon--check' : ''
            }`}
          ></div>
          {folder.name}
        </td>
        <td className='dashboard_main__content__list-section__owner'>{propietario(folder)}</td>
        <td>{toYearMonthDay(folder.updateDate)}</td>
        <td className='dashboard_main__content__list-section__size'>--</td>
        <td>
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
        </td>
      </tr>
    </>
  )
}

export default FolderFormatList
