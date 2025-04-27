import { configureStore } from "@reduxjs/toolkit";
import { campaignReducer, deleteCampaign } from "./slices/campaignSlice";

export const store = configureStore({
    reducer :{
        campaigns : campaignReducer,
    }
})

export {deleteCampaign}

export * from './Thunks/campaignThunk';