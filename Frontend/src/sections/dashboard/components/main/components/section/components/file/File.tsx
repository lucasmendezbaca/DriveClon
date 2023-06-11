import './File.css'
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
  const { selectItem, selectItemIcon, isSelected } = useItems()
  const { repository } = useFiles()
  const { currentUser } = useAuth()
  const { handleNewChange } = useFolders()
  const [showFileViwer, setShowFileViwer] = useState(false)

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

  let fileImage = (
    <img
      className='dashboard_main__content__section__files__file__preview__img'
      src='./imgs/plain-preview.png'
      alt=''
    />
  )

  let fileIcon = (
    <div
      onClick={handleSelectItemIcon}
      className={`dashboard_main__content__section__files__file__header__icon ${
        handleIsSelected() ? 'dashboard_main__content__section__files__file__header__icon--check' : ''
      }`}
    ></div>
  )

  if (file.type.startsWith('image')) {
    fileImage = <img className='dashboard_main__content__section__files__file__preview__img' src={file.path} alt='' />

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
    fileImage = (
      <img
        className='dashboard_main__content__section__files__file__preview__img'
        src='./imgs/mp4-preview.png'
        alt=''
      />
    )

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
    fileImage = (
      <img
        className='dashboard_main__content__section__files__file__preview__img'
        src='./imgs/pdf-preview.png'
        alt=''
      />
    )

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
    fileImage = (
      <img
        className='dashboard_main__content__section__files__file__preview__img'
        src='./imgs/ogg-preview.png'
        alt=''
      />
    )

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
    fileImage = (
      <img
        className='dashboard_main__content__section__files__file__preview__img'
        src='./imgs/zip-preview.png'
        alt=''
      />
    )

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
      <article
        onClick={handleSelectItem}
        onDoubleClick={changeFileViewerShow}
        className={`dashboard_main__content__section__files__file ${
          handleIsSelected() ? 'dashboard_main__content__section__files__file--check' : ''
        }`}
      >
        <div className='dashboard_main__content__section__files__file__header'>
          {fileIcon}
          {/* <div
            onClick={handleSelectItemIcon}
            className={`dashboard_main__content__section__files__file__header__icon ${
              handleIsSelected() ? 'dashboard_main__content__section__files__file__header__icon--check' : ''
            }`}
          ></div> */}
          <span className='dashboard_main__content__section__files__file__header__name'>{file.name}</span>

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
          {fileImage}
          {/* {file.type.startsWith('image') ? (
            <img className='dashboard_main__content__section__files__file__preview__img' src={file.path} alt='' />
          ) : (
            <img
              className='dashboard_main__content__section__files__file__preview__img'
              src='./imgs/miniatura_archivo.png'
              alt=''
            />
          )} */}
        </div>
      </article>

      <OverlayContainer show={showFileViwer} changeShow={changeFileViewerShow}>
        <FileViwer file={file} />
      </OverlayContainer>
    </>
  )
}

export default File
