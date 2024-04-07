import style from './PatientReminder.module.css'
import PatientReminderHeader from './PatientReminderHeader';
import PatientReminderCard from './PatientReminderCard';

const PatientReminder = ({setShowEditPatient}) => {
  return (
    <section className={style.patientReminderSection}>
        <h2 className={style.patientReminderHeading}>Patient Schedule Reminder</h2>
        <table className={style.patientReminderTable}>
          <PatientReminderHeader />
          <PatientReminderCard setShowEditPatient={setShowEditPatient}/>
        </table>
    </section>
  )
};

export default PatientReminder;
