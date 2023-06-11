import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './sections/landing_page/LandingPage'
import Dashboard from './sections/dashboard/Dashboard'
import AccountSettings from './sections/account_setting/AccountSettings'
import { ItemsProvider } from './sections/dashboard/components/main/context/ItemContext'

const Router = (): JSX.Element => {
  return (
    <>
      <ItemsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/account-settins' element={<AccountSettings />}></Route>
          </Routes>
        </BrowserRouter>
      </ItemsProvider>
    </>
  )
}

export default Router
