import React, { useContext, useState } from 'react'
import { createApiFolderRepository } from '../../../modules/folders/infrastructure/ApiFolderRepository'
import { type Folder } from '../../../modules/folders/domain/Folder'

const FoldersContext = React.createContext({})

export function useFolders(): any {
  return useContext(FoldersContext)
}

export function FoldersProvider({ children }: any): JSX.Element {
  const [currentFolder, setCurrentFolder] = useState({})
  const [foldersForShow, setFoldersForShow] = useState([] as Folder[] | undefined)
  const [newChange, setNewChange] = useState(false)
  const [parentFolder, setParentFolder] = useState([])
  const repository = createApiFolderRepository()

  function handleNewChange(): void {
    setNewChange(!newChange)
  }

  const value = {
    repository,
    currentFolder,
    setCurrentFolder,
    foldersForShow,
    setFoldersForShow,
    newChange,
    handleNewChange,
    parentFolder,
    setParentFolder,
  }

  return <FoldersContext.Provider value={value}>{children}</FoldersContext.Provider>
}
