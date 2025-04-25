import Navbar from "../../components/Navbar"
import { useState } from "react";
import PastPromoters from "./components/PastPromoters";
import NewPromoters from "./components/NewPromoters";
import NewLeads from "./components/NewLeads";

const Campaign = () => {
  const [activeTab, setActiveTab] = useState("past");

  const renderTabContent = () => {
    switch (activeTab) {
      case "past":
        return <PastPromoters />;
      case "newPromoter":
        return <NewPromoters />;
      case "newLeads":
        return <NewLeads />;
      default:
        return null;
    }
  };
  return (
    <div>
    <Navbar title = 'Create & Manage Referral Campaigns' />
    <div className="flex gap-2 justify-between bg-white rounded-lg md:max-w-1/2 px-4 m-6">
        <button
          onClick={() => setActiveTab("past")}
          className={`px-4 w-1/3 py-1.5 rounded text-sm cursor-pointer font-medium ${
            activeTab === "past" ? "bg-[#305AFF]/10 border border-[#305AFF] text-[#305AFF] shadow-sm" : ""
          }`}
        >
          Past Promoters
        </button>
        <button
          onClick={() => setActiveTab("newPromoter")}
          className={`px-4 w-1/3 py-1.5 rounded cursor-pointer text-sm font-medium ${
            activeTab === "newPromoter" ? "bg-[#305AFF]/10 border border-[#305AFF] text-[#305AFF]  shadow-sm" : ""
          }`}
        >
          New Promoters
        </button>
        <button
          onClick={() => setActiveTab("newLeads")}
          className={`px-4 w-1/3 py-1.5 rounded cursor-pointer text-sm font-medium ${
            activeTab === "newLeads" ? "bg-[#305AFF]/10 border border-[#305AFF] text-[#305AFF]  shadow-sm" : ""
          }`}
        >
          New Leads
        </button>
      </div>
     <div className='p-4 m-6 bg-white shadow rounded-lg'>
      <div className="mt-6">{renderTabContent()}</div>
      </div>
     </div>
  )
}

export default Campaign