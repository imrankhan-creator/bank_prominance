import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Activity,
  ChevronRight,
  Server,
  Cpu,
  Network
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [systemLoad, setSystemLoad] = useState(24);

  // Simulate live data
  useEffect(() => {
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      value: 4000 + Math.random() * 2000
    }));
    setChartData(initialData);

    const interval = setInterval(() => {
      setChartData(prev => {
        const nextValue = prev[prev.length - 1].value + (Math.random() - 0.5) * 500;
        return [...prev.slice(1), { time: prev[prev.length - 1].time + 1, value: Math.max(2000, nextValue) }];
      });
      setSystemLoad(Math.floor(20 + Math.random() * 15));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Total Liquidity", value: "$42.8M", change: "+12.5%", trend: "up", color: "text-secondary" },
    { label: "Active Exposure", value: "$248.5M", change: "+4.2%", trend: "up", color: "text-accent" },
    { label: "Settlement Velocity", value: "14.2s", change: "-2.1s", trend: "up", color: "text-primary" },
    { label: "Risk Score", value: "AAA", change: "Stable", trend: "neutral", color: "text-green-500" },
  ];

  const recentActivity = [
    { id: 1, type: "KTT", entity: "Alpha Strategic", amount: "$123.5M", status: "Processing", time: "2m ago" },
    { id: 2, type: "SBLC", entity: "Standard Chartered", amount: "$100.0M", status: "Verified", time: "45m ago" },
    { id: 3, type: "SWEEP", entity: "Institutional Pool", amount: "$840K", status: "Completed", time: "2h ago" },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary">Executive Overview</h2>
          <p className="text-muted-foreground text-sm mt-1">Institutional Command & Control Center</p>
        </div>
        <div className="flex items-center gap-4 bg-muted/30 px-5 py-2.5 rounded-full border border-muted shadow-inner">
          <div className="flex items-center gap-2 pr-4 border-r border-muted">
            <Server size={14} className="text-green-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Node: SG-01</span>
          </div>
          <div className="flex items-center gap-2 pr-4 border-r border-muted">
            <Cpu size={14} className="text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Load: {systemLoad}%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">System Operational</span>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-6 rounded-xl border border-muted shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-2">{stat.label}</p>
            <div className="flex justify-between items-end">
              <h3 className="text-2xl font-bold tabular-nums text-primary">{stat.value}</h3>
              <div className={`flex items-center gap-0.5 text-xs font-bold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Performance Chart Placeholder */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-xl font-bold">Portfolio Performance</h3>
                  <p className="text-white/60 text-xs mt-1">Aggregate yield across all non-depository assets</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Live Feed
                  </div>
                  {['1D', '1W', '1M', '1Y'].map(t => (
                    <button key={t} className={`px-3 py-1 rounded-full text-[10px] font-bold ${t === '1M' ? 'bg-white text-primary' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="h-64 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={['auto', 'auto']} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#001F3F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#38BDF8', fontSize: '12px', fontWeight: 'bold' }}
                      labelStyle={{ display: 'none' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="var(--color-accent)" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      animationDuration={1000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-between mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                <span>01 May</span>
                <span>15 May</span>
                <span>31 May</span>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full -ml-24 -mb-24 blur-3xl" />
          </div>

          {/* Recent Activity */}
          <div className="bg-card rounded-xl border border-muted shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-muted flex justify-between items-center">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Live Transaction Stream</h3>
              <button className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:underline flex items-center gap-1">
                View Full Ledger <ChevronRight size={12} />
              </button>
            </div>
            <div className="divide-y divide-muted">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="px-6 py-4 flex items-center justify-between hover:bg-muted/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                      <Zap size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{activity.entity}</p>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{activity.type} • {activity.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold tabular-nums text-primary">{activity.amount}</p>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                      activity.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-accent/10 text-accent'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar / Quick Actions */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-muted/30 rounded-xl p-6 border border-muted">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Security Posture</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <ShieldCheck className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">Zero-Trust Active</p>
                  <p className="text-[10px] text-muted-foreground">All nodes verified via mTLS</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Globe className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">Global Clearance</p>
                  <p className="text-[10px] text-muted-foreground">SWIFT/ISO 20022 Compliant</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Activity className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">Encryption Layer</p>
                  <p className="text-[10px] text-muted-foreground">AES-256 Field-Level Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-muted shadow-sm">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "New KTT", icon: Zap },
                { label: "Issue SBLC", icon: ShieldCheck },
                { label: "Audit Log", icon: Activity },
                { label: "Network", icon: Globe },
              ].map((action, i) => (
                <button key={i} className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors border border-transparent hover:border-muted group">
                  <action.icon size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
