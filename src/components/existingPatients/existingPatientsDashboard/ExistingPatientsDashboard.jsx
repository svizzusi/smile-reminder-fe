import style from './ExistingPatientsDashboard.module.css'

import  ExistingPatientsSearch from '../existingPatientsSearch/ExistingPatientsSearch';
import ExistingPatients from '../existingPatients/ExistingPatients'
import EditPatient from '../../dashboard/editPatient/EditPatient'

import {useState} from 'react'
// import {useNavigate} from 'react-router-dom'

const ExistingPatientsDashboard = () => {

  const [showEditPatient, setShowEditPatient] = useState(false)
  // const navigate = useNavigate()

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
