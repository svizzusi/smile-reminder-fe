import './App.css'
import {Routes, Route} from 'react-router-dom'

import NavBar from '../src/layout/navbar/Navbar'
import Footer from '../src/layout/footer/Footer'
import HomePage from '../src/views/HomePage'
import DashboardPage from '../src/views/DashboardPage'
import ExistingPatients from '../src/views/ExistingPatients'
import AboutPage from '../src/views/AboutPage'
import PrivacyPage from '../src/views/PrivacyPage'
import TermsPage from '../src/views/TermsPage'
import ErrorPage from '../src/views/ErrorPage'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard-page' element={<DashboardPage />} />
      <Route path='/existing-patients' element={<ExistingPatients />} />
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
