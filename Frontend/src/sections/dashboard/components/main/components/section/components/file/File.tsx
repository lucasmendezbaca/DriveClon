import './File.css'
import { type ItemId } from '../../../../../../../../modules/items/domain/ItemId'
import { useItems } from '../../../../context/ItemContext'
import PopperMenu from '../../../../../PopperMenu/PopperMenu'
import OptionsItemMenu from '../../../../../options_item_menu/OptionsItemMenu'
import OptionsButton from '../../../options_button/options_button'
import { type File as FileType } from '../../../../../../../../modules/files/domain/File'
import OverlayContainer from '../../../../../../../../components/overlay_container/OverlayContainer'
import FileViwer from '../../../../../file_viwer/FileViwer'
import { useState } from 'react'
import { downloadFile as dowloadFileAplication } from '../../../../../../../../modules/files/aplication/downloadFile'
import { deleteFile as deleteFileAplication } from '../../../../../../../../modules/files/aplication/deleteFile'
import { useFiles } from '../../../../../../../Files/contexts/FilesContext'
import { useAuth } from '../../../../../../../users/contexts/AuthContext'
import { useFolders } from '../../../../../../../Folders/contexts/FoldersContext'
import { updateFileToHighlighted } from '../../../../../../../../modules/files/aplication/updateFileToHighlighted'

interface FileProps {
  file: FileType
}

function File({ file }: FileProps): JSX.Element {
  const { itemsSelected, setItemsSelected } = useItems()
  const { repository } = useFiles()
  const { currentUser } = useAuth()
  const { handleNewChange } = useFolders()
  const { id, name } = file
  const [showFileViwer, setShowFileViwer] = useState(false)

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

  return (
    <>
      <article
        onClick={selectItem}
        onDoubleClick={changeFileViewerShow}
        className={`dashboard_main__content__section__files__file ${
          isSelected() ? 'dashboard_main__content__section__files__file--check' : ''
        }`}
      >
        <div className='dashboard_main__content__section__files__file__header'>
          <div
            onClick={selectItemIcon}
            className={`dashboard_main__content__section__files__file__header__icon ${
              isSelected() ? 'dashboard_main__content__section__files__file__header__icon--check' : ''
            }`}
          ></div>
          <span className='dashboard_main__content__section__files__file__header__name'>{name}</span>

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
        </div>
        <div className='dashboard_main__content__section__files__file__preview'>
          {file.type.startsWith('image') ? (
            <img className='dashboard_main__content__section__files__file__preview__img' src={file.path} alt='' />
          ) : (
            <img
              className='dashboard_main__content__section__files__file__preview__img'
              src='./imgs/miniatura_archivo.png'
              alt=''
            />
          )}
        </div>
      </article>

      <OverlayContainer show={showFileViwer} changeShow={changeFileViewerShow}>
        <FileViwer file={file} />
      </OverlayContainer>
    </>
  )
}

export default File
