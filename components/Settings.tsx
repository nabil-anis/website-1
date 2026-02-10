
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 space-y-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <i className="fas fa-sliders-h text-purple-400"></i>
                Neural Calibration
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                <div>
                  <p className="font-semibold">Deep Thinking Mode</p>
                  <p className="text-xs text-gray-500 mt-1">Increase analysis depth by 200% for complex tasks</p>
                </div>
                <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                <div>
                  <p className="font-semibold">Contextual Awareness</p>
                  <p className="text-xs text-gray-500 mt-1">Allow Ine to access local project repositories</p>
                </div>
                <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Creativity Bias</label>
                <input type="range" className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-600">
                  <span>LOGICAL</span>
                  <span>BALANCED</span>
                  <span>ABSTRACT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-[2rem]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <i className="fas fa-network-wired text-blue-400"></i>
                Connected Nodes
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Gemini-3-Pro', status: 'Active', latency: '42ms' },
                { name: 'Local-LLM-01', status: 'Active', latency: '12ms' },
                { name: 'Web-Bridge-V4', status: 'Connecting', latency: '--' }
              ].map((node, i) => (
                <div key={node.name} className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className={`w-2 h-2 rounded-full ${node.status === 'Connecting' ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`} />
                  <span className="font-medium text-sm flex-1">{node.name}</span>
                  <span className="text-xs font-mono text-gray-500">{node.status === 'Connecting' ? 'Connecting...' : node.latency}</span>
                  <i className="fas fa-chevron-right text-gray-700 text-xs group-hover:translate-x-1 transition-transform"></i>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-8 rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/10">
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 border border-purple-500/20">
              <i className="fas fa-shield-alt text-2xl text-purple-400"></i>
            </div>
            <h3 className="text-lg font-bold">System Security</h3>
            <p className="text-sm text-gray-400 mt-2 mb-6 leading-relaxed">Your neural signatures and project data are encrypted using post-quantum algorithms and stored in local enclave.</p>
            <button className="w-full glass p-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors uppercase tracking-widest">
              VIEW AUDIT LOG
            </button>
          </div>

          <div className="glass p-8 rounded-[2rem]">
            <h3 className="text-lg font-bold mb-4">Evolutionary Stats</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-end">
                    <span className="text-xs text-gray-500">Innovation Index</span>
                    <span className="text-sm font-bold text-green-400">89%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full">
                    <div className="h-full bg-green-400 rounded-full" style={{ width: '89%' }} />
                </div>
                
                <div className="flex justify-between items-end mt-4">
                    <span className="text-xs text-gray-500">Neural Plasticity</span>
                    <span className="text-sm font-bold text-blue-400">64%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: '64%' }} />
                </div>

                <div className="pt-4 mt-4 border-t border-white/5">
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">System Version</p>
                    <p className="text-xs font-mono">INE-OS v2.4.9-Stable</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
