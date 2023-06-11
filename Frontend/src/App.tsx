import './App.css'
import './normalize.css'
import Router from './Router'
import { AuthProvider } from './sections/users/contexts/AuthContext'
import { FoldersProvider } from './sections/Folders/contexts/FoldersContext'
import { FilesProvider } from './sections/Files/contexts/FilesContext'

function App(): JSX.Element {
  return (
    <>
      <FoldersProvider>
        <FilesProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </FilesProvider>
      </FoldersProvider>
    </>
  )
}

export default App
