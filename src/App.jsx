import './App.css'
import {Routes, Route} from 'react-router-dom'
import {useState, createContext, useEffect} from 'react'
import axios from 'axios'

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../src/layout/navbar/Navbar'
import Footer from '../src/layout/footer/Footer'
import HomePage from '../src/views/HomePage'
import DashboardPage from '../src/views/DashboardPage'
import ExistingPatientsPage from '../src/views/ExistingPatientsPage'
import AboutPage from '../src/views/AboutPage'
import PrivacyPage from '../src/views/PrivacyPage'
import TermsPage from '../src/views/TermsPage'
import ErrorPage from '../src/views/ErrorPage'

export const ToastContext = createContext()

function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  // const [patients, setPatients] = useState([])
  const [id, setId] = useState(window.sessionStorage.getItem('userId'))
  const [user, setUser] = useState(id ? true : false)

  useEffect(() => {
    setUser(id ? true : false)
  }, [id]);
  

  const toastSuccess = (message) => {
    toast.success(message);
  }
  const toastError = (message) => {
    toast.error(message);
  }

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/patients/getPatients/${id}`)
  //     console.log(res)
  //     setPatients(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
    <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} user={user} setId={setId}/>
    <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        progress={undefined}
      />
      <ToastContext.Provider value={{toastSuccess, toastError}}>
        <Routes>
          <Route path='/' element={<HomePage showLogin={showLogin} setShowLogin={setShowLogin} showSignup={showSignup} setShowSignup={setShowSignup} setId={setId}/>} />
          <Route path='/dashboard-page' element={<DashboardPage />} />
          <Route path='/existing-patients-page' element={<ExistingPatientsPage />} />
          <Route path='/about-page' element={<AboutPage />} />
          <Route path='/privacy-page' element={<PrivacyPage />} />
          <Route path='/terms-page' element={<TermsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ToastContext.Provider> 
    <Footer />
    </>
  )
}

export default App
