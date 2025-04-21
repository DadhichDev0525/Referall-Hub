import React from "react";
import { FiGrid, FiCpu, FiHome, FiUsers, FiTrendingUp, FiUser, FiSettings, FiHelpCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Platform Setup", icon: '/assets/navIcons/PlatForm_Setup.png', path: "/platform-setup" },
  { label: "AI Agent", icon: "/assets/navIcons/Ai_Agent.png", path: "/ai-agent" },
  { label: "Dashboard", icon:  "/assets/navIcons/Dashboard.png", path: "/" },
  { label: "Campaign", icon:  "/assets/navIcons/Campaign.png", path: "/campaign" },
  { label: "Promoters", icon:  "/assets/navIcons/Promoters.png", path: "/promoters" },
  { label: "Leads", icon:  "/assets/navIcons/Leads.png", path: "/leads" },
  { label: "Payouts", icon:  "/assets/navIcons/Payouts.png", path: "/payouts" },
];

const bottomItems = [
  { label: "Settings", icon:"/assets/navIcons/Settings.png" , path: "/settings" },
  { label: "Help", icon: "/assets/navIcons/Help.png", path: "/" },
];

const Sidebar = () => {
  return (
    <div className="w-[245px] sticky left-0 top-0 h-screen bg-white border-r border-[#EFF0F6] flex flex-col justify-between py-6 pr-4">
      {/* Top Nav Items */}
      <div className="space-y-2 mt-10">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 text-[#305AFF] rounded-r-lg text-sm font-medium transition ${
                isActive
                  ? "border-l-4 border-[#305AFF] bg-[#305AFF]/10"
                  : "hover:bg-gray-100"
              }`
            }
          >
            <img src={item.icon} alt={item.label} />
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Bottom Items */}
      <div className="space-y-2">
        {bottomItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 text-[#305AFF] rounded-r-lg text-sm font-medium transition ${
                isActive
                  ? "border-l-4 border-[#305AFF] bg-[#305AFF]/10"
                  : "hover:bg-gray-100"
              }`
            }
          >
            <img src={item.icon} alt={item.label} />
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
