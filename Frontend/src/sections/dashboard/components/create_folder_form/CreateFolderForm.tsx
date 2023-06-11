import './CreateFolderForm.css'
import { useState } from 'react'
import { useAuth } from '../../../users/contexts/AuthContext'
import { formatDate } from '../../../../utils/utils'
import { v4 as uuidv4 } from 'uuid'

import { createFolder } from '../../../../modules/folders/aplication/createFolder'
import { type Folder } from '../../../../modules/folders/domain/Folder'
import { useFolders } from '../../../Folders/contexts/FoldersContext'
import { useFiles } from '../../../Files/contexts/FilesContext'
import { useItems } from '../main/context/ItemContext'
import { useNavigate } from 'react-router-dom'

interface PropsCreateFolderForm {
  changeShow: () => void
}

function CreateFolderForm({ changeShow }: PropsCreateFolderForm): JSX.Element {
  const [folderName, setFolderName] = useState('Carpeta sin título')
  const { currentUser } = useAuth()
  const { repository, currentFolder, handleNewChange } = useFolders()
  const Files = useFiles()
  const Items = useItems()
  const navigate = useNavigate()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setFolderName(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const folderId = uuidv4()
    const currentDate = formatDate(new Date())

    const folderInsertName = folderName === '' ? 'Carpeta sin título' : folderName

    const folder: Folder = {
      id: folderId,
      // parentId: currentUser.id,
      parentId: currentFolder.id,
      userId: currentUser.id,
      name: folderInsertName,
      path: `${currentFolder.path}${folderId}/`,
      highlighted: 0,
      createDate: currentDate,
      updateDate: currentDate,
    }
    createFolder(repository, folder)
      .then((res) => {
        console.log('Folder created: ', res)
        handleNewChange()
        Files.setShowRecentFiles(false)
        Files.setShowHighlightedFiles(false)
        Items.setShowFilterItems(false)
        navigate('/dashboard')
        changeShow()
      })
      .catch((err) => {
        console.log('Error creating folder: ', err)
      })
  }

  function handleCancel(e: any): void {
    e.preventDefault()
    changeShow()
  }

  return (
    <>
      <div className='create-folder-form'>
        <p className='create-folder-form__title'>Nueva Carpeta</p>
        <form onSubmit={handleSubmit} className='create-folder-form__form'>
          <input
            onChange={handleChange}
            type='text'
            value={folderName}
            className='user_form__section__input user_form__section__input--folder-form'
          />
          <div className='create-folder-form__form__buttons'>
            <button
              className='create-folder-form__form__buttons__btton create-folder-form__form__buttons__btton--submit'
              type='submit'
            >
              Crear
            </button>
            <button className='create-folder-form__form__buttons__btton' onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateFolderForm
