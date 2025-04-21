import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const MetricCard = ({ title, value, sub, icon }) => 
  (
    <div className="flex gap-4 bg-white rounded-xl shadow p-4">
        <img src={icon} alt="icon" className="w-15 h-15" />
        <div className="flex-1">
          <p className="font-semibold text-gray-500">{title}</p>
          <p className="text-xl font-bold">{value}</p>
          {sub && (
            <div
              className={`flex items-center text-sm font-medium gap-2 ${
                sub > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {sub > 0 ? `+${sub}%` : `-${sub}%`}
              {sub > 0 ? (
                <FaArrowTrendUp className="text-green-500" />
              ) : (
                <FaArrowTrendDown className="text-red-500" />
              )}
              <p className="text-gray-500">vs last month</p>
            </div>
          )}
        </div>
      </div>
  );

  export default MetricCard;