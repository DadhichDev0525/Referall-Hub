import { FiBell, FiChevronDown } from "react-icons/fi";

const Navbar = ({title}) => {
  return (
    <div className="w-full px-6 py-4 bg-white border-b border-[#EFF0F6] flex items-center justify-between">
      {/* Left: Page Title */}
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

      {/* Right: Notification & Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative text-gray-500 hover:text-blue-600">
          <FiBell className="text-xl" />
          {/* Optional red dot */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/32"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
            <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-gray-800">John Doe</span>
                <span className="text-xs text-gray-500">Admin</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
