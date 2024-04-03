import style from './ExistingPatientsDashboard.module.css'
import  ExistingPatientsSearch from '../existingPatientsSearch/ExistingPatientsSearch';
import ExistingPatientsCard from '../existingPatientsCard/ExistingPatientsCard'
const ExistingPatientsDashboard = () => {

  return (
    <>
      <section className={style.existingPatientsDashboardSection}>
        <section className={style.existingPatientsSearchSection}>
          <ExistingPatientsSearch />
        </section>
        <section className={style.existingPatients}>
          <ExistingPatientsCard />
        </section>
      </section>
    </>
  )
};

export default ExistingPatientsDashboard;
