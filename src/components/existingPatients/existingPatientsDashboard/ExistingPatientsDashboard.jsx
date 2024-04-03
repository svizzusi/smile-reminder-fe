import style from './ExistingPatientsDashboard.module.css'
import  ExistingPatientsSearch from '../existingPatientsSearch/ExistingPatientsSearch';
import ExistingPatients from '../existingPatients/ExistingPatients'
const ExistingPatientsDashboard = () => {

  return (
    <>
      <section className={style.existingPatientsDashboardSection}>
        <section className={style.existingPatientsSearchSection}>
          <ExistingPatientsSearch />
        </section>
        <section className={style.existingPatients}>
          <ExistingPatients />
        </section>
      </section>
    </>
  )
};

export default ExistingPatientsDashboard;
