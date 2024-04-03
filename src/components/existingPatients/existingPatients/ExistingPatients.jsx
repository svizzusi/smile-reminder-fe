import style from './ExistingPatients.module.css'
import ExistingPatientsCard from "../existingPatientsCard/ExistingPatientsCard";
import ExistingPatientsHeader from '../existingPatientsHeader/ExistingPatientsHeader';

const ExistingPatients = () => {
  return (
    <section className={style.existingPatientsSection}>
      <h2 className={style.existingPatientsHeading}>Existing Patients</h2>
      <table className={style.existingPatientsTable}>
        <ExistingPatientsHeader />
        <ExistingPatientsCard />
      </table>
    </section>
  )
};

export default ExistingPatients;
