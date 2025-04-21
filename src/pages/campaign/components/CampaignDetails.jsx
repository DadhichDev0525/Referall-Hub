import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, Legend, PieChart,Pie,Cell, } from 'recharts';
import { defaultCampaigns,linkClicksData,performanceData } from '../../../data/campaigns';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import MetricCard from '../../../components/MetricCard';

const dataPie = [
    { name: 'Referrals Sent', value: 57 },
    { name: 'Converted', value: 43 },
  ];
  
  const COLORS = ['url(#blueGradient)','#EDEAFC'];
  
  const Channels = [
    {title:'Facebook', value:'78', color:'#FFD2BF' },
    {title:'LinkedIn', value:'23', color:'#FFC9E1' },
    {title:'Twitter', value:'45', color:'#D8F1FF' },
  ]


const CampaignDetails = () => {
const { campaignId } = useParams();
const campaign = defaultCampaigns.find(c => c.id === parseInt(campaignId)); 

if (!campaign) {
   return <div>
        <Navbar title="Campaign not found" />
        <div className='p-4'>
        <Link to="/campaign" className="text-[#666] text-sm hover:underline ">
          &lt; Back
            </Link>
        <div className="bg-white p-6 rounded-2xl shadow mt-4">
        <h2 className="text-lg font-semibold mb-4">Campaign not found</h2>
        <p className="text-gray-500">The campaign you are looking for does not exist.</p>
        </div>
    </div>
    </div>
  }
  return (
    <div>
        <Navbar title={campaign.name} />
      <div className='p-4'>
        <Link to="/campaign" className="text-[#666] text-sm hover:underline ">
          &lt; Back
          </Link>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 mt-4">
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

      <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1 bg-white p-6 rounded-2xl shadow ">
        <h2 className="text-lg font-semibold mb-4">Total Link Clicks</h2>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={linkClicksData} barSize={10}>
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="clicks" fill="#A7F3D0" radius={[1, 1, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
          <div className="flex flex-col gap-2">
                     <div className="bg-white rounded-xl min-w-md shadow p-4 flex flex-col">
                       <div className="text-xl font-semibold mb-2 border-b border-[#d9d9d9] pb-3">Conversion Success Rate</div>
                       <div className="flex flex-col md:flex-row items-center gap-4 p-4">
                   {/* Donut Chart */}
                   <div className="w-[170px] h-[170px] rotate-120 p-2">
                     <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                         <defs>
                           <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
                             <stop offset="0%" stopColor="#305AFFCC" />
                             <stop offset="100%" stopColor="#B5D2FF" />
                           </linearGradient>
                         </defs>
                         <Pie
                           data={dataPie}
                           cx="50%"
                           cy="50%"
                           innerRadius={30}
                           outerRadius={70}
                           paddingAngle={0}
                           dataKey="value"
                           cornerRadius={10}
                         >
                           {dataPie.map((_, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index]} />
                           ))}
                         </Pie>
                       </PieChart>
                     </ResponsiveContainer>
                   </div>
             
                   {/* Legend */}
                   <div className="space-y-2">
                     <div className="flex items-center gap-2">
                       <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#305AFFCC] to-[#B5D2FF]"></span>
                       <p className="text-gray-700 text-sm">Referrals sent <span className="font-medium">57%</span></p>
                     </div>
                     <div className="flex items-center gap-2">
                       <span className="w-3 h-3 rounded-full bg-[#EDEAFC]"></span>
                       <p className="text-gray-700 text-sm">Converted <span className="font-medium">42%</span></p>
                     </div>
                   </div>
                 </div>
                       
                     </div>
                     <div className="bg-white rounded-xl shadow p-4">
                     <div className="text-xl font-semibold mb-2 border-b border-[#d9d9d9] pb-3">Top Performing Channels</div>
                     <div className="flex items-center justify-between gap-1">
                       {Channels.map((channel, index) => (
                           <div key={index} className={`flex w-1/3 flex-col items-center gap-2 rounded p-4`}
                             style={{ backgroundColor: channel.color}}>
                             <p>{channel.title}</p>
                             <p>{channel.value}%</p>
                           </div>
                       ))}
                     </div>
                     </div>
                     </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Campaign Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#6366F1" strokeWidth={2} />
            <Line yAxisId="right" type="monotone" dataKey="conversion" stroke="#FBBF24" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
