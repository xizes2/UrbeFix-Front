import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComplaintDetails from "../../components/complaintDetails/ComplaintDetails";
import Header from "../../components/header/Header";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";

const ComplaintDetailsPage = (): JSX.Element => {
  const complaintInitialState: IRegisteredComplaint = {
    category: "",
    title: "",
    countComplaints: 0,
    image: "",
    id: "",
    imageBackUp: "",
    address: "",
    location: [],
  };

  const { getComplaint } = useComplaints();
  const { id } = useParams();
  const [complaint, setComplaint] = useState(complaintInitialState);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    (async () => {
      const complaint = await getComplaint(id!);
      setComplaint(complaint);
    })();
  }, [getComplaint, id]);

  return (
    <>
      <Header />
      <ComplaintDetails complaint={complaint} />
    </>
  );
};

export default ComplaintDetailsPage;
