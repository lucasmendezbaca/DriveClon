import React, { useContext, useState } from 'react'
import { createApiFileRepository } from '../../../modules/files/infrastructure/ApiFileRepository'
import { type File } from '../../../modules/files/domain/File'

const FilesContext = React.createContext({})

export function useFiles(): any {
  return useContext(FilesContext)
}

export function FilesProvider({ children }: any): JSX.Element {
  const repository = createApiFileRepository()
  const [filesForShow, setFilesForShow] = useState([] as File[] | undefined)
  const [showRecentFiles, setShowRecentFiles] = useState(false)
  const [showHighlightedFiles, setShowHighlightedFiles] = useState(false)

  const value = {
    repository,
    filesForShow,
    setFilesForShow,
    showRecentFiles,
    setShowRecentFiles,
    showHighlightedFiles,
    setShowHighlightedFiles,
  }

  return <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
}
