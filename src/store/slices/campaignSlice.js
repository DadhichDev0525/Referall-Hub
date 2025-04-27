import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCampaigns,
  createCampaign,
} from "../Thunks/campaignThunk";

const campaignSlice = createSlice({
  name: "campaigns",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers :{
    deleteCampaign: (state, action) => {
        state.data = state.data.filter(campaign => campaign.campaign_id !== action.payload);
      }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCampaigns.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCampaigns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllCampaigns.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(createCampaign.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createCampaign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload)
      })
      .addCase(createCampaign.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const campaignReducer = campaignSlice.reducer;
export const {deleteCampaign} = campaignSlice.actions;