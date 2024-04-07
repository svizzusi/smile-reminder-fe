import style from './ExistingPatientsHeader.module.css'

const ExistingPatientsHeader = () => {
  return (
    <thead className={style.existingPatientsTableHeader}>
      <tr className={style.existingPatientsTableRowHeader}>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Recall Frequency</th>
        <th>Edit Patient</th>
        <th>Delete Patient</th>
      </tr>
    </thead>
  )
};

export default ExistingPatientsHeader;
