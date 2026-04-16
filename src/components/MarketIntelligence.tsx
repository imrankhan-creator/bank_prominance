import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Info, AlertTriangle, Download, Calendar, BarChart3, Globe2, Zap } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export const MarketIntelligence: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [sparklines, setSparklines] = useState<Record<string, any[]>>({});

  useEffect(() => {
    fetch("/api/market-intelligence")
      .then((res) => res.json())
      .then(d => {
        setData(d);
        // Generate initial sparkline data
        const initialSparklines: Record<string, any[]> = {};
        d.indices.forEach((idx: any) => {
          initialSparklines[idx.name] = Array.from({ length: 10 }, () => ({ val: Math.random() * 100 }));
        });
        setSparklines(initialSparklines);
      });
  }, []);

  // Update sparklines periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setSparklines(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(key => {
          next[key] = [...next[key].slice(1), { val: Math.random() * 100 }];
        });
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  if (!data) return null;

  return (
    <aside className="w-80 h-screen sticky top-0 bg-card border-l border-muted p-6 overflow-y-auto hidden xl:block shadow-2xl z-40">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
            <Globe2 size={14} className="text-primary" />
            Global Risk Indices
          </h3>
          <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">LIVE</span>
        </div>
        <div className="space-y-6">
          {data.indices.map((index: any) => (
            <div key={index.name} className="group cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-xs font-bold text-primary group-hover:text-accent transition-colors">{index.name}</p>
                  <p className="text-[10px] text-muted-foreground">Volatility Matrix</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold tabular-nums text-primary">{index.value}</span>
                  <span className={`text-[10px] font-bold block ${index.status === 'high' ? 'text-red-500' : 'text-green-500'}`}>
                    {index.change}
                  </span>
                </div>
              </div>
              <div className="h-8 w-full opacity-50 group-hover:opacity-100 transition-opacity">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sparklines[index.name]}>
                    <Line 
                      type="monotone" 
                      dataKey="val" 
                      stroke={index.status === 'high' ? '#EF4444' : '#38BDF8'} 
                      strokeWidth={2} 
                      dot={false} 
                      animationDuration={1000}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary text-primary-foreground p-6 rounded-2xl relative overflow-hidden mb-10 shadow-lg border border-white/5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="relative z-10">
          <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-6 flex items-center gap-2">
            <Zap size={14} className="text-accent" />
            Intelligence Signals
          </h3>
          <div className="space-y-4">
            {data.signals.map((signal: any, i: number) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    signal.type === 'BUY' ? 'bg-accent' : signal.type === 'WATCH' ? 'bg-muted-foreground' : 'bg-red-500'
                  }`} />
                  <span className={`text-[10px] font-bold tracking-widest uppercase ${
                    signal.type === 'BUY' ? 'text-accent' : 'text-white/60'
                  }`}>{signal.type}</span>
                </div>
                <p className="text-xs font-bold text-white group-hover:text-accent transition-colors">{signal.asset}</p>
                <p className="text-[10px] text-white/40 mt-1 leading-relaxed">{signal.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-muted/30 border border-muted">
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-6 flex items-center gap-2">
          <BarChart3 size={14} />
          Institutional Sentiment
        </h3>
        <div className="space-y-4">
          <div className="relative h-3 bg-muted rounded-full overflow-hidden flex">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              className="h-full bg-primary" 
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '35%' }}
              className="h-full bg-accent" 
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-primary uppercase">Bullish</span>
              <span className="text-lg font-bold text-primary tabular-nums">65%</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-bold text-muted-foreground uppercase">Bearish</span>
              <span className="text-lg font-bold text-muted-foreground tabular-nums">35%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
