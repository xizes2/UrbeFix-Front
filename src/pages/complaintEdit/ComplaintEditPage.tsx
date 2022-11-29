import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditComplaint from "../../components/forms/editComplaint/EditComplaint";
import Header from "../../components/header/Header";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";

const ComplaintEditPage = (): JSX.Element => {
  const complaintInitialState: IRegisteredComplaint = {
    category: "",
    title: "",
    countComplaints: 0,
    image: "",
    id: "",
    imageBackUp: "",
    address: "",
    location: [],
    owner: "",
  };

  const { getComplaint } = useComplaints();
  const { id } = useParams();
  const [complaintToEdit, setComplaintToEdit] = useState(complaintInitialState);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    (async () => {
      const originalComplaint = await getComplaint(id!);
      setComplaintToEdit(originalComplaint);
    })();
  }, [getComplaint, id]);

  // console.log(complaintToEdit);

  return (
    <>
      <Header />
      <EditComplaint complaint={complaintToEdit} />
    </>
  );
};

export default ComplaintEditPage;
