
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Mon', val: 40 },
  { name: 'Tue', val: 70 },
  { name: 'Wed', val: 50 },
  { name: 'Thu', val: 90 },
  { name: 'Fri', val: 65 },
  { name: 'Sat', val: 30 },
  { name: 'Sun', val: 45 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <i className="fas fa-brain text-5xl"></i>
          </div>
          <p className="text-gray-400 text-sm font-medium">Daily Cognition</p>
          <h3 className="text-3xl font-bold mt-2">84.2%</h3>
          <div className="flex items-center gap-2 mt-4 text-green-400 text-xs font-bold">
            <i className="fas fa-arrow-up"></i>
            <span>+12.5% vs yesterday</span>
          </div>
        </div>

        <div className="glass p-6 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <i className="fas fa-fire-alt text-5xl"></i>
          </div>
          <p className="text-gray-400 text-sm font-medium">Idea Forge Output</p>
          <h3 className="text-3xl font-bold mt-2">12</h3>
          <p className="text-gray-500 text-xs mt-4">7 prioritized for execution</p>
        </div>

        <div className="glass p-6 rounded-[2rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <i className="fas fa-project-diagram text-5xl"></i>
          </div>
          <p className="text-gray-400 text-sm font-medium">Active Nodes</p>
          <h3 className="text-3xl font-bold mt-2">156</h3>
          <p className="text-gray-500 text-xs mt-4">Synced across 4 instances</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-8 rounded-[2rem]">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <i className="fas fa-chart-line text-purple-400"></i>
            Activity Matrix
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px'}}
                />
                <Bar dataKey="val" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#a855f7' : '#333'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-8 rounded-[2rem]">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <i className="fas fa-history text-blue-400"></i>
            Recent Evolutions
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <i className={`fas ${i === 1 ? 'fa-code' : i === 2 ? 'fa-pen-nib' : 'fa-atom'} text-sm text-gray-400 group-hover:text-purple-400`}></i>
                </div>
                <div>
                  <p className="font-semibold text-sm">System Update {i}.4.0</p>
                  <p className="text-gray-500 text-xs mt-1">Refined neural pathway {i*12}% more efficiency</p>
                </div>
                <div className="ml-auto text-[10px] text-gray-600 font-mono">
                  {i*5}m ago
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
