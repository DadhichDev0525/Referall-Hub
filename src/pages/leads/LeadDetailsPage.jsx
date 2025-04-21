import { useParams, useNavigate } from "react-router-dom";
import { referralUsers } from "../../data/referralUsers";
import Navbar from "../../components/Navbar";
import { CiMail } from "react-icons/ci";
import { IoCallOutline, IoChatboxOutline  } from "react-icons/io5";

const LeadDetailsPage = () => {
  const { leadId } = useParams();
  const navigate = useNavigate();
  const lead = referralUsers.find((l) => l.id == leadId); // Assuming `id` field in referralUsers

  if (!lead) {
    return <div className="p-6">Lead not found</div>;
  }

  return (
    <div>
      <Navbar title="Manage and monitor your leads" />
      <div className="p-6 m-6 bg-white rounded-lg shadow">
        <button onClick={() => navigate(-1)} className="text-sm text-[#666666] mb-4 cursor-pointer">&larr; Back</button>

        <div className=" bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src='/assets/lead.png' alt='user'  />
            <div>
              <h3 className="text-xl text-[#333333] font-semibold">{lead.name}</h3>
              <div className="flex gap-4 items-center  text-[#666666]">
              <p className="flex gap-2 items-center"><span><CiMail /></span> {lead.email}</p>
              <p className="flex gap-2 items-center"><span><IoCallOutline /></span>{lead.contact}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center text-xl">

            <button><IoChatboxOutline /></button>
            <button><CiMail /></button>
          </div>
          </div>

          <div className="mt-6">
            <p className="text-[#333333]">Change Status</p>
            <select
              className="border border-gray-300 rounded px-3 py-2 my-4 text-sm min-w-md"
              defaultValue={lead.leadStatus}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsPage;
