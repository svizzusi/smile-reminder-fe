import ExistingPatientsDashboard from "../components/existingPatients/existingPatientsDashboard/ExistingPatientsDashboard";


const ExistingPatientsPage = ({setId, patientId, setPatientId}) => { 

  return (
    <>
      <ExistingPatientsDashboard setId={setId} patientId={patientId} setPatientId={setPatientId}/>
    </>
  )
};

export default ExistingPatientsPage;
