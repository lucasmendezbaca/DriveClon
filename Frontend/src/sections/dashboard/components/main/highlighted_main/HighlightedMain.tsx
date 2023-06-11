import './HighlightedMain.css'
import Menu from '../components/menu/Menu'
import Section from '../components/section/Section'
import ListSection from '../components/list_section/ListSection'
import BigSpinner from '../../../../../components/spinner/big_spinner/BigSpinner'
import { useState, useEffect } from 'react'
import { getHighlightedFilesByUserId } from '../../../../../modules/files/aplication/getHighlightedFilesByUserId'
import { useFiles } from '../../../../Files/contexts/FilesContext'
import { useFolders } from '../../../../Folders/contexts/FoldersContext'
import { useAuth } from '../../../../users/contexts/AuthContext'
import { ItemTypes } from '../../../../../modules/items/domain/Item'
import { useItems } from '../context/ItemContext'

function HighlightedMain(): JSX.Element {
  const [listDesign, setListDesign] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const { currentFolder, newChange } = useFolders()
  const { currentUser } = useAuth()
  const Files = useFiles()
  const { setItemsSelected } = useItems()

  useEffect(() => {
    setLoading(true)

    getHighlightedFilesByUserId(Files.repository, currentUser.id)
      .then((files) => {
        console.log('Files destacados: ', files)
        Files.setFilesForShow(files)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })

    setItemsSelected([])
  }, [currentFolder, newChange])

  function handleChangeListDesign(): void {
    setListDesign(!listDesign)
  }

  if (loading) {
    return (
      <>
        <main className='dashboard_main'>
          <Menu listDesign={listDesign} changeListDesign={handleChangeListDesign} />

          <div className='dashboard_main__section_container dashboard_main__section_container--loading'>
            <BigSpinner />
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <main className='dashboard_main'>
        <Menu listDesign={listDesign} changeListDesign={handleChangeListDesign} />

        {listDesign ? (
          <div className='dashboard_main__list-section_container'>
            <ListSection folders={[]} files={Files.filesForShow} />
          </div>
        ) : (
          <div className='dashboard_main__section_container'>
            <Section name='Archivos destacados' items={Files.filesForShow} type={ItemTypes.File} />
          </div>
        )}
      </main>
    </>
  )
}

export default HighlightedMain
