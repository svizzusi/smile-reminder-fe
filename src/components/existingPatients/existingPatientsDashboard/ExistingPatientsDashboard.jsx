import style from './ExistingPatientsDashboard.module.css'

import  ExistingPatientsSearch from '../existingPatientsSearch/ExistingPatientsSearch';
import ExistingPatients from '../existingPatients/ExistingPatients'
import EditPatient from '../../dashboard/editPatient/EditPatient'

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const ExistingPatientsDashboard = () => {

  const [showEditPatient, setShowEditPatient] = useState(false)
  const navigate = useNavigate()

  // Fetch UserName from the server on component mount
  useEffect(() => {
    const userName = window.sessionStorage.getItem('userName')
    if (!userName) {
      navigate('/')
    } else {
    console.log("UserName from sessionStorage:", userName);
    };
  }, [])

  return (
    <>
    {showEditPatient && <EditPatient setShowEditPatient={setShowEditPatient} />}
      <section className={style.existingPatientsDashboardSection}>
        <section className={style.existingPatientsSearchSection}>
          <ExistingPatientsSearch />
        </section>
        <section className={style.existingPatients}>
          <ExistingPatients setShowEditPatient={setShowEditPatient}/>
        </section>
      </section>
    </>
  )
};

export default ExistingPatientsDashboard;
