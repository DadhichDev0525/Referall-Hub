import Navbar from "../../components/Navbar";
import { referralUsers } from "../../data/referralUsers";
import { IoEyeOutline } from "react-icons/io5";
import { TbMessagePlus } from "react-icons/tb";
import { useState } from "react";
import NewPromoterModal from "./components/NewPromoterModel";
import Button from "../../components/Button";
import MetricCard from "../../components/MetricCard";

const Promoters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModel, setShowModal] = useState(false);

  const filteredPromoters = referralUsers.filter((promoter) => {
    const matchesSearch = promoter.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || promoter.referrerStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div>
      <Navbar title="Manage and monitor your promoter referral activities" />
      <div className="px-2 md:px-6 py-4 w-full">
      <div className="p-4 bg-white rounded-lg shadow w-full">
          <div className="flex gap-2 max-w-1/2 mb-4">
            <Button className="max-w-max px-3 py-1.5 "  onClick={() => setShowModal(true)}>+ New Promoter</Button>
            <button className="bg-[#FFF5F0] text-[#F2994A] px-3 py-1.5 w-1/2 text-sm font-medium rounded">Ask Past Customers For Referrals</button>
          </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <MetricCard title="Total Customers" value="8" sub={12} icon='/assets/dashboard/active_campaign.png' />
          <MetricCard title="New Customers" value="94" sub={8} icon='/assets/dashboard/total_promoters.png' />
          <MetricCard title="Average Conversion rate" value="64%"sub={-3} icon='/assets/dashboard/conversion_rate.png' />
          <MetricCard title="Total Revenue Generated" value="$23,900" sub={15} icon='/assets/dashboard/Revenue_generated.png' />
        </div>

        {/* Search & Filter */}
        <div className="flex justify-between items-center px-4 py-3 bg-[#F7F7F7] rounded-t-xl border border-[#D9D9D9] border-b-0">
          <h3 className="font-semibold">Promoters</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 text-sm px-2 py-1 rounded"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Promoters Table */}
        <div className="overflow-x-scroll">
        <table className=" min-w-max w-full text-sm text-left text-gray-700 border border-[#D9D9D9] rounded-b-xl overflow-hidden">
          <thead className="bg-[#FDFDFD] text-[#646464] border-b border-[#E6E6E6]">
            <tr>
              <th className="px-4 py-2 invisible"><input type="checkbox" /></th>
              <th className="px-4 py-2">Promoter Name</th>
              <th className="px-4 py-2">Contact No.</th>
              <th className="px-4 py-2">Leads</th>
              <th className="px-4 py-2">Conversion Rate</th>
              <th className="px-4 py-2">Last Follow-Up</th>
              <th className="px-4 py-2">Revenue Generated</th>
              <th className="px-4 py-2">Referrer Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPromoters.map((p, idx) => (
              <tr key={idx} className="border-b border-[#E6E6E6]">
                <td className="px-4 py-3"><input type="checkbox" /></td>
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">{p.contact}</td>
                <td className="px-4 py-3">{p.leads}</td>
                <td className="px-4 py-3">{p.conversionRate}</td>
                <td className="px-4 py-3">{p.lastFollowUp}</td>
                <td className="px-4 py-3">${p.revenueGenerated}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1.5 rounded-lg ${
                    p.referrerStatus === "Active" ? "bg-blue-100 text-blue-600" :
                    p.referrerStatus === "Completed" ? "bg-green-100 text-green-600" :
                    "bg-orange-100 text-orange-600"
                  }`}>
                    {p.referrerStatus}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-2 text-gray-500">
                  <IoEyeOutline className="h-4 w-4 cursor-pointer hover:text-black" title="View Profile" />
                  <TbMessagePlus className="h-4 w-4 cursor-pointer hover:text-black" title="Send follow-up message" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      </div>
      {/* New Promoter Modal */}
      {showModel && <NewPromoterModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Promoters;

