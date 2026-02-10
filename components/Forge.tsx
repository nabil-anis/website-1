
import React, { useState } from 'react';
import { brainstormIdeas } from '../services/geminiService';

const Forge: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<string>('');
  const [isForging, setIsForging] = useState(false);

  const handleForge = async () => {
    if (!topic.trim() || isForging) return;
    setIsForging(true);
    const result = await brainstormIdeas(topic);
    setIdeas(result);
    setIsForging(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="glass p-10 rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none" />
        <h2 className="text-3xl font-outfit font-bold mb-4">The Idea Forge</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10">
          Transform raw concepts into structured innovation. Enter a domain or problem area to begin the synthesis.
        </p>

        <div className="max-w-xl mx-auto flex gap-4">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Decarbonization, Quantum SaaS, Bio-Hacking..."
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 ring-purple-500/20 transition-all"
          />
          <button 
            onClick={handleForge}
            disabled={isForging || !topic.trim()}
            className="bg-white text-black font-bold px-8 rounded-2xl hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {isForging ? (
              <>
                <i className="fas fa-spinner animate-spin"></i>
                Forging...
              </>
            ) : (
              <>
                <i className="fas fa-hammer"></i>
                Forge
              </>
            )}
          </button>
        </div>
      </div>

      {ideas && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-500">
          <div className="glass p-8 rounded-[2rem] lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <i className="fas fa-sparkles text-yellow-400"></i>
              Synthesized Concepts
            </h3>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
              {ideas.split('\n').map((line, idx) => (
                <p key={idx} className={line.startsWith('-') || line.startsWith('•') ? 'ml-4' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Sustainability', 'Web4', 'AI Ethics', 'Longevity'].map((suggestion) => (
          <button 
            key={suggestion}
            onClick={() => { setTopic(suggestion); handleForge(); }}
            className="glass p-4 rounded-2xl text-sm font-medium hover:bg-white/5 transition-all text-gray-400 hover:text-white text-left flex items-center justify-between group"
          >
            {suggestion}
            <i className="fas fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></i>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Forge;
