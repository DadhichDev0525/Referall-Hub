import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const MetricCard = ({ title, value, sub, icon }) => 
  (
    <div className="flex sm:flex-col gap-1 bg-white rounded-lg shadow p-3">
        <div className="flex gap-2">
        <img src={icon} alt="icon" className="lg:w-15 lg:h-15 w-10 h-10" />
        <div className="flex-1">
          <p className="font-semibold text-base md:text-sm lg:text-base text-gray-500">{title}</p>
          <p className="text-xl md:text-lg lg:xl font-bold">{value}</p>
          </div>
        </div>
          <div className="flex-1 md:self-center">
          {sub && (
            <div
              className={`flex flex-col xl:flex-row items-center text-sm font-medium gap-x-2 ${
                sub > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              <div className="flex items-center gap-2">
              {sub > 0 ? `+${sub}%` : `-${sub}%`}
              {sub > 0 ? (
                <FaArrowTrendUp className="text-green-500" />
              ) : (
                <FaArrowTrendDown className="text-red-500" />
              )}
              </div>
              <p className="text-gray-500">vs last month</p>
            </div>
          )}
        </div>
      </div>
  );

  export default MetricCard;