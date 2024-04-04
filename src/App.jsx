import './App.css'
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import Navbar from '../src/layout/navbar/Navbar'
import Footer from '../src/layout/footer/Footer'
import HomePage from '../src/views/HomePage'
import DashboardPage from '../src/views/DashboardPage'
import ExistingPatientsPage from '../src/views/ExistingPatientsPage'
import AboutPage from '../src/views/AboutPage'
import PrivacyPage from '../src/views/PrivacyPage'
import TermsPage from '../src/views/TermsPage'
import ErrorPage from '../src/views/ErrorPage'

function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  return (
    <>
    <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
    <Routes>
      <Route path='/' element={<HomePage showLogin={showLogin} setShowLogin={setShowLogin} showSignup={showSignup} setShowSignup={setShowSignup}/>} />
      <Route path='/dashboard-page' element={<DashboardPage />} />
      <Route path='/existing-patients-page' element={<ExistingPatientsPage />} />
      <Route path='/about-page' element={<AboutPage />} />
      <Route path='/privacy-page' element={<PrivacyPage />} />
      <Route path='/terms-page' element={<TermsPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
