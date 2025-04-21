import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Campaign from "../pages/campaign/Campaign";
import Promoters from "../pages/promoters/Promoters";
import Payouts from "../pages/payouts/Payouts";
import Leads from "../pages/leads/Leads";
import LeadDetailsPage from "../pages/leads/LeadDetailsPage";
import Settings from "../pages/settings/Settings";
import PlatForm_Setup from "../pages/platform_setup/PlatForm_Setup";
import AI_Agent from "../pages/ai_agent/AI_Agent";
import App from "../App";
import CampaignDetails from "../pages/campaign/components/CampaignDetails";
import ProtectedRoute from "../middleware/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <ProtectedRoute><App /></ProtectedRoute>, // Sidebar + main layout
    children: [
      {
        path: "/platform-setup",
        element: <PlatForm_Setup />,
      },
      {
        path: "/ai-agent",
        element: <AI_Agent />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/campaign",
        element: <Campaign />,
      },
      {
        path: "/campaign/:campaignId",
        element: <CampaignDetails />,
      },
      {
        path: "/promoters",
        element: <Promoters />,
      },
      {
        path: "/leads",
        element: <Leads />,
      },
      {
        path: "/leads/:leadId",
        element: <LeadDetailsPage />,
      },
      {
        path: "/payouts",
        element: <Payouts />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
