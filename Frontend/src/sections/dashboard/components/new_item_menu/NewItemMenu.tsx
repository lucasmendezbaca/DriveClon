import './NewItemMenu.css'
import { useFolders } from '../../../Folders/contexts/FoldersContext'
import { useFiles } from '../../../Files/contexts/FilesContext'
import { uploadFile } from '../../../../modules/files/aplication/uploadFile'
import { createFile } from '../../../../modules/files/aplication/createFile'
import { useAuth } from '../../../users/contexts/AuthContext'
import { formatDate } from '../../../../utils/utils'
import { type File as FileType } from '../../../../modules/files/domain/File'
import { v4 as uuidv4 } from 'uuid'

interface NewItemMenuProps {
  changeShow: () => void
}

function NewItemMenu({ changeShow }: NewItemMenuProps): JSX.Element {
  const { currentFolder, handleNewChange } = useFolders()
  const { repository } = useFiles()
  const { currentUser } = useAuth()

  function handleChange(event: any): void {
    const file = event.target.files[0]
    console.log(file)

    const id = uuidv4()
    const path = `${currentFolder.path}`
    const currentDate = formatDate(new Date())

    uploadFile(repository, id, path, file)
      .then((data) => {
        console.log('Archivo subido')
        console.log(data)
        const extension = data.originalname.split('.').pop()
        const fileObject: FileType = {
          id,
          parentId: currentFolder.id,
          userId: currentUser.id,
          name: file.name,
          path: `${currentFolder.path}${id}.${extension}`,
          highlighted: 0,
          type: data.mimetype,
          size: data.size,
          quillData: null,
          updateDate: currentDate,
          createDate: currentDate,
        }
        createFile(repository, fileObject)
          .then(() => {
            console.log('Archivo creado')
            handleNewChange()
          })
          .catch((error) => {
            console.log('Error al crear archivo')
            console.log(error)
          })
      })
      .catch((error) => {
        console.log('Error al subir archivo')
        console.log(error)
      })
  }

  return (
    <>
      <div className='new_item_menu'>
        <div className='new_item_menu__option'>
          <div onClick={changeShow} className='new_item_menu__option__item'>
            <img src='./imgs/folder_icon.svg' alt='' />
            <span>Nueva Carpeta</span>
          </div>
        </div>
        <div className='new_item_menu__option'>
          <label htmlFor='file' className='new_item_menu__option__item'>
            <img src='./imgs/folder_icon.svg' alt='' />
            Subir Archivo
            <input className='input-type-file' onChange={handleChange} type='file' id='file' />
          </label>
          {/* <div className='new_item_menu__option__item'>
            <img src='./imgs/folder_icon.svg' alt='' />
            <span>Subir Carpeta</span>
          </div> */}
        </div>
        <div className='new_item_menu__option new_item_menu__option--google_doc'>
          {/* <div className='new_item_menu__option__item'>
            <img src='./imgs/file_icon.png' alt='' />
            <span>Documentos de Google</span>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default NewItemMenu
