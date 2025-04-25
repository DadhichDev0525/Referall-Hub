import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { defaultCampaigns } from "../../../data/campaigns";
import Button from "../../../components/Button";
import CreateCampaignModal from "./CreateCampaign";
import axios from "axios";
import { toast } from "react-toastify";

const PastPromoters = () => {
    const [campaigns, setCampaigns] = useState(defaultCampaigns);
    const [searchQuery, setSearchQuery] = useState("");
    const [showModel, setShowModel] = useState(false);
    const access_token = localStorage.getItem("access_token")

    useEffect(()=>{
      const getCampaigns = async()=>{
        try{
          const res = await axios.get("/api/get-all-campaigns",{
            headers:{
              Authorization:`Bearer ${access_token}`
            }
          })
          if(res.status === 200 ){
            setCampaigns(()=> res.data.length > 0 ? [...defaultCampaigns, ...res.data] : defaultCampaigns )
          }
        }catch(err){
          if(err.status === 404){
            toast.error(err.response?.data.message || "Business Owner not created !!")
          }
        }
      }
      getCampaigns()
    },[access_token])
 
    const handleDelete = (id) => {
        setCampaigns((prev) => prev.filter((c) => c.id !== id));
      };
    
      const filteredCampaigns = campaigns.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const createCompaign = (name) => {
        const newCampaign = {
          id: campaigns.length + 1,
          name,
          dateRange: "01/01/2023 - 12/31/2023",
          referrals: Math.floor(Math.random() * 1000),
          conversion: Math.floor(Math.random() * 100),
          roi: Math.floor(Math.random() * 100) + "%",
          status: "Active",
          note: "Consider adding an SMS follow-up to maximize signups from referred leads.",
        };
        setCampaigns((prev) => [...prev, newCampaign]);
        setShowModel(false);
      }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between  gap-2 my-4">
        <Button onClick={()=>setShowModel(true)} className=" px-4 py-2 max-w-max">
          <span>+ Create New Campaign</span>
        </Button>
        {showModel && (<CreateCampaignModal onClose={() => setShowModel(false)} createCompaign={createCompaign} />)}
        <input
          type="text"
          placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm w-64"
        />
      </div>

      { filteredCampaigns.length > 0 &&
        <div className="text-[#305AFF] text-sm">
        {filteredCampaigns.length} Campaigns &#x2022; {filteredCampaigns.filter(c => c.status === "Active").length} Active
      </div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className=" rounded-xl max-w-xs p-4 bg-[#FBFBFB] shadow relative"
          >
            <div className="flex justify-between items-center border-b border-[#cfcdcd] pb-2">
              <div>
                <h3 className="font-semibold text-lg">{campaign.name}</h3>
                <p className="text-sm text-gray-500">{campaign.dateRange}</p>
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  campaign.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {campaign.status}
              </span>
            </div>

            <div className="flex justify-between mt-4 text-sm">
              <div>
                <p className="text-gray-500">Referrals</p>
                <p className="font-semibold text-center">{campaign.referrals}</p>
              </div>
              <div>
                <p className="text-gray-500">Conversion</p>
                <p className="font-semibold text-center">{campaign.conversion}</p>
              </div>
              <div>
                <p className="text-gray-500">ROI</p>
                <p className="font-semibold text-center">{campaign.roi}</p>
              </div>
            </div>

            <div className="mt-4 text-sm flex items-start gap-4 text-gray-600 bg-gradient-to-r from-[#E8F1FF] to-[#F6EEFB] p-2 rounded-md">
                <TbBrandGithubCopilot className="w-12 h-12 text-blue-500" />
             <p className="pr-2">{campaign.note}</p>
            </div>

            <div className="flex justify-between items-center mt-6 ">
              <GoTrash 
                onClick={() => handleDelete(campaign.id)}
                className="w-5 h-5 text-red-500 cursor-pointer" 
                />
              <Link to={`/campaign/${campaign.id}`}><FaRegEye className="w-5 h-5 text-gray-600 cursor-pointer" /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastPromoters;
