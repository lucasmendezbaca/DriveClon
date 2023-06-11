import './LandingPage.css'
import Menu from './componenets/menu/Menu'
import Hero from './componenets/hero/Hero'
import SectionFunctions from './componenets/section_functions/SectionFunctions'
import SectionPrices from './componenets/section_prices/SectionPrices'
import Footer from './componenets/footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../users/contexts/AuthContext'
import { useEffect } from 'react'

function LandingPage(): JSX.Element {
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  useEffect(() => {
    if (Object.keys(currentUser).length !== 0) {
      navigate('/dashboard')
    }
  }, [currentUser])

  return (
    <>
      <Menu />
      <main className='landing-page-main'>
        <Hero />
        <SectionFunctions />
        <SectionPrices />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage
