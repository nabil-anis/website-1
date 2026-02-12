
import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell } from 'recharts';

const outreachData = [
  { day: 'Wk 1', leads: 1200, human: 45 },
  { day: 'Wk 2', leads: 2800, human: 42 },
  { day: 'Wk 3', leads: 4500, human: 38 },
  { day: 'Wk 4', leads: 6200, human: 35 },
  { day: 'Wk 5', leads: 8150, human: 20 },
];

const efficiencyData = [
  { name: 'Manual', value: 100, color: '#ef4444' }, // Shortened name for mobile
  { name: 'With AI', value: 25, color: '#22c55e' },   // Shortened name for mobile
];

const CaseStudy: React.FC = () => {
  const [viewMode, setViewMode] = useState<'simple' | 'technical'>('simple');

  return (
    <div className="space-y-24 md:space-y-32 animate-in fade-in duration-700">
      
      {/* 1. Hero Section */}
      <div className="relative pt-6 md:pt-10 pb-12 md:pb-20 border-b border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="space-y-6 max-w-3xl w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <i className="fas fa-robot text-purple-400"></i> Automated Outreach Deployment
            </div>
            <h1 className="text-4xl md:text-7xl font-outfit font-extrabold tracking-tight leading-[1.1] text-white">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-500">Revenue Engine</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl font-light">
              Activating 8,000+ dormant leads and filling appointment calendars. Zero manual dials. 100% automated.
            </p>
          </div>
          <div className="glass p-5 md:p-6 rounded-2xl w-full md:w-auto md:min-w-[250px] space-y-4 border-l-2 border-purple-500 bg-gradient-to-r from-white/[0.02] to-transparent">
             <div className="flex flex-row md:flex-col justify-between md:justify-start gap-2">
               <div>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Client Entity</p>
                 <p className="font-outfit text-lg md:text-xl font-bold tracking-tight">Body Utopia</p>
               </div>
               <div className="text-right md:text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Result</p>
                  <p className="font-outfit text-lg md:text-xl font-bold text-green-400 tracking-tight glow-text">8k+ Activated</p>
               </div>
             </div>
             <div className="border-t border-white/5 pt-2 md:pt-0 md:border-t-0">
               <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Sector</p>
               <p className="font-outfit text-lg md:text-xl font-bold tracking-tight">Aesthetics & MedSpa</p>
             </div>
          </div>
        </div>
      </div>

      {/* 2. Objective (Refined Cool) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
        <div className="lg:col-span-3 glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
           {/* Dynamic Background Blob */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-600/20 transition-all duration-700" />
           
           <div className="relative z-10">
             <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <h2 className="text-2xl md:text-4xl font-outfit font-bold text-white tracking-tight">The Directive</h2>
             </div>
             <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
               Convert a stagnant database of <span className="text-white font-bold border-b border-purple-500/50">8,000+ leads</span> into active revenue without hiring a single new employee.
             </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-8 md:mt-10 relative z-10">
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:bg-black/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                   <i className="fas fa-user-slash text-red-500 text-xs"></i>
                   <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Constraint A</p>
                </div>
                <p className="text-white font-medium text-sm md:text-base">Zero Headcount Increase</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:bg-black/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                   <i className="fas fa-filter text-blue-500 text-xs"></i>
                   <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Constraint B</p>
                </div>
                <p className="text-white font-medium text-sm md:text-base">Auto-Filter Low Intent</p>
              </div>
           </div>
        </div>

        <div className="lg:col-span-2 glass rounded-[2rem] md:rounded-[2.5rem] p-1 bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[300px] hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="z-10 p-6 md:p-8 space-y-4">
               <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 mb-2 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                 <i className="fas fa-database text-2xl md:text-3xl text-red-500"></i>
               </div>
               <h3 className="text-gray-400 font-mono uppercase tracking-widest text-xs">Target Data Volume</h3>
               <p className="text-5xl md:text-6xl font-bold text-white font-outfit tracking-tighter">8,142</p>
               <div className="px-3 py-1 bg-red-900/20 border border-red-500/30 text-red-400 text-[10px] md:text-xs rounded-full inline-block font-mono">
                 STATUS: DORMANT
               </div>
            </div>
        </div>
      </div>

      {/* 3. The "Lens" - Solution & Architecture */}
      <div id="solution-architecture" className="scroll-mt-32">
        <div className="flex flex-col items-center mb-8 md:mb-12 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 md:mb-8 text-white">The Solution</h2>
          
          {/* Toggle Component */}
          <div className="glass p-1 rounded-full flex relative w-full max-w-[300px] h-12 md:h-14 bg-black/40 shadow-inner">
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-b from-white/10 to-white/5 rounded-full transition-all duration-300 ease-out border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${
                viewMode === 'simple' ? 'left-1' : 'left-[calc(50%+2px)]'
              }`}
            />
            <button 
              onClick={() => setViewMode('simple')}
              className={`flex-1 relative z-10 text-xs md:text-sm font-bold transition-colors duration-300 ${viewMode === 'simple' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setViewMode('technical')}
              className={`flex-1 relative z-10 text-xs md:text-sm font-bold transition-colors duration-300 ${viewMode === 'technical' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Architecture
            </button>
          </div>
          <p className="mt-4 text-[10px] md:text-xs text-gray-500 font-mono tracking-tight animate-in fade-in">
            {viewMode === 'simple' ? 'VIEWING AS: BUSINESS OWNER' : 'VIEWING AS: SYSTEMS ARCHITECT'}
          </p>
        </div>

        <div className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 overflow-hidden relative transition-all duration-500 min-h-[450px] border border-white/10 bg-black/20">
           {/* Simple View */}
           <div className={`transition-all duration-500 absolute inset-0 p-6 md:p-12 overflow-y-auto ${viewMode === 'simple' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
              <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 py-4 md:py-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto text-blue-400 mb-2 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                  <i className="fas fa-magic text-2xl md:text-3xl"></i>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">Automated Voice Outreach</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  Project Nosh deployed an AI-powered voice system that acts as a 24/7 sales team. It automatically calls lists of leads, understands what they say, and books appointments for those who are interested.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-8 text-left sm:text-center">
                  <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3 sm:mx-auto">1</div>
                    <h4 className="font-bold text-white mb-1">It Calls</h4>
                    <p className="text-xs md:text-sm text-gray-400">Dials 8,000+ leads automatically.</p>
                  </div>
                  <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3 sm:mx-auto">2</div>
                    <h4 className="font-bold text-white mb-1">It Qualifies</h4>
                    <p className="text-xs md:text-sm text-gray-400">Filters out "Not Interested".</p>
                  </div>
                  <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-3 sm:mx-auto">3</div>
                    <h4 className="font-bold text-white mb-1">It Books</h4>
                    <p className="text-xs md:text-sm text-gray-400">Schedules meetings directly.</p>
                  </div>
                </div>
              </div>
           </div>

           {/* Technical View */}
           <div className={`transition-all duration-500 absolute inset-0 p-6 md:p-12 overflow-y-auto ${viewMode === 'technical' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/10 flex-shrink-0 flex items-center justify-center text-purple-400 font-mono text-xs md:text-sm border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">01</div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 font-mono">Lead Activation Engine</h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        Batch processing via <span className="text-white">n8n workflows</span> triggering 8,000+ outbound calls. 
                        Integration with CRM webhooks to fetch contact metadata for personalized context injection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/10 flex-shrink-0 flex items-center justify-center text-blue-400 font-mono text-xs md:text-sm border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">02</div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 font-mono">AI Qualification Layer</h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        Real-time intent detection using <span className="text-white">Gemini-Flash</span> for sub-100ms latency. 
                        Sentiment analysis filters invalid/DNC numbers via <span className="text-white">Vapi</span> orchestration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-400 font-mono text-xs md:text-sm border border-green-500/20 group-hover:bg-green-500/20 transition-colors">03</div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 font-mono">Smart Booking Logic</h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                        Direct API calls to booking provider (Cal.com/Calendly). 
                        Checks slot availability in real-time during the voice conversation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 rounded-xl p-4 md:p-6 border border-white/5 font-mono text-[10px] md:text-xs text-gray-400 overflow-y-auto max-h-[300px] md:max-h-[400px] shadow-inner">
                  <p className="text-purple-400 mb-2">// System Architecture Log</p>
                  <p className="mb-4 text-gray-500">Initializing NOSH_Voice_Pipeline_v2.1...</p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2 border-l-2 border-blue-500/30 pl-3">
                      <span className="text-blue-500 font-bold">[INGEST]</span>
                      <span>Loading 8,142 records from CRM...</span>
                    </div>
                    <div className="flex gap-2 border-l-2 border-yellow-500/30 pl-3">
                      <span className="text-yellow-500 font-bold">[FILTER]</span>
                      <span>Scrubbing DNC list... 124 removed.</span>
                    </div>
                    <div className="flex gap-2 border-l-2 border-green-500/30 pl-3">
                      <span className="text-green-500 font-bold">[START]</span>
                      <span>Batch #1 (500 calls) queued.</span>
                    </div>
                     <div className="flex gap-2 border-l-2 border-purple-500/30 pl-3">
                      <span className="text-purple-500 font-bold">[AI]</span>
                      <span>Voice synthesis stream active (Latency: 84ms)</span>
                    </div>
                     <div className="flex gap-2 border-l-2 border-orange-500/30 pl-3">
                      <span className="text-orange-500 font-bold">[ACTION]</span>
                      <span>API POST /v1/calendar/book -> 200 OK</span>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* 4. Operational Metrics */}
      <div>
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-8 md:mb-10 text-white">Operational Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">
            <div className="glass p-6 md:p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">Outreach Scale</p>
                <h3 className="text-4xl md:text-5xl font-outfit font-bold text-white">8,000+</h3>
                <p className="text-sm text-gray-400 mt-2 font-light">Leads contacted automatically with zero manual dialing.</p>
            </div>
            <div className="glass p-6 md:p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">Efficiency Gain</p>
                <h3 className="text-4xl md:text-5xl font-outfit font-bold text-green-400">75%</h3>
                <p className="text-sm text-gray-400 mt-2 font-light">Reduction in manual workload. Staff time redirected to closing.</p>
            </div>
             <div className="glass p-6 md:p-8 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">Pipeline</p>
                <h3 className="text-4xl md:text-5xl font-outfit font-bold text-blue-400">24/7</h3>
                <p className="text-sm text-gray-400 mt-2 font-light">Continuous appointment flow and calendar filling.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass p-6 md:p-8 rounded-[2rem]">
               <h4 className="font-bold text-white mb-6">Cumulative Leads Activated</h4>
               <div className="h-[200px] md:h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={outreachData}>
                      <defs>
                        <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 10}} />
                      <Tooltip contentStyle={{backgroundColor: '#050505', border: '1px solid #222', borderRadius: '8px', color: '#fff'}} />
                      <Area type="monotone" dataKey="leads" stroke="#8b5cf6" fill="url(#colorLeads)" strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>

            <div className="glass p-6 md:p-8 rounded-[2rem]">
               <h4 className="font-bold text-white mb-6">Workload Distribution</h4>
               <div className="flex flex-col sm:flex-row items-center gap-8 h-[200px] md:h-[250px]">
                  <div className="flex-1 h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={efficiencyData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 10}} />
                          <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#050505', border: '1px solid #222', borderRadius: '8px', color: '#fff'}} />
                          <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                            {efficiencyData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full sm:w-40 text-xs text-gray-400 space-y-3">
                    <p><span className="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>Before: Staff spent 80% of time cold calling.</p>
                    <p><span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>After: Staff spend 100% of time on qualified closings.</p>
                  </div>
               </div>
            </div>
        </div>
      </div>

      {/* 5. Business Impact Summary */}
      <div className="border-t border-white/10 pt-12 md:pt-16">
         <h2 className="text-3xl font-outfit font-bold mb-8 md:mb-10 text-white">Business Impact</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 group">
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/5 group-hover:border-purple-500/30 transition-colors">
                 <i className="fas fa-coins text-lg group-hover:text-purple-400 transition-colors"></i>
               </div>
               <h4 className="font-bold text-xl text-white">Cost Efficiency</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Elimination of outbound call staffing costs. No training overhead. No performance variability.
               </p>
            </div>
            <div className="space-y-4 group">
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/5 group-hover:border-blue-500/30 transition-colors">
                 <i className="fas fa-expand-arrows-alt text-lg group-hover:text-blue-400 transition-colors"></i>
               </div>
               <h4 className="font-bold text-xl text-white">Scalability</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Same system can handle 8,000 leads or 80,000 leads with linear cost but exponential output.
               </p>
            </div>
            <div className="space-y-4 group">
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/5 group-hover:border-green-500/30 transition-colors">
                 <i className="fas fa-chart-line text-lg group-hover:text-green-400 transition-colors"></i>
               </div>
               <h4 className="font-bold text-xl text-white">Revenue Enablement</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Faster lead activation, shorter conversion cycles, and significantly higher lead utilization rates.
               </p>
            </div>
         </div>
      </div>

    </div>
  );
};

export default CaseStudy;
