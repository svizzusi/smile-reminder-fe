import style from './ExistingPatients.module.css'
import ExistingPatientsCard from "../existingPatientsCard/ExistingPatientsCard";
import ExistingPatientsHeader from '../existingPatientsHeader/ExistingPatientsHeader';

const ExistingPatients = ({setShowEditPatient}) => {
  return (
    <section className={style.existingPatientsSection}>
      <h2 className={style.existingPatientsHeading}>Existing Patients</h2>
      <table className={style.existingPatientsTable}>
        <ExistingPatientsHeader />
        <ExistingPatientsCard setShowEditPatient={setShowEditPatient}/>
      </table>
    </section>
  )
};

export default ExistingPatients;
