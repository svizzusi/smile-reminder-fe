import style from './ExistingPatients.module.css'
import ExistingPatientsCard from "../existingPatientsCard/ExistingPatientsCard";
import ExistingPatientsHeader from '../existingPatientsHeader/ExistingPatientsHeader';

const ExistingPatients = ({setShowEditPatient, setPatientId, patients, setPatients, fetchData}) => {
  return (
    <section className={style.existingPatientsSection}>
      <h2 className={style.existingPatientsHeading}>Existing Patients</h2>
      <table className={style.existingPatientsTable}>
        <ExistingPatientsHeader />
        <ExistingPatientsCard setShowEditPatient={setShowEditPatient} setPatientId={setPatientId} patients={patients} setPatients={setPatients} fetchData={fetchData}/>
      </table>
    </section>
  )
};

export default ExistingPatients;
