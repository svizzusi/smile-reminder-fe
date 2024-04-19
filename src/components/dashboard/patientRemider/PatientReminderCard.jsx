import style from './PatientReminder.module.css'
import {BsTrash} from 'react-icons/bs';
import {AiOutlineEdit} from 'react-icons/ai';
import axios from 'axios';
import {useState, useEffect, useContext} from 'react';
import {addWeeks, startOfWeek, format} from 'date-fns'
import {ToastContext} from '../../../App';

const PatientReminderCard = ({setShowEditPatient, setPatientId, patients, setPatients, fetchData}) => {

  const {toastSuccess, toastError} = useContext(ToastContext)
  const [patientRefresh, setPatientRefresh] = useState(false)
  const [id, setId] = useState(window.sessionStorage.getItem('userId')) // State to store the User id

   // Fetch patients from the server on component mount
   useEffect(() => {
    fetchData();
}, []);

  // const [clickedItemIndex, setClickedItemIndex] = useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/patients/deletePatient/${id}`)
        .then(() => {
          // Remove the deleted patient from the local state
          setPatients((prevPatients) => prevPatients.filter((patient) => patient._id !== id));
          toastSuccess('Successfully deleted patient');
        })
    } catch (err) {
      toastError(err.message)
      console.log(err)
    }
  };

  // const changeBackground = (index) => {
  //   setClickedItemIndex(index);
  // };

  // const copyToClipboard = (patientID) => {
  //   try {
  //     navigator.clipboard.writeText(patientID)
  //       .then(() => {
  //         // toastSuccess('Successfully coppied patient ID to clipboard')
  //       })
  //       .catch((err) => {
  //         console.error('Clipboard writeText failed:', err);
  //         // toastError(err.message)
  //       });
  //   } catch (err) {
  //     console.error('Clipboard API not supported:', err);
  //   }
  // };

  const reminderWeek = format(startOfWeek(addWeeks(startOfWeek(new Date(), { weekStartsOn: 0 }), 1)), 'y-MM-dd')

  return (
    <tbody className={style.patientReminderTableBody}>
      {patients.filter(patient => patient.frequency !== 0 && reminderWeek === patient.patientReminderWeek).map((patient) => {
        return (
          <tr
            className={style.patientReminderTableRowCard}
          key={patient._id}>
            {/* <td>{index +1}</td> */}
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.phone}</td>
            <td
              // onClick={() => {
              //   copyToClipboard(patient.patientId)
              //   changeBackground(index)
              // }
              // }
              // data-tooltip-id="my-tooltip" 
              // data-tooltip-content="Click to copy"
              // style={{
              //   backgroundColor:
              //     index === clickedItemIndex ? 'var(--tan)' : 'null', // Change background color conditionally
              // }}
              >{patient.email}
            </td>
            <td>{patient.frequency}</td>
            <td>
              <span className={style.patientReminderEditBtn}
                ><AiOutlineEdit
                  onClick={() => {
                    setShowEditPatient(true);
                  }}
                />
              </span>
            </td>
            <td>
              <span
                onClick={() => handleDelete()}
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
