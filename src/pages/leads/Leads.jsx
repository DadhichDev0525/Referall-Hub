import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import { referralUsers } from "../../data/referralUsers"
import { IoEyeOutline } from "react-icons/io5";
import { TbMessagePlus } from "react-icons/tb";

const Leads = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredLeads = referralUsers.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.coupon.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      statusFilter === "All" || lead.leadStatus === statusFilter;

    return matchesSearch && matchesFilter;
  });
  return (
    <div>
    <Navbar title = 'Leads' />
     <div className='p-4 m-6 bg-white shadow rounded-lg'>
     <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Manage and monitor your leads</h2>

      <div className="border border-[#D9D9D9] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-[#F7F7F7]">
          <h3 className="font-semibold">Leads</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-0"
            />
            <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 text-sm px-2 py-1 rounded focus:outline-0"
                >
                  <option value="All">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
          </div>
        </div>

        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-[#FDFDFD] border-b border-[#E6E6E6] text-[#646464]">
            <tr>
              <th className="invisible px-4 py-2 text-left"><input type="checkbox" /></th>
              <th className="px-4 py-2 text-left">Lead Name</th>
              <th className="px-4 py-2 text-left">Email ID</th>
              <th className="px-4 py-2 text-left">Contact No.</th>
              <th className="px-4 py-2 text-left">Coupon Code</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead, index) => (
              <tr key={index} className="border-b border-[#E6E6E6]">
                <td className="px-4 py-3"><input type="checkbox" /></td>
                <td className="px-4 py-3">{lead.name}</td>
                <td className="px-4 py-3">{lead.email}</td>
                <td className="px-4 py-3">{lead.contact}</td>
                <td className="px-4 py-3">{lead.coupon}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1.5 rounded-lg ${lead.leadStatus === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {lead.leadStatus}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-2 text-gray-500">
                  <IoEyeOutline 
                  className="h-4 w-4 cursor-pointer hover:text-black" 
                  onClick={() => navigate(`/leads/${lead.id}`)}
                  />
                  <TbMessagePlus className="h-4 w-4 cursor-pointer hover:text-black" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
     </div>
  )
}

export default Leads