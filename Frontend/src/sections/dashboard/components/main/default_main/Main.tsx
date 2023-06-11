import './Main.css'
import Menu from '../components/menu/Menu'
import Section from '../components/section/Section'
import ListSection from '../components/list_section/ListSection'
import BigSpinner from '../../../../../components/spinner/big_spinner/BigSpinner'
import { useState, useEffect } from 'react'
import { getFoldersByUserIdAndParentId } from '../../../../../modules/folders/aplication/getFoldersByUserIdAndParentId'
import { getFolderByUserIdAndId } from '../../../../../modules/folders/aplication/getFolderByUserIdAndId'
import { getFilesByUserIdAndParentId } from '../../../../../modules/files/aplication/getFilesByUserIdAndParentId'
import { getRecentFilesByUserIdAndIterval } from '../../../../../modules/files/aplication/getRecentFilesByUserIdAndIterval'
import { getHighlightedFilesByUserId } from '../../../../../modules/files/aplication/getHighlightedFilesByUserId'
import { useFiles } from '../../../../Files/contexts/FilesContext'
import { useFolders } from '../../../../Folders/contexts/FoldersContext'
import { useAuth } from '../../../../users/contexts/AuthContext'
import { ItemTypes } from '../../../../../modules/items/domain/Item'
import { useItems } from '../context/ItemContext'
import { getFilesByUserIdAndTypeAndNameAndInterval } from '../../../../../modules/files/aplication/getFilesByUserIdAndTypeAndNameAndInterval'

function Main(): JSX.Element {
  const [listDesign, setListDesign] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const { repository, currentFolder, foldersForShow, setFoldersForShow, newChange, setParentFolder } = useFolders()
  const { currentUser } = useAuth()
  const Files = useFiles()
  const { setItemsSelected, showFilterItems, typeFilter, nameFilter, dateFilter } = useItems()

  useEffect(() => {
    setLoading(true)
    if (Files.showRecentFiles === true) {
      getRecentFilesByUserIdAndIterval(Files.repository, currentUser.id, 7)
        .then((files) => {
          console.log('Files recientes: ', files)
          Files.setFilesForShow(files)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })

      return
    }

    if (Files.showHighlightedFiles === true) {
      getHighlightedFilesByUserId(Files.repository, currentUser.id)
        .then((files) => {
          console.log('Files destacados: ', files)
          Files.setFilesForShow(files)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })

      return
    }

    if (showFilterItems === true) {
      console.log(currentUser.id, typeFilter, nameFilter, dateFilter)
      const typeFilterProcessed = typeFilter === ' ' ? '' : typeFilter
      const nameFilterProcessed = nameFilter === ' ' ? '' : nameFilter
      getFilesByUserIdAndTypeAndNameAndInterval(
        Files.repository,
        currentUser.id,
        typeFilterProcessed,
        nameFilterProcessed,
        dateFilter
      )
        .then((files) => {
          console.log('Files filtrados: ', files)
          Files.setFilesForShow(files)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })

      return
    }

    getFoldersByUserIdAndParentId(repository, currentUser.id, currentFolder.id)
      .then((folders) => {
        console.log('Folders: ', folders)
        setFoldersForShow(folders)
      })
      .catch((error) => {
        console.log(error)
      })

    getFilesByUserIdAndParentId(Files.repository, currentUser.id, currentFolder.id)
      .then((files) => {
        console.log('Files: ', files)
        Files.setFilesForShow(files)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })

    getFolderByUserIdAndId(repository, currentUser.id, currentFolder.parentId)
      .then((folder) => {
        console.log('Parent Folder: ', folder)
        setParentFolder(folder)
      })
      .catch((error) => {
        console.log(error)
      })

    setItemsSelected([])
  }, [currentFolder, newChange, Files.showRecentFiles, Files.showHighlightedFiles, showFilterItems])

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

  if (Files.showRecentFiles === true) {
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
              <Section name='Archivos subidos en esta semana' items={Files.filesForShow} type={ItemTypes.File} />
            </div>
          )}
        </main>
      </>
    )
  }

  if (Files.showHighlightedFiles === true) {
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

  if (showFilterItems === true) {
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
              <Section name='Archivos filtrados' items={Files.filesForShow} type={ItemTypes.File} />
            </div>
          )}
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
            <ListSection folders={foldersForShow} files={Files.filesForShow} />
          </div>
        ) : (
          <div className='dashboard_main__section_container'>
            <Section name='Carpetas' items={foldersForShow} type={ItemTypes.Folder} />
            <Section name='Archivos' items={Files.filesForShow} type={ItemTypes.File} />
          </div>
        )}
      </main>
    </>
  )
}

export default Main
