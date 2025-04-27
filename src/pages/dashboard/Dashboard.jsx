import AIAssistant from "../../components/AiBot";
import MetricCard from "../../components/MetricCard";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { KpiCard } from "./components/Cards";
import LeaderboardTable from "./components/LeaderboardTable";
import RecentActivity from "./components/RecentActivity";
import Charts from "./components/Charts";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={`fixed z-1 bottom-10 right-10 cursor-pointer `}> 
        <img
          src="/assets/Chatbot_Icon.png"
          alt="Chatbot Icon"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute bottom-16 right-0">
            <AIAssistant closeChat={() => setIsOpen(false)} />
          </div>
        )}
      </div>
      <Navbar title="Dashboard" />
      <div className="mx-4">
        <div className="p-4 space-y-4">
          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Total Promoters"
              value="1,234"
              sub={12}
              icon="/assets/dashboard/total_promoters.png"
            />
            <MetricCard
              title="Conversion rate"
              value="23.5%"
              sub={-2.3}
              icon="/assets/dashboard/conversion_rate.png"
            />
            <MetricCard
              title="Revenue Generated"
              value="$12,345"
              sub={3.5}
              icon="/assets/dashboard/Revenue_generated.png"
            />
            <MetricCard
              title="Active Campaigns"
              value="3"
              icon="/assets/dashboard/active_campaign.png"
            />
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard
              title="Repeat Referral Rate"
              percentage={42}
              trackColor="#AFFFD3"
              progressColor="#28C76F"
            />
            <KpiCard
              title="Referral Engagement Rate"
              percentage={67}
              trackColor="#FFCAC3"
              progressColor="#F98272"
            />
            <KpiCard
              title="Churn Rate of Leads"
              percentage={28}
              trackColor="#C4DBFF"
              progressColor="#4B91FF"
            />
            <KpiCard
              title="Upsell Rate of Leads"
              percentage={19}
              trackColor="#F9BFFF"
              progressColor="#B113C0"
            />
          </div>

          {/* Graphs */}
          <Charts />
          <RecentActivity />
          <LeaderboardTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
