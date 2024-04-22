import UserProfile from "../components/dashboard/userProfileSR/UserProfile";

const DashboardSR = ({setPatientId, patientId}) => {
  return (
    <>
      <UserProfile patientId={patientId} setPatientId={setPatientId} />
    </>
  )
};

export default DashboardSR;
