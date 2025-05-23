import {useState, useEffect} from "react";

import { NavLink } from "react-router-dom";

const navItems = [
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
  const [setupComplete, setSetupComplete] = useState(localStorage.getItem("setup_complete") === "true")

  useEffect(()=>{
    const updateSetupComplete =(e)=>{
      if(e.key === 'setup_complete'){
        setSetupComplete(localStorage.getItem("setup_complete") === "true")
      }
    }
    window.addEventListener("storage",updateSetupComplete)

    return ()=> window.removeEventListener("storage",updateSetupComplete)
  },[])

  return (
    <div className="max-w-[245px] min-w-[105px] md:min-w-[150px] w-full sticky left-0 top-0 h-screen bg-white border-r border-[#EFF0F6] flex flex-col justify-between py-6 pr-4">
      {/* Top Nav Items */}
      <div className="sm:space-y-2 mt-10">
      {!setupComplete && (
        <NavLink
        to="/platform-setup"
        className={({ isActive }) =>
          `flex flex-col sm:flex-row items-start sm:items-center gap-x-3 gap-y-1 px-4 py-2 text-[#305AFF] rounded-r-lg text-sm font-medium transition ${
            isActive
              ? "border-l-4 border-[#305AFF] bg-[#305AFF]/10"
              : "hover:bg-gray-100"
          }`
        }
      >
        <img src='/assets/navIcons/PlatForm_Setup.png' alt='platform_setup icon' />
        Platform Setup
      </NavLink>
      )}
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col sm:flex-row items-start sm:items-center gap-x-3 gap-y-1 p-2 sm:px-4 sm:py-2 text-[#305AFF] rounded-r-lg text-sm font-medium transition ${
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
      <div className="sm:space-y-2">
        {bottomItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col sm:flex-row items-start sm:items-center gap-x-3 gap-y-1 px-4 py-2 text-[#305AFF] rounded-r-lg text-sm font-medium transition ${
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
