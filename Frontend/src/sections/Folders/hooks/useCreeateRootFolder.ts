// import { formatDate } from '../../../utils/utils'
// import { useAuth } from '../../users/contexts/AuthContext'
// import { useFolders } from '../contexts/FoldersContext'
// import { BASE_URL } from '../../../env'
// import { createRootFolder } from '../../../modules/folders/aplication/createRootFolder'

// export function useCreateRootFolder(): void {
//   const { currentUser } = useAuth()
//   const { repository } = useFolders()

//   const currentDate = formatDate(new Date())
//   const rootFolder = {
//     id: currentUser.id,
//     userId: currentUser.id,
//     name: 'Mi unidad',
//     path: `${BASE_URL}uploads/items/${currentUser.id}/`,
//     highlighted: false,
//     createDate: currentDate,
//     updateDate: currentDate,
//   }

//   createRootFolder(repository, rootFolder)
//     .then((res) => {
//       console.log('RegisterForm: Root folder created: ', res)
//     })
//     .catch((err) => {
//       console.log('RegisterForm: Error creating root folder: ', err)
//     })
// }
