import { FiBell, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({title}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className="w-full px-6 py-4 bg-white border-b border-[#EFF0F6] flex items-center justify-between">
      {/* Left: Page Title */}
      <h1 className="md:text-xl  font-semibold text-gray-800">{title}</h1>

      {/* Right: Notification & Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative text-gray-500 hover:text-blue-600">
          <FiBell className="text-xl" />
          {/* Optional red dot */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Section */}
        <div onClick={()=>setIsOpen(!isOpen)} className="relative flex items-center gap-2 cursor-pointer">
          <img
            src="/assets/user_icon.jpeg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
            <div className=" flex-col hidden sm:flex text-left">
                <span className="text-sm font-semibold text-gray-800">{user.full_name}</span>
                <span className="text-xs text-gray-500">{user.email}</span>
        </div>
        {isOpen && (
          <div className="absolute top-10 right-0 mt-2 w-48 bg-white border hover:bg-gray-100 border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-2">
              <li 
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-gray-700  cursor-pointer"
              >Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
