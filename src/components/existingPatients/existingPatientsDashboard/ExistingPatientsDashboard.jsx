import style from './ExistingPatientsDashboard.module.css'

import ExistingPatientsSearch from '../existingPatientsSearch/ExistingPatientsSearch';
import ExistingPatients from '../existingPatients/ExistingPatients'
import EditPatient from '../../dashboard/editPatient/EditPatient'

import axios from 'axios'

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const ExistingPatientsDashboard = ({patientId, setPatientId}) => {

  const navigate = useNavigate()
  
  const [showEditPatient, setShowEditPatient] = useState(false)
  const [patients, setPatients] = useState([]); // State to store the Products
  const [id, setId] = useState(window.sessionStorage.getItem('userId')) // State to store the User id


  // Fetch UserName from the server on component mount
  useEffect(() => {
    const userName = window.sessionStorage.getItem('userName')
    if (!userName) {
      navigate('/')
    } else {
    console.log("UserName from sessionStorage:", userName);
    }
  }, [])

  const fetchData = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/patients/getPatients/${id}`)
        console.log(res)
        setPatients(res.data);
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <>
    {showEditPatient && <EditPatient setShowEditPatient={setShowEditPatient} patientId={patientId} setPatientId={setPatientId} fetchData={fetchData}/>}
      <section className={style.existingPatientsDashboardSection}>
        <section className={style.existingPatientsSearchSection}>
          <ExistingPatientsSearch />
        </section>
        <section className={style.existingPatients}>
          <ExistingPatients setShowEditPatient={setShowEditPatient} setPatientId={setPatientId} patients={patients} setPatients={setPatients} fetchData={fetchData}/>
        </section>
      </section>
    </>
  )
};

export default ExistingPatientsDashboard;
