import { useState} from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button";

export default function CreateCampaignModal({ onClose, createCompaign }) {
  const [step, setStep] = useState(1);
  const [campaignName, setCampaignName] = useState("");

  const handleSubmit = () => {
    if (step === 1 ){
      if(campaignName.trim() === "") {
      toast.error("Please enter a campaign name.");
      return;
    }else setStep(2)
    }else {
    // Handle form submission logic here
    createCompaign(campaignName);
    toast.success("Campaign created successfully!");
  }
}
  return (
    <div className="fixed inset-0 bg-[#000]/50  flex items-center justify-center z-50">
      <div className="bg-white relative rounded-md shadow-lg w-full max-w-3xl p-6  max-h-[95vh] overflow-y-scroll">
        <div className="text-left border-b border-[#c6c3c3] pb-4 mb-4 ">
          <h2 className="text-lg text-[#1C1C1C] font-semibold">Create New Campaign</h2>
          <p className="text-xs text-[#888888]">
          Create a new referral campaign in just few steps.
        </p>
        </div>
        <button onClick={onClose} className="text-[#4e4c4c] hover:bg-[#dad9d9] rounded px-1.5 pb-0.5 cursor-pointer scroll-on-hover hover:text-gray-800 text-xl  absolute right-3 top-3">
            ×
            </button>
       

        {/* Campaign Name */}
        <div className="mb-4 bg-white rounded-md shadow p-4">
          <label className="block text-left text-sm font-medium text-[#333]">Campaign Name</label>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            className="w-full text-[#333] mt-2 border border-[#c6c3c3] rounded-md p-2 focus:outline-0"
            placeholder="e.g., Summer Referral Special"
            required
          />
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-6 my-6">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center text-sm justify-center rounded-full ${step === 1 ? "bg-[#305AFF] text-white" : "bg-[#DDD] text-[#888]"}`}>
              01
            </div>
            <span className={`text-sm mt-1 ${step===1 ?'text-[#333]':'text-[#888]'}`}>Promoter Settings</span>
          </div>
          <div className="bg-[#555]/30 px-7 py-0.5" />
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center text-sm justify-center rounded-full ${step === 2 ? "bg-[#305AFF] text-white" : "bg-[#DDD] text-[#888]"}`}>
              02
            </div>
            <span className={`text-sm mt-1 ${step===2 ?'text-[#333]':'text-[#888]'}`}>Leads Settings</span>
          </div>
        </div>

          <div className="bg-white rounded-md shadow p-4">
            <div className="flex gap-4 text-[#888]">
              <div className="w-1/3">
                <label className="block text-sm font-medium mb-1">Reward Type</label>
                <button className="bg-[#305AFF]/10 text-[#305AFF] font-medium px-4 py-2 rounded-md w-full">
                  <p>{step === 1 ? 'Points': 'Discount'}</p>
                  {step === 1 && <p className="text-xs ">($1 is equivalent to 10 points)</p>}
                </button>
              </div>
              <div className="flex-1">
                <label className="block  text-sm font-medium mb-1">Reward Value </label>
                <input
                  className="w-full border border-[#AAAAAA] text-[#333333] rounded-md p-3 text-sm focus:outline-0"
                  placeholder={step === 1 ? 'e.g., 20 points' : 'e.g., 20%'}
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium mb-1 text-gray-700">{step === 1 ? 'Referrer' : 'Lead'} Message</label>
              <textarea
                className="w-full border border-[#AAAAAA] text-[#333333] rounded px-4 py-2 mt-2 text-sm focus:outline-0"
                rows="3"
                placeholder="e.g., 'Hey! Share this with your friends and get $20 for each successful signup!'"
              />
            </div>
            {step === 2 && (
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Form Fields</label>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                <label><input type="checkbox" className="mr-1" /> Full Name</label>
                <label><input type="checkbox" className="mr-1" /> Email Address</label>
                <label><input type="checkbox" className="mr-1" /> Phone Number</label>
                <label className="md:col-span-2"><input type="checkbox" className="mr-1" /> Agree to Terms & Conditions & Opt-in</label>
              </div>
            </div>
          </div>
)}
            <div className="mt-8 flex">
            { step===2 && <button
              onClick={() => setStep(1)}
              className="mr-2 text-sm flex-1 text-gray-600 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Back
            </button>}
            <Button
              onClick={handleSubmit}
              className=" px-6 py-2 mx-auto max-w-xs"
            >
              {step === 1 ? "Next" : "Create Campaign"}
            </Button>
            </div>
          </div>

        {/* Step 2: Leads Settings */}
        
        
      </div>
    </div>
  );
}