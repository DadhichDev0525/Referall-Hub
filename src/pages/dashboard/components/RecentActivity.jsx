const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="text-lg font-semibold mb-4">Recent Activities</div>
      <div className="bg-[#FDFDFD] rounded p-4 border border-[#CBCBCB] overflow-x-auto">
        <table className="min-w-max w-full text-left">
          <thead>
            <tr className="border-b border-[#c4c2c2]">
              <th>Activity</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Julian earned $10", "28-4-2024", "10:30 AM"],
              [
                "John Doe signed up from your referral link",
                "29-4-2024",
                "9:45 AM",
              ],
              ["You reached 50 referrals milestone!", "30-4-2024", "8:20 AM"],
              ["You updated your referral campaign", "31-4-2024", "7:00 AM"],
            ].map(([text, date, time],idx) => (
              <tr key={idx} className="text-[#646464] ">
                <td className="py-4">{text}</td>
                <td>{date}</td>
                <td>{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
