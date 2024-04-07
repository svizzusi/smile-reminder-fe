import style from './PatientReminder.module.css'
import {BsTrash} from 'react-icons/bs';
import {AiOutlineEdit} from 'react-icons/ai';
import axios from 'axios';
// import {useState} from 'react'
// import {addWeeks, startOfWeek, format} from 'date-fns'

const PatientReminderCard = ({setShowEditPatient}) => {

  // const [clickedItemIndex, setClickedItemIndex] = useState(null);

  const handleDelete = async () => {
    try {
      await axios.delete(``)
        .then(() => {
          // Remove the deleted product from the local state
        })
    } catch (err) {
      console.log(err)
    }
  };

  // const changeBackground = (index) => {
  //   setClickedItemIndex(index);
  // };

  // const copyToClipboard = (productID) => {
  //   try {
  //     navigator.clipboard.writeText(productID)
  //       .then(() => {
  //         // toastSuccess('Successfully coppied product ID to clipboard')
  //       })
  //       .catch((err) => {
  //         console.error('Clipboard writeText failed:', err);
  //         // toastError(err.message)
  //       });
  //   } catch (err) {
  //     console.error('Clipboard API not supported:', err);
  //   }
  // };

  // const reminderWeek = format(startOfWeek(addWeeks(startOfWeek(new Date(), { weekStartsOn: 0 }), 4)), 'y-MM-dd')

  return (
    <tbody className={style.patientReminderTableBody}>
          <tr
            className={style.patientReminderTableRowCard}
          >
            {/* <td>{index +1}</td> */}
            <td>Vizzusi</td>
            <td>Stephen</td>
            <td>(408) 415-1606</td>
            <td
              // onClick={() => {
              //   copyToClipboard(product.productId)
              //   changeBackground(index)
              // }
              // }
              // data-tooltip-id="my-tooltip" 
              // data-tooltip-content="Click to copy"
              // style={{
              //   backgroundColor:
              //     index === clickedItemIndex ? 'var(--tan)' : 'null', // Change background color conditionally
              // }}
              >svizzusi13@gmail.com
            </td>
            <td>26</td>
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
    </tbody>
  )
};

export default PatientReminderCard;
