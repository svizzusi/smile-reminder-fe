import style from './UserProfile.module.css'

import UserProfileWelcome from "../userProfile/userProfileWelcome/UserProfileWelcome";
import UserPatientExistingPatientsBtn from './userProfileBtns/UserProfileExistingPatientBtn'
import UserPatientCreatePatientBtn from './userProfileBtns/UserProfileCreatePatientBtn'
import PatientReminder from '../patientRemider/PatientReminder'
import AddPatient from '../addPatient/AddPatient';
import EditPatient from '../editPatient/EditPatient';

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

// import axios from 'axios'

const UserProfile = () => {

  const navigate = useNavigate()

   // Fetch UserName from the server on component mount
   useEffect(() => {
      const userName = window.sessionStorage.getItem('userName')
      if (!userName) {
        navigate('/')
      } else {
      console.log("UserName from sessionStorage:", userName);
      }
    }, [])

  const [showAddPatient, setShowAddPatient] = useState(false)
  const [showEditPatient, setShowEditPatient] = useState(false)

  return (
    <section className={style.userProfileSection}>
      {showAddPatient && <AddPatient setShowAddPatient={setShowAddPatient}/> }
      {showEditPatient && <EditPatient setShowEditPatient={setShowEditPatient}/>}
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserPatientExistingPatientsBtn />
          <UserPatientCreatePatientBtn setShowAddPatient={setShowAddPatient}/>
        </div>
      </div>
      <section className={style.patientReminder}>
        <PatientReminder setShowEditPatient={setShowEditPatient}/>
      </section>
    </section>
  )
};

export default UserProfile;
