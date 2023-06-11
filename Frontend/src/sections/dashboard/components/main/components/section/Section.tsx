import './Section.css'
import Folder from './components/folder/Folder'
import File from './components/file/File'
import { ItemTypes } from '../../../../../../modules/items/domain/Item'
import { type Folder as FolderType } from '../../../../../../modules/folders/domain/Folder'
import { type File as FileType } from '../../../../../../modules/files/domain/File'

interface SectionProps {
  name: string
  items: FolderType[] | FileType[]
  type: ItemTypes
}

function Section({ name, items, type }: SectionProps): JSX.Element {
  if (type === ItemTypes.Folder) {
    return (
      <>
        <section className='dashboard_main__content__section'>
          <p className='dashboard_main__content__section__title'>{name}</p>
          <div className='dashboard_main__content__section__files'>
            {items.map((folder: FolderType) => {
              return <Folder key={folder.id} folder={folder} />
            })}
          </div>
        </section>
      </>
    )
  }

  if (type === ItemTypes.File) {
    return (
      <>
        <section className='dashboard_main__content__section'>
          <p className='dashboard_main__content__section__title'>{name}</p>
          <div className='dashboard_main__content__section__files'>
            {items.map((file: any) => {
              return <File key={file.id} file={file} />
            })}
          </div>
        </section>
      </>
    )
  }

  return <></>
}

export default Section
