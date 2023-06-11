import './ListSection.css'
import { useAuth } from '../../../../../users/contexts/AuthContext'
import { toYearMonthDay, bytesToKiloBites } from '../../../../../../utils/utils'
import { type Folder } from '../../../../../../modules/folders/domain/Folder'
import { type File } from '../../../../../../modules/files/domain/File'

interface ListSectionProps {
  folders: Folder[]
  files: File[]
}

function ListSection({ folders, files }: ListSectionProps): JSX.Element {
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

  const itemImg = (item: Folder | File): JSX.Element => {
    if ('type' in item) {
      return (
        <img className='dashboard_main__content__list-section__name__icon' src='./imgs/file_icon.png' alt='file icon' />
      )
    }
    return (
      <img
        className='dashboard_main__content__list-section__name__icon'
        src='./imgs/folder_icon.svg'
        alt='folder icon'
      />
    )
  }

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
            <tr key={folder.id}>
              <td className='dashboard_main__content__list-section__name'>
                {itemImg(folder)}
                {folder.name}
              </td>
              <td className='dashboard_main__content__list-section__owner'>{propietario(folder)}</td>
              <td>{toYearMonthDay(folder.updateDate)}</td>
              <td className='dashboard_main__content__list-section__size'>--</td>
            </tr>
          ))}
          {files.map((file: File) => (
            <tr key={file.id}>
              <td className='dashboard_main__content__list-section__name'>
                {itemImg(file)}
                {file.name}
              </td>
              <td className='dashboard_main__content__list-section__owner'>{propietario(file)}</td>
              <td>{toYearMonthDay(file.updateDate)}</td>
              <td className='dashboard_main__content__list-section__size'>{bytesToKiloBites(file.size)} kB</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListSection
