import {useContext, useState, useEffect} from 'react'

import style from './ExistingPatientsCard.module.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'

import axios from 'axios';
import {ToastContext} from '../../../App';

const existingPatientsCard = ({setShowEditPatient}) => {

  const {toastSuccess, toastError} = useContext(ToastContext)

  const [patients, setPatients] = useState([]); // State to store the Products
  const [id, setId] = useState(window.sessionStorage.getItem('userId')) // State to store the User id

  const fetchData = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/patients/getPatients/${id}`)
        console.log(res)
        setPatients(res.data);
    } catch (err) {
        console.log(err);
    }
  };

  useEffect(() => {
    fetchData()
    console.log(id)
    console.log(patients)
  }, []);

  return (
    <>
      <tbody className={style.existingPatientsTableBody}>
        {patients.map((patient, index) => {
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
                <span className={style.existingPatientsEditBtn}
                  >
                    <AiOutlineEdit
                    onClick={() => {
                      setShowEditPatient(true)
                      // setPatientId(patient._id)
                    }}
                  />
                </span>
              </td>
              <td>
                <span 
                  // onClick={() => handleDelete(patient._id)}
                  className={style.existingPatientsDeleteBtn}
                  >
                    <BsTrash />
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

export default existingPatientsCard;
