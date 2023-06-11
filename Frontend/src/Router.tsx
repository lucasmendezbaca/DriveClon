import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './sections/landing_page/LandingPage'
import AccountSettings from './sections/account_setting/AccountSettings'
import { ItemsProvider } from './sections/dashboard/components/main/context/ItemContext'
import DashboardLayout from './sections/dashboard/layouts/dashboardLayout'
import Main from './sections/dashboard/components/main/default_main/Main'
import RecentMain from './sections/dashboard/components/main/recent_main/RecentMain'
import HighlightedMain from './sections/dashboard/components/main/highlighted_main/HighlightedMain'
import FilterMain from './sections/dashboard/components/main/filter_main/FilterMain'
import NotFound from './sections/404/NotFound'

const Router = (): JSX.Element => {
  return (
    <>
      <ItemsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/dashboard' element={<DashboardLayout />}>
              <Route index element={<Main />} />
              <Route path='recent' element={<RecentMain />} />
              <Route path='highlighted' element={<HighlightedMain />} />
              <Route path='filter' element={<FilterMain />} />
            </Route>
            <Route path='/account-settins' element={<AccountSettings />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ItemsProvider>
    </>
  )
}

export default Router
