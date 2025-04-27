import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { TbBrandGithubCopilot } from "react-icons/tb";
import Button from "../../../components/Button";
import CreateCampaignModal from "./CreateCampaign";
import { getAllCampaigns, deleteCampaign } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../../../components/Skeleton";

const PastPromoters = () => {
  const dispatch = useDispatch();
  const { data:campaigns, isLoading } = useSelector((state) => state.campaigns);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [statusFilter,setStatusFilter] = useState("All")
  const now = new Date();
  console.log(campaigns)

  useEffect(() => {
    dispatch(getAllCampaigns());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCampaign(id));
  };

  const filteredCampaigns = campaigns
    .map((c) => {
      const endDate = new Date(c?.campaign_end_date);
      const status = now <= endDate ? "Active" : "Inactive";
      const referrals = Math.floor(Math.random() * 1000);
      const conversion = Math.floor(Math.random() * 100);
      const roi = Math.floor(Math.random() * 100) + "%";
      return {
        ...c,
        status,
        referrals,
        conversion,
        roi,
      };
    })
    .filter((c) =>{
      const matchesSearch = c.campaign_name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
    })

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between  gap-2 my-4">
        <Button
          onClick={() => setShowModel(true)}
          className=" px-4 py-2 max-w-max"
        >
          <span>+ Create New Campaign</span>
        </Button>
        {showModel && (
          <CreateCampaignModal onClose={() => setShowModel(false)} />
        )}
        <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search campaigns..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-[#CCC] rounded-md px-3 py-2 text-sm max-w-2xs w-full  focus:outline-0"
        />
        <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-[#CCC] text-sm px-3 py-2 rounded-md focus:outline-0"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
        </div>
        
      </div>
      {filteredCampaigns.length === 0 && (
        <div className="col-span-3 text-center mt-10">
          <p className="text-gray-500 text-lg">No campaigns found.</p>
        </div>
      )}
      {
        isLoading && filteredCampaigns.length === 0 &&
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Skeleton times={3} className="h-60 w-full" />
          </div>
        
      }

      {filteredCampaigns.length > 0 &&
         (
          <>
            <div className="text-[#305AFF] text-sm">
              {filteredCampaigns.length} Campaigns &#x2022;{" "}
              {filteredCampaigns.filter((c) => c.status === "Active").length}{" "}
              Active
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filteredCampaigns.map((campaign) => (
                <div
                  key={campaign.campaign_id}
                  className=" rounded-xl min-w-min p-4 bg-[#FBFBFB] shadow relative  flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center border-b border-[#cfcdcd] pb-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold ">
                        {campaign.campaign_name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {new Date(
                          campaign.campaign_start_date
                        ).toLocaleDateString()}
                        {" - "}
                        {new Date(
                          campaign.campaign_end_date
                        ).toLocaleDateString() || now.toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        campaign.status === "Active"
                          ? "bg-[#4184E9]/10 text-[#4184E9]"
                          : "bg-[#F3F3F3] text-[#999]"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>

                  <div className="flex justify-between mt-4 text-sm">
                    <div>
                      <p className="text-gray-500">Referrals</p>
                      <p className="font-semibold text-center">
                        {campaign.referrals}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Conversion</p>
                      <p className="font-semibold text-center">
                        {campaign.conversion}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">ROI</p>
                      <p className="font-semibold text-center">
                        {campaign.roi}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4  flex items-center gap-3  bg-gradient-to-r from-[#E8F1FF] to-[#F6EEFB] p-2 rounded-md">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <TbBrandGithubCopilot className="w-6 h-6 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-600">
                      {campaign.campaign_description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6 ">
                    <GoTrash
                      onClick={() => handleDelete(campaign.campaign_id)}
                      className="w-5 h-5 text-red-500 cursor-pointer"
                    />
                    <Link to={`/campaign/${campaign.campaign_id}`}>
                      <FaRegEye className="w-5 h-5 text-gray-600 cursor-pointer" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
    </div>
  );
};

export default PastPromoters;
