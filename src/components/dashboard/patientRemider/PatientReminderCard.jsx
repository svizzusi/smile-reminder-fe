import style from './PatientReminder.module.css'
import {BsTrash} from 'react-icons/bs';
import {AiOutlineEdit} from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useContext, useState} from 'react';
import {addWeeks, startOfWeek, format} from 'date-fns'
import {ToastContext} from '../../../App';

const PatientReminderCard = ({setShowEditPatient, setPatientId, patients, setPatients, fetchData}) => {

  const {toastSuccess, toastError} = useContext(ToastContext)

   // Fetch patients from the server on component mount
   useEffect(() => {
    fetchData();
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


  const [clickedItemIndex, setClickedItemIndex] = useState(null);


  const changeBackground = (index) => {
    setClickedItemIndex(index);
  };

  const copyToClipboard = (email) => {
    try {
      navigator.clipboard.writeText(email)
        .then(() => {
          toastSuccess('Successfully coppied patient Email to clipboard')
        })
        .catch((err) => {
          console.error('Clipboard writeText failed:', err);
          toastError(err.message)
        });
    } catch (err) {
      console.error('Clipboard API not supported:', err);
    }
  };

  const reminderWeek = format(startOfWeek(addWeeks(startOfWeek(new Date(), { weekStartsOn: 0 }), 4)), 'y-MM-dd')

  useEffect(() => {
    console.log(reminderWeek)
  }, []);
  

  return (
    <tbody className={style.patientReminderTableBody}>
      {patients.filter(patient => patient.frequency !== 0 && reminderWeek === patient.patientReminderWeek).map((patient, index) => {
        return (
          <tr
            className={style.patientReminderTableRowCard}
            key={patient._id}>
            {/* <td>{index +1}</td> */}
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.phone}</td>
            <td
              onClick={() => {
                copyToClipboard(patient.email)
                changeBackground(index)
              }
              }
              data-tooltip-id="my-tooltip" 
              data-tooltip-content="Click to copy"
              style={{
                backgroundColor:
                  index === clickedItemIndex ? 'var(--tan)' : 'null', // Change background color conditionally
              }}
              >{patient.email}
            </td>
            <td>{patient.frequency}</td>
            <td>
              <span className={style.patientReminderEditBtn}
                ><AiOutlineEdit
                  onClick={() => {
                    setShowEditPatient(true);
                    setPatientId(patient._id)
                  }}
                />
              </span>
            </td>
            <td>
              <span
                onClick={() => handleDelete(patient._id)}
                className={style.patientReminderDeleteBtn}
                ><BsTrash />
              </span>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
};

export default PatientReminderCard;
