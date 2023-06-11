import './ListSection.css'
import { type Folder } from '../../../../../../modules/folders/domain/Folder'
import { type File } from '../../../../../../modules/files/domain/File'
import FolderFormatList from '../../../../../Folders/components/FolderFormatList'
import FileFormatList from '../../../../../Files/components/FileFormatList'

interface ListSectionProps {
  folders: Folder[]
  files: File[]
}

function ListSection({ folders, files }: ListSectionProps): JSX.Element {
  return (
    <>
      <table className='dashboard_main__content__list-section'>
        <thead>
          <tr>
            <th className='dashboard_main__content__list-section__name__head'>Nombre</th>
            <th className='dashboard_main__content__list-section__owner__head'>Propietario</th>
            <th>Última modifica...</th>
            <th className='dashboard_main__content__list-section__size__head'>Tamaño de archivo</th>
          </tr>
        </thead>
        <tbody>
          {folders.map((folder: Folder) => (
            <FolderFormatList key={folder.id} folder={folder} />
          ))}
          {files.map((file: File) => (
            <FileFormatList key={file.id} file={file} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListSection
