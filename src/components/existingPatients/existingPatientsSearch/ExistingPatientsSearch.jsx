import style from './ExistingPatientsSearch.module.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import {useState, useContext} from 'react'

import axios from 'axios';
import {ToastContext} from '../../../App';

const ExistingPatientsSearch = ({patients, setPatients, setPatientId, setShowEditPatient}) => {

  const {toastSuccess, toastError} = useContext(ToastContext)

  const [search, setSearch] = useState('')

  function handleChange(e) {
    setSearch(e.target.value)
  }

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
    <section className={style.existingPatientsSearchSection}>
      <div>
        <input
          className={style.existingPaitientsSearchInput}
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={search}
        />
      </div>
      {search && <div className={style.existingPatientsSearchContainer}>
        <table className={style.existingPatientsSearchTable}>
          <tbody className={style.existingPatientsSearchTableBody}>
            {patients.filter((patient) =>
                      patient.lastName.toLowerCase().includes(search) ||
                      patient.firstName.toLowerCase().includes(search) ||
                      patient.email.toLowerCase().includes(search)
                    ).map((patient) => {
              return (
                <tr 
                  className={style.existingPatientsSearchTableRowCard} 
                  key ={patient._id}
                >
                  <td>{patient.lastName}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.email}</td>
                  <td>{patient.frequency}</td>
                  <td>
                    <span className={style.existingPatientsSearchEditBtn}>
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
                      className={style.existingPatientsSearchDeleteBtn}
                      ><BsTrash />
                    </span>
                  </td>
                </tr>
            )})}
          </tbody>
        </table>
      </div>}
    </section>
  )
};

export default ExistingPatientsSearch;
