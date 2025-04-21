import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, CartesianGrid
  } from 'recharts';

  const dataLine = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 30 },
    { name: 'Mar', value: 25 },
    { name: 'Apr', value: 35 },
    { name: 'May', value: 40 },
    { name: 'Jun', value: 38 },
  ];
  
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

const Charts = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
           <div className="bg-white rounded shadow p-4 flex-1 ">
             <div className="text-xl font-semibold mb-6">Promoter Performance Over Time</div>
             <ResponsiveContainer width="100%" height={350}>
               <LineChart data={dataLine}>
               <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" vertical={false} />
                 <XAxis dataKey="name" />
                 <YAxis tick={{ fill: 'gray' }} domain={[0,50]} ticks={[0, 10, 20, 30, 40,50]} />
                 <Tooltip />
                 <Line type="monotone" dataKey="value" stroke="#305AFF" strokeWidth={3} />
               </LineChart>
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
  )
}

export default Charts