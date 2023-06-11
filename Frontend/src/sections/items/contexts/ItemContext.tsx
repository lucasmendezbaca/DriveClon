// import React, { useContext, useState } from 'react'

// const ItemContext = React.createContext({})

// export function useItems(): any {
//   return useContext(ItemContext)
// }

// export function ItemsProvider({ children }: any): JSX.Element {
//   const [itemsSelected, setItemsSelected] = useState([])
//   const [typeFilter, setTypeFilter] = useState('')
//   const [nameFilter, setNameFilter] = useState('')
//   const [dateFilter, setDateFilter] = useState('')
//   const [showFilterItems, setShowFilterItems] = useState(false)

//   const value = {
//     itemsSelected,
//     setItemsSelected,
//     typeFilter,
//     setTypeFilter,
//     nameFilter,
//     setNameFilter,
//     dateFilter,
//     setDateFilter,
//     showFilterItems,
//     setShowFilterItems,
//   }

//   return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
// }
