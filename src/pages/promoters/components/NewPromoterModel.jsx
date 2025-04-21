import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import Button from "../../../components/Button";
import CsvUploader from "./CSVUploader";

const tabs = ["Add Manually", "Upload CSV File", "Sync with Zapier"];

const NewPromoterModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Add Manually");
  const [manualData, setManualData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

    const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "Add Manually") {
      // Handle manual data submission
      if (!manualData.fullName || !manualData.phone || !manualData.email) {
        toast.error("Please fill in all fields.");
        return;
      }
      console.log("Manual Data Submitted:", manualData);
      toast.success("Promoter added successfully!");
    } else if (activeTab === "Upload CSV File") {
      // Handle CSV file upload
      console.log("CSV File Uploaded");
      toast.success("CSV file uploaded successfully!");
    } else if (activeTab === "Sync with Zapier") {
      // Handle Zapier sync
      console.log("Zapier Sync Initiated");
      toast.success("Zapier sync initiated successfully!");
    }
    onClose(); 
}

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#c6c3c3] px-6 py-4">
          <h3 className="font-semibold text-[#4D4D4D]">
            Choose How You Want to Add Customers
          </h3>
          <IoMdClose className="cursor-pointer text-xl" onClick={onClose} />
        </div>

        {/* Tabs */}
        <div className="flex px-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-sm rounded font-medium cursor-pointer  ${
                activeTab === tab
                  ? "bg-[#305AFF]/10 text-[#333333]"
                  : "text-[#888888] bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "Add Manually" && (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow-md">
              <label className="block text-gray-600 text-sm mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                value={manualData.fullName}
                onChange={(e) =>
                  setManualData({ ...manualData, fullName: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <label className="block text-gray-600 text-sm mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={manualData.phone}
                onChange={(e) =>
                  setManualData({ ...manualData, phone: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <label className="block text-gray-600 text-sm mb-1">
                Email ID
              </label>
              <input
                type="email"
                placeholder="Enter Email ID"
                value={manualData.email}
                onChange={(e) =>
                  setManualData({ ...manualData, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  type="button"
                  className="px-4 max-w-1/2 w-full py-2 text-sm border bg-gray-200 cursor-pointer border-gray-300 rounded"
                >
                  Cancel
                </button>
                <Button type="submit" className="px-4 py-2 max-w-1/2 text-sm ">
                  Save
                </Button>
              </div>
            </form>
          )}

          {activeTab === "Upload CSV File" && (
            <div className="border border-dashed border-blue-400 rounded-lg p-6 text-center">
              <p className="text-gray-500 mb-4">Drag and drop CSV here</p>
              <span className="w-full text-sm text-gray-500 text-center">or</span>
              <CsvUploader  />
              <div className="mt-4 flex justify-end">
                <Button className="px-4 py-2 ">
                  Upload
                </Button>
              </div>
            </div>
          )}

          {activeTab === "Sync with Zapier" && (
            <div className="border border-dashed border-blue-400 rounded-lg p-6 text-center">
              <p className="text-gray-700">
                Automatically sync new customers via your CRM using Zapier
              </p>
              <div className="flex justify-center mt-6">
                <Button className=" px-4 py-2">
                  Connect with Zapier
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPromoterModal;
