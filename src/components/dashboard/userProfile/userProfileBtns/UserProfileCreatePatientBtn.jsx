import style from './UserProfileBtns.module.css'

const UserProfileCreatePatientBtn = ({setShowAddPatient}) => {
  return (
    <button
          className={style.UserProfileBtns}
          onClick={() => setShowAddPatient(true)}
          >Add New Patient
        </button>
  )
};

export default UserProfileCreatePatientBtn;
