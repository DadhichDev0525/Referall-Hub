const leaderboardData = [
  [1, 'Emery Dokidis', 150, 80, '60%', '1,200'],
  [2, 'Kadin Lipshutz', 132, 90, '65%', '980'],
  [3, 'Randy Culhane', 110, 60, '60%', '880'],
  [4, 'Jaxson Vaccaro', 100, 85, '75%', '500'],
  [5, 'Jocelyn Levin', 50, 30, '63%', '600'],
  [6, 'Maren Septimus', 80, 35, '25%', '200'],
  [7, 'Haylie Saris', 120, 55, '45%', '150'],
  [8, 'Randy Herwitz', 110, 90, '65%', '880'],
];

const LeaderboardTable = () => (
  <div className="bg-white rounded-xl shadow p-4 max-w-full">
    <div className="text-lg font-semibold mb-4">Leaderboard Table View</div>
    <div className="overflow-x-scroll scroll-on-hover p-1">
    <div className="bg-[#FDFDFD] rounded p-4 border border-[#CBCBCB] w-full scroll-on-hover overflow-x-scroll">
      <table className=" min-w-[1000px] w-full text-left">
        <thead>
          <tr className="text-[#333333] font-medium text-sm border-b border-[#c4c2c2]">
            <th className="py-3">Rank</th>
            <th>Promoter Name</th>
            <th>Conversion Rate</th>
            <th>Referrals Sent</th>
            <th>Successful Conversions</th>
            <th>Revenue Generated</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map(([rank, name, rate, sent, success, revenue],idx) => (
            <tr key={idx} className="text-[#333333] border-b border-[#e5e7eb] text-sm">
            <td className="py-4">{rank}</td>
            <td>{name}</td>
            <td>{rate}</td>
            <td>{sent}</td>
            <td>{success}</td>
            <td>${revenue}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  </div>
);

export default LeaderboardTable;
