import { useState } from 'react'
import { type Folder } from '../../../modules/folders/domain/Folder'
import { type File } from '../../../modules/files/domain/File'
import { useAuth } from '../../users/contexts/AuthContext'
import { useItems } from '../../dashboard/components/main/context/ItemContext'
import { useFolders } from '../../Folders/contexts/FoldersContext'
import { useFiles } from '../contexts/FilesContext'
import { toYearMonthDay, bytesToKiloBites } from '../../../utils/utils'
import PopperMenu from '../../dashboard/components/PopperMenu/PopperMenu'
import OptionsButton from '../../dashboard/components/main/components/options_button/options_button'
import OptionsItemMenu from '../../dashboard/components/options_item_menu/OptionsItemMenu'
import OverlayContainer from '../../../components/overlay_container/OverlayContainer'
import FileViwer from '../../dashboard/components/file_viwer/FileViwer'
import { downloadFile as dowloadFileAplication } from '../../../modules/files/aplication/downloadFile'
import { deleteFile as deleteFileAplication } from '../../../modules/files/aplication/deleteFile'
import { updateFileToHighlighted } from '../../../modules/files/aplication/updateFileToHighlighted'

interface FolderFormatListProps {
  file: File
}

function FileFormatList({ file }: FolderFormatListProps): JSX.Element {
  const { selectItem, selectItemIcon, isSelected } = useItems()
  const { handleNewChange } = useFolders()
  const { repository } = useFiles()
  const { currentUser } = useAuth()
  const [showFileViwer, setShowFileViwer] = useState(false)

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

  function changeFileViewerShow(): void {
    setShowFileViwer(!showFileViwer)
  }

  function downloadFile(): void {
    dowloadFileAplication(repository, file.path, file.name)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function deleteFile(): void {
    deleteFileAplication(repository, currentUser.id, file.id, file.path)
      .then((response) => {
        console.log(response)
        handleNewChange()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function updateHighlighted(): void {
    const highlighted = file.highlighted === 0 ? 1 : 0
    console.log(highlighted)

    updateFileToHighlighted(repository, currentUser.id, file.id, highlighted)
      .then((response) => {
        console.log(response)
        handleNewChange()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleSelectItem(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    selectItem(e, file)
  }

  function handleSelectItemIcon(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    selectItemIcon(e, file)
  }

  function handleIsSelected(): boolean {
    return isSelected(file)
  }

  let fileIcon = (
    <div
      onClick={handleSelectItemIcon}
      className={`dashboard_main__content__section__files__file__header__icon ${
        handleIsSelected() ? 'dashboard_main__content__section__files__file__header__icon--check' : ''
      }`}
    ></div>
  )

  if (file.type.startsWith('image')) {
    fileIcon = (
      <div
        onClick={handleSelectItemIcon}
        className={`dashboard_main__content__section__files__file__header__icon dashboard_main__content__section__files__file__header__icon--image${
          handleIsSelected()
            ? 'dashboard_main__content__section__files__file__header__icon--check dashboard_main__content__section__files__file__header__icon--image--check'
            : ''
        }`}
      ></div>
    )
  } else if (file.type.startsWith('video')) {
    fileIcon = (
      <div
        onClick={handleSelectItemIcon}
        className={`dashboard_main__content__section__files__file__header__icon dashboard_main__content__section__files__file__header__icon--video${
          handleIsSelected()
            ? 'dashboard_main__content__section__files__file__header__icon--check dashboard_main__content__section__files__file__header__icon--video--check'
            : ''
        }`}
      ></div>
    )
  } else if (file.type.startsWith('application/pdf')) {
    fileIcon = (
      <div
        onClick={handleSelectItemIcon}
        className={`dashboard_main__content__section__files__file__header__icon dashboard_main__content__section__files__file__header__icon--pdf${
          handleIsSelected()
            ? 'dashboard_main__content__section__files__file__header__icon--check dashboard_main__content__section__files__file__header__icon--pdf--check'
            : ''
        }`}
      ></div>
    )
  } else if (file.type.startsWith('audio')) {
    fileIcon = (
      <div
        onClick={handleSelectItemIcon}
        className={`dashboard_main__content__section__files__file__header__icon dashboard_main__content__section__files__file__header__icon--audio${
          handleIsSelected()
            ? 'dashboard_main__content__section__files__file__header__icon--check dashboard_main__content__section__files__file__header__icon--audio--check'
            : ''
        }`}
      ></div>
    )
  } else if (file.type.startsWith('application/x-zip')) {
    fileIcon = (
      <div
        onClick={handleSelectItemIcon}
        className={`dashboard_main__content__section__files__file__header__icon dashboard_main__content__section__files__file__header__icon--zip${
          handleIsSelected()
            ? 'dashboard_main__content__section__files__file__header__icon--check dashboard_main__content__section__files__file__header__icon--zip--check'
            : ''
        }`}
      ></div>
    )
  }

  return (
    <>
      <tr
        onDoubleClick={changeFileViewerShow}
        onClick={handleSelectItem}
        className={`dashboard_main__content__list-section__item ${
          handleIsSelected() ? 'dashboard_main__content__list-section__item--check' : ''
        }`}
      >
        <td className='dashboard_main__content__list-section__name'>
          {fileIcon}
          {/* <div
            onClick={handleSelectItemIcon}
            className={`dashboard_main__content__section__files__file__header__icon ${
              handleIsSelected() ? 'dashboard_main__content__section__files__file__header__icon--check' : ''
            }`}
          ></div> */}
          <span>{file.name}</span>
        </td>
        <td className='dashboard_main__content__list-section__owner'>{propietario(file)}</td>
        <td>{toYearMonthDay(file.updateDate)}</td>
        <td className='dashboard_main__content__list-section__size'>{bytesToKiloBites(file.size)} kB</td>
        <td>
          <PopperMenu
            button={<OptionsButton />}
            menu={
              <OptionsItemMenu
                item={file}
                open={changeFileViewerShow}
                download={downloadFile}
                deleteItem={deleteFile}
                updateHighlighted={updateHighlighted}
              />
            }
          />
        </td>
      </tr>

      <OverlayContainer show={showFileViwer} changeShow={changeFileViewerShow}>
        <FileViwer file={file} />
      </OverlayContainer>
    </>
  )
}

export default FileFormatList
