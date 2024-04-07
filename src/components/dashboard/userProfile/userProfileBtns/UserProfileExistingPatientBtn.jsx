import style from './UserProfileBtns.module.css'
import { useNavigate } from 'react-router-dom'

const UserProfileExistingPatientBtn = () => {

  const navigate = useNavigate();

  return (
    <button
          className={style.UserProfileBtns}
          onClick={() => navigate(`/existing-patients-page`)}
          >Existing Patients
        </button>
  )
};

export default UserProfileExistingPatientBtn;
