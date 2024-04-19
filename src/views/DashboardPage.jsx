import UserProfile from "../components/dashboard/userProfile/UserProfile";

const DashboardPage = ({setPatientId, patientId}) => {
  return (
    <>
      <UserProfile patientId={patientId} setPatientId={setPatientId} />
    </>
  )
};

export default DashboardPage;
