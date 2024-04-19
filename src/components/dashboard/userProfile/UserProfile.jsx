import style from './UserProfile.module.css'

import UserProfileWelcome from "../userProfile/userProfileWelcome/UserProfileWelcome";
import UserPatientExistingPatientsBtn from './userProfileBtns/UserProfileExistingPatientBtn'
import UserPatientCreatePatientBtn from './userProfileBtns/UserProfileCreatePatientBtn'
import PatientReminder from '../patientRemider/PatientReminder'
import AddPatient from '../addPatient/AddPatient';
import EditPatient from '../editPatient/EditPatient';

import axios from 'axios'

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


const UserProfile = ({patientId, setPatientId}) => {

  const navigate = useNavigate()

  const [showAddPatient, setShowAddPatient] = useState(false)
  const [showEditPatient, setShowEditPatient] = useState(false)
  const [patients, setPatients] = useState([]); // State to store the Products
  const [userId, setUserId] = useState(window.sessionStorage.getItem('userId')); // State to store the User id

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
        const res = await axios.get(`http://localhost:3000/patients/getPatients/${userId}`);
        console.log(res.data);
        setPatients(res.data);
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <section className={style.userProfileSection}>
      {showAddPatient && <AddPatient setShowAddPatient={setShowAddPatient} fetchData={fetchData}/> }
      {showEditPatient && <EditPatient setShowEditPatient={setShowEditPatient} setPatientId={setPatientId} patientId={patientId} fetchData={fetchData}/>}
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserPatientExistingPatientsBtn />
          <UserPatientCreatePatientBtn setShowAddPatient={setShowAddPatient}/>
        </div>
      </div>
      <section className={style.patientReminder}>
        <PatientReminder setShowEditPatient={setShowEditPatient} setPatientId={setPatientId} patientId={patientId} patients={patients} setPatients={setPatients} fetchData={fetchData}/>
      </section>
    </section>
  )
};

export default UserProfile;
