import {useContext, useEffect} from 'react'

import style from './ExistingPatientsCard.module.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'

import axios from 'axios';
import {ToastContext} from '../../../App';

const ExistingPatientsCard = ({setShowEditPatient, setPatientId, patients, setPatients, fetchData}) => {

  const {toastSuccess, toastError} = useContext(ToastContext)

  useEffect(() => {
    fetchData()
    console.log(patients)
  }, []);

  const handleDelete = async (patientId) => {
    try {
      await axios.delete(`http://localhost:3000/patients/deletePatient/${patientId}`)
        .then(() => {
            // Remove the deleted patient from the local state
            setPatients((prevPatients) => prevPatients.filter((patient) => patient._id !== patientId));
            toastSuccess('Patient deleted successfully')
        })
    } catch (err) {
      toastError(err.message)
      console.error(err)
    }
  };

  return (
    <>
      <tbody className={style.existingPatientsTableBody}>
        {patients.map((patient) => {
          return (
            <tr 
              className={style.existingPatientsTableRowCard} 
              key ={patient._id}
            >
              <td>{patient.lastName}</td>
              <td>{patient.firstName}</td>
              <td>{patient. phone}</td>
              <td>{patient.email}</td>
              <td>{patient.frequency}</td>
              <td>
                <span className={style.existingPatientsEditBtn}>
                    <AiOutlineEdit
                    onClick={() => {
                      setShowEditPatient(true)
                      setPatientId(patient._id)
                    }}
                  />
                </span>
              </td>
              <td>
                <span 
                  onClick={() => handleDelete(patient._id)}
                  className={style.existingPatientsDeleteBtn}
                  ><BsTrash />
                </span>
              </td>
            </tr>
          )
        })
      }
      {patients.length == 0 &&
        <tr>
          <td>No existing patients found</td>
        </tr>
      }
      </tbody>
    </>
  )
};

export default ExistingPatientsCard;
