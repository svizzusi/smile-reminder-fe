import style from './PatientReminder.module.css'
import PatientReminderHeader from './PatientReminderHeader';
import PatientReminderCard from './PatientReminderCard';

const PatientReminder = ({setShowEditPatient, setPatientId, patients, setPatients, fetchData}) => {
  return (
    <section className={style.patientReminderSection}>
        <h2 className={style.patientReminderHeading}>Patient Schedule Reminder</h2>
        <table className={style.patientReminderTable}>
          <PatientReminderHeader />
          <PatientReminderCard setShowEditPatient={setShowEditPatient} setPatientId={setPatientId} patients={patients} setPatients={setPatients} fetchData={fetchData}/>
        </table>
    </section>
  )
};

export default PatientReminder;
