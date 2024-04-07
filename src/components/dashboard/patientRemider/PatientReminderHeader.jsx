import style from './PatientReminder.module.css'

const PatientReminderHeader = () => {
  return (
    <thead className={style.patientReminderTableHeader}>
      <tr className={style.patientReminderTableRowHeader}>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Recall Frequency</th>
        <th>Edit Patient</th>
        <th>Delete Patient</th>
      </tr>
    </thead>
  )
};

export default PatientReminderHeader;
