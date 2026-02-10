
import React, { useState, useRef, useEffect } from 'react';
import { generateInnovationStream } from '../services/geminiService';
import { Message } from '../types';

const Intelligence: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello. I am Ine. How shall we innovate today?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Initial empty assistant message for streaming
    const aiMsg: Message = { role: 'assistant', content: '', timestamp: new Date() };
    setMessages(prev => [...prev, aiMsg]);

    try {
      let fullContent = '';
      const stream = generateInnovationStream(input);
      
      for await (const chunk of stream) {
        fullContent += chunk;
        setMessages(prev => {
          const last = prev[prev.length - 1];
          const updated = { ...last, content: fullContent };
          return [...prev.slice(0, -1), updated];
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-250px)] flex flex-col glass rounded-[2rem] overflow-hidden animate-in fade-in duration-700">
      <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          <h2 className="font-bold text-lg">Ine Intelligence Core</h2>
        </div>
        <div className="flex gap-2">
            <button className="text-gray-500 hover:text-white transition-colors p-2 rounded-lg glass-dark text-xs font-mono">
                ENCRYPTED
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
                <i className="fas fa-ellipsis-h"></i>
            </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-purple-600/20 border border-purple-500/20 text-purple-100' 
                : 'glass text-gray-200'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content || (isLoading && i === messages.length - 1 ? 'Typing...' : '')}</p>
              <p className="text-[10px] text-gray-500 mt-2 font-mono">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-white/5 bg-black/20">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Input neural prompt..."
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 pr-16 focus:outline-none focus:border-purple-500/50 transition-all text-sm placeholder:text-gray-600 shadow-inner"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all shadow-lg"
          >
            {isLoading ? <i className="fas fa-circle-notch animate-spin text-xs"></i> : <i className="fas fa-paper-plane text-xs"></i>}
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
              Powered by Gemini 3 Flash Preview
            </p>
            <div className="flex gap-4 text-[10px] text-gray-500 font-mono">
                <span>LATENCY: 42ms</span>
                <span>TOKENS: 1024/sec</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
