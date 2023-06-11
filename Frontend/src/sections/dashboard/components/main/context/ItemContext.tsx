import React, { useContext, useState } from 'react'
// import { type FolderId } from '../../../../../modules/folders/domain/FolderId'

import { type Folder } from '../../../../../modules/folders/domain/Folder'
import { type File } from '../../../../../modules/files/domain/File'

const ItemContext = React.createContext({})

export function useItems(): any {
  return useContext(ItemContext)
}

export function ItemsProvider({ children }: any): JSX.Element {
  // const [itemsSelected, setItemsSelected] = useState<FolderId[]>([])
  const [itemsSelected, setItemsSelected] = useState<Array<Folder | File>>([])

  const [typeFilter, setTypeFilter] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [dateFilter, setDateFilter] = useState(1)
  const [showFilterItems, setShowFilterItems] = useState(false)

  // function selectItem(e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: FolderId): void {
  //   if (e.ctrlKey) {
  //     if (itemsSelected.includes(id) === true) {
  //       setItemsSelected(itemsSelected.filter((item: FolderId) => item !== id))
  //     } else {
  //       setItemsSelected([...itemsSelected, id])
  //     }
  //   } else {
  //     setItemsSelected([id])
  //   }
  // }

  // Hacer una funcion selectItem que reciba como parametro un objeto que tiene la propiedad id
  function selectItem(e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: Folder | File): void {
    if (e.ctrlKey) {
      if (itemsSelected.includes(item) === true) {
        setItemsSelected(itemsSelected.filter((itemSelected: Folder | File) => itemSelected !== item))
        console.log('itemsSelected', itemsSelected)
      } else {
        setItemsSelected([...itemsSelected, item])
      }
    } else {
      setItemsSelected([item])
    }
  }

  // function selectItemIcon(e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: FolderId): void {
  //   if (itemsSelected.includes(id) === true) {
  //     setItemsSelected(itemsSelected.filter((item: FolderId) => item !== id))
  //   } else {
  //     setItemsSelected([...itemsSelected, id])
  //   }
  //   e.stopPropagation()
  // }

  function selectItemIcon(e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: Folder | File): void {
    if (itemsSelected.includes(item) === true) {
      setItemsSelected(itemsSelected.filter((itemSelected: Folder | File) => itemSelected !== item))
    } else {
      setItemsSelected([...itemsSelected, item])
    }
    e.stopPropagation()
  }

  // function isSelected(id: FolderId): boolean {
  //   return itemsSelected.includes(id)
  // }

  function isSelected(item: Folder | File): boolean {
    return itemsSelected.includes(item)
  }

  const value = {
    itemsSelected,
    setItemsSelected,
    typeFilter,
    setTypeFilter,
    nameFilter,
    setNameFilter,
    dateFilter,
    setDateFilter,
    showFilterItems,
    setShowFilterItems,
    selectItem,
    selectItemIcon,
    isSelected,
  }

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
}
