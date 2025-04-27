import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllCampaigns = createAsyncThunk(
  "get/allCampaigns",
  async () => {
    const access_token = localStorage.getItem("access_token");
    try {
      const res = await axios.get(
        "/api/get-all-campaigns",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      console.log(err);
      if (err.status === 404) {
        toast.error(
          err.response?.data.message || "Business Owner not created !!"
        );
      }else if (err.status === 401){
        window.location.href('/')
      }else{
        toast.error(err.response?.data.error || "Something went wrong!")
      }
      return []
    }
  }
);

export const createCampaign = createAsyncThunk(
  "create/campaign",
  async (campaign) => {
    const access_token = localStorage.getItem("access_token");
    try {
      const res = await axios.post(
        "/api/create-campaign",
        {
          ...campaign,
          campaign_description: "Increase reward by 10% boost conversion rates during peak season",
          campaign_start_date: "2025-04-27",
          campaign_end_date: "2025-06-25",
        },
        {
            headers:{
                Authorization : `Bearer ${access_token}`
            }
        }
      );
      console.log(res)
      if(res.status === 201){
        toast.success(res.data?.message ||"Campaign created successfully!")
        return res.data.campaign;
      }

    } catch (err) {
        console.log(err)
        if(err.status === 400){
            toast.error("Bad Request, Fill all the required fields")
        }else if(err.status === 401){
            toast.error(err.response?.data?.message || "Token expire, Please refresh!")  
        }else{
          toast.error(err.response?.data?.error || "Internal Server Error")
        }
        return []
    }
  }
);

