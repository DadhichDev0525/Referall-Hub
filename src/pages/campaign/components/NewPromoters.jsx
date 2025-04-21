import { useState } from "react";
import Button from "../../../components/Button";

const NewPromoter = () => {
  const [activeTab, setActiveTab] = useState("promoter");

  // Shared data
  const [campaignName, setCampaignName] = useState("Summer Referral Special");

  // Promoter tab
  const [promoterRewardValue, setPromoterRewardValue] = useState("200 points");
  const [promoterMessage, setPromoterMessage] = useState(
    "Hey! Share this with your friends and get $20 for each successful signup!"
  );

  // Leads tab
  const [leadRewardValue, setLeadRewardValue] = useState("20%");
  const [leadMessage, setLeadMessage] = useState(
    "You’ve been invited! Sign up now and get 15% off your first order"
  );
  const [formFields, setFormFields] = useState([
    "Full Name",
    "Email Address",
    "Agree to Terms & Conditions & Opt-in",
  ]);

  const toggleField = (field) => {
    setFormFields((prev) =>
      prev.includes(field)
        ? prev.filter((f) => f !== field)
        : [...prev, field]
    );
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex bg-[#305AFF]/10 max-w-md mb-4 rounded transition-all p-0.5">
        <button
          className={`px-4 py-1.5 w-1/2 rounded cursor-pointer
            ${activeTab === "promoter"
              ? "text-[#333333]"
              : "text-[#888888] bg-white"}
          `}
          onClick={() => setActiveTab("promoter")}
        >
          Promoter Settings
        </button>
        <button
          className={`px-4 w-1/2 rounded cursor-pointer
            ${activeTab === "leads"
              ? "text-[#333333]"
              : "text-[#888888] bg-white"}
          `}
          onClick={() => setActiveTab("leads")}
        >
          Leads Settings
        </button>
      </div>

      {/* Tab Content */}
      <div className="rounded-md space-y-6">
        {/* Shared Campaign Name */}
        <div className="bg-white rounded-md shadow ">
          <label className="block bg-[#F9FBFC] p-3 rounded-md font-medium ">Campaign Name</label>
          <input
            className="w-[97%] border border-[#AAAAAA] text-[#333333] bg-white m-4 rounded-md p-2 text-sm focus:outline-0"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>
        {/* Promoter & Leads Settings */}
          <div className="bg-white rounded-md shadow ">
          {activeTab !== 'promoter' && <div className="block bg-[#F9FBFC] p-3 rounded-md font-medium ">Leads Settings</div>}
            {/* Reward Type & Value */}
            <div className="p-4 text-[#666666]">
            <div className="flex gap-4">
              <div className="w-1/4">
                <label className="block text-sm font-medium mb-1">Reward Type <span className="text-red-500">*</span></label>
                <button className="bg-[#305AFF]/10 text-[#305AFF] font-medium px-4 pb-2 rounded-md w-full">
                  <p>{activeTab === "promoter" ? 'Points': 'Discount'}</p>
                  {activeTab === 'promoter' && <p className="text-xs ">($1 is equivalent to 10 points)</p>}
                </button>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Reward Value <span className="text-red-500">*</span></label>
                <input
                  className="w-full border border-[#AAAAAA] text-[#333333] rounded-md p-3 text-sm focus:outline-0"
                  value={activeTab === 'promoter' ? promoterRewardValue : leadRewardValue}
                  onChange={(e) => {
                    if (activeTab === 'promoter') {
                      setPromoterRewardValue(e.target.value)
                    }
                    else setLeadRewardValue(e.target.value)
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-8">
              <label className="block text-sm font-medium mb-1">{activeTab === 'promoter' ? 'Promoter Message' : 'Referred Message'} <span className="text-red-500">*</span></label>
              <textarea
                className="w-full border border-[#AAAAAA] text-[#333333] rounded-md px-4 py-2 mt-2 text-sm focus:outline-0"
                rows="3"
                value={activeTab === 'promoter' ? promoterMessage : leadMessage}
                onChange={(e) => {
                  if (activeTab === 'promoter') {
                    setPromoterMessage(e.target.value)
                  }
                  else setLeadMessage(e.target.value)
                }}
              />
            </div>
            {activeTab !== 'promoter' && 
             <div className="mt-8">
              <label className="block text-sm font-medium mb-2">Form Fields <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-4 text-[#333333] text-sm">
                {[
                  "Full Name",
                  "Email Address",
                  "Phone Number",
                  "Agree to Terms & Conditions & Opt-in",
                ].map((field) => (
                  <label key={field} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formFields.includes(field)}
                      onChange={() => toggleField(field)}
                    />
                    {field}
                  </label>
                ))}
              </div>
            </div>}
            <img 
            src="/assets/followup_strategy.png"
            alt="Follow Up Strategy"
            className="w-full h-auto mt-8 rounded-md"
             />
             <img 
            src="/assets/landingPage_preview.png"
            alt="Landing Page Preview"
            className="w-full h-auto mt-8 rounded-md"
             />
            </div>
          </div>
        
      </div>
      <div className="flex mt-8">
      <Button className='py-2 max-w-xs mx-auto'>
        Edit
      </Button>
      </div>
    </div>
  );
};

export default NewPromoter;
