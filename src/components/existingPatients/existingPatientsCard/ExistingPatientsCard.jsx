import style from './ExistingPatientsCard.module.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
// import axios from 'axios';

const existingPatientsCard = ({setShowEditPatient}) => {
  return (
    <>
      <tbody className={style.existingPatientsTableBody}>
        <tr 
          className={style.existingPatientsTableRowCard} 
          >
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
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
        <tr>
          <td>No existing patients found</td>
        </tr>
      </tbody>
    </>
  )
};

export default existingPatientsCard;
